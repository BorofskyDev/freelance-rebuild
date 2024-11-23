// components/blog-section/BlogSection.jsx

'use client'

import { useLatestPost } from '@/lib/hooks/blog/useLatestPost'
import { useTagNames } from '@/lib/hooks/blog/useTagNames'
import { format } from 'date-fns'
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import FeaturedPostPreview from '@/components/blog/featured-post-preview/FeaturedPostPreview'
import styles from './BlogSection.module.scss'
import { useMemo } from 'react'

export default function BlogSection() {
  // Call hooks at the top level
  const { latestPost, loading, error } = useLatestPost()

  // Memoize the tags array to prevent unnecessary re-renders
  const tags = useMemo(() => latestPost?.tags || [], [latestPost?.tags])

  // Use the useTagNames hook with the memoized tags array
  const tagNames = useTagNames(tags)

  // Format the date
  const publishDate = latestPost?.publishDate
  const formattedDate = publishDate
    ? format(publishDate.toDate(), 'MMMM d, yyyy')
    : 'Unknown date'

  // Extract other data from latestPost or use default values
  const title = latestPost?.title || ''
  const description = latestPost?.description || ''
  const imageURL = latestPost?.imageURL || ''
  const slug = latestPost?.slug || ''
  const href = `/blog/${slug}`

  // The "category" prop is the "tags" joined into a string
  const category =
    tagNames && tagNames.length > 0 ? tagNames.join(', ') : 'No Tags'

  // Now handle loading and error states
  if (loading) {
    return (
      <section className={`bg-blue ${styles.blogSection}`}>
        <SectionHeader className='bg-pink'>Blog</SectionHeader>
        <p>Loading latest post...</p>
      </section>
    )
  }

  if (error || !latestPost) {
    return (
      <section className={`bg-blue ${styles.blogSection}`}>
        <SectionHeader className='bg-pink'>Blog</SectionHeader>
        <p>No latest post available.</p>
      </section>
    )
  }

  return (
    <section className={`bg-blue ${styles.blogSection}`}>
      <SectionHeader className='bg-pink'>Blog</SectionHeader>
      <FeaturedPostPreview
        cardBg='bg-red'
        image={imageURL}
        title={title}
        date={formattedDate}
        content={description}
        category={category}
        href={href}
      />
    </section>
  )
}
