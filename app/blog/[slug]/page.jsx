// app/blog/[slug]/page.jsx

export const dynamic = 'force-dynamic'

import { db } from '@/lib/firebase'
import {
  collection,
  query,
  where,
  limit,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { format } from 'date-fns' // For date formatting
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import styles from './page.module.scss'
import SmallText from '@/components/typography/small-text/SmallText'

// Import html-react-parser and dompurify
import parse from 'html-react-parser'
import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import FeaturedPostHeader from '@/components/typography/blog-headers/featured-post-header/FeaturedPostHeader'

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  // Fetch the post data based on the slug
  const postsRef = collection(db, 'posts')
  const q = query(postsRef, where('slug', '==', slug), limit(1))
  const querySnapshot = await getDocs(q)

  if (querySnapshot.empty) {
    notFound()
  }

  const postDoc = querySnapshot.docs[0]
  const post = postDoc.data()
  const { title, imageURL, content, publishDate, tags } = post

  // Format the publish date
  const formattedPublishDate = publishDate
    ? format(publishDate.toDate(), 'MMMM d, yyyy')
    : 'Unknown'

  // Fetch tag names based on tag IDs
  let tagNames = []
  if (tags && tags.length > 0) {
    const tagsCollection = collection(db, 'tags')
    const tagPromises = tags.map(async (tagId) => {
      const tagDocRef = doc(tagsCollection, tagId)
      const tagDocSnap = await getDoc(tagDocRef)
      if (tagDocSnap.exists()) {
        const tagData = tagDocSnap.data()
        return tagData.name
      } else {
        return 'Unknown Tag'
      }
    })
    tagNames = await Promise.all(tagPromises)
  }

  // Configure dompurify for server-side rendering
  const window = new JSDOM('').window
  const purify = DOMPurify(window)

  // Sanitize and parse the content
  const sanitizedContent = purify.sanitize(content)
  const parsedContent = parse(sanitizedContent)

  return (
    <article className={`bg-blue ${styles.blogPostPage}`}>
      <FeaturedPostHeader className={`bg-yellow ${styles.title}`}>
        {title}
      </FeaturedPostHeader>
      {imageURL && (
        <Image
          className={`border-4 br-8 bs-6 ${styles.image}`}
          src={imageURL}
          alt={title}
          width={1620}
          height={1080}
        />
      )}
      <div className={styles.subContent}>
        <SmallText className={`bg-light border-2 bs-2 br-8 ${styles.date}`}>
          Published on {formattedPublishDate}
        </SmallText>
        {/* <div className={`bg-light border-2 bs-2 br-8 ${styles.tags}`}>
          Tags:
          {tagNames.length > 0 ? (
            tagNames.map((tagName, index) => (
              <span key={index} className='tag'>
                {tagName}
              </span>
            ))
          ) : (
            <span>No tags</span>
          )}
        </div> */}
      </div>
      {/* Render the parsed content */}
      <div className={`bg-light border-2 bs-3 br-6 ${styles.content}`}>
        {parsedContent}
      </div>
    </article>
  )
}
