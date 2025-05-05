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
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import BlogPostClient from './BlogPostClient'

// html sanitization
import parse from 'html-react-parser'
import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

export const dynamic = 'force-dynamic'

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  const postsRef = collection(db, 'posts')
  const q = query(postsRef, where('slug', '==', slug), limit(1))
  const querySnapshot = await getDocs(q)

  if (querySnapshot.empty) {
    notFound()
  }

  const postDoc = querySnapshot.docs[0]
  const post = postDoc.data()
  const { title, imageURL, content, publishDate } = post

  const formattedPublishDate = publishDate
    ? format(publishDate.toDate(), 'MMMM d, yyyy')
    : 'Unknown'

  const window = new JSDOM('').window
  const purify = DOMPurify(window)
  const sanitizedContent = purify.sanitize(content)
  const parsedContent = parse(sanitizedContent)

  return (
    <BlogPostClient
      title={title}
      imageURL={imageURL}
      formattedPublishDate={formattedPublishDate}
      parsedContent={parsedContent}
    />
  )
}
