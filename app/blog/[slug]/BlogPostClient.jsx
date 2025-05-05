'use client'

import Image from 'next/image'
import SmallText from '@/components/typography/small-text/SmallText'
import FeaturedPostHeader from '@/components/typography/blog-headers/featured-post-header/FeaturedPostHeader'
import ScrollProgress from '@/components/pages/blog/scroll-progress/ScrollProgress'
import styles from './page.module.scss'
import parse from 'html-react-parser'

export default function BlogPostClient({
  title,
  imageURL,
  formattedPublishDate,
  parsedContent,
}) {
  return (
    <>
      <ScrollProgress />
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
        </div>
        <div className={`bg-light border-2 bs-3 br-6 ${styles.content}`}>
          {parsedContent}
        </div>
      </article>
    </>
  )
}
