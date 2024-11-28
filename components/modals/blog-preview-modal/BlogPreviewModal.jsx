// components/modals/blog-preview-modal/BlogPreviewModal.jsx

'use client'

import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import styles from './BlogPreviewModal.module.scss'
import { useLatestPost } from '@/lib/hooks/blog/useLatestPost'
import Image from 'next/image'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export default function BlogPreviewModal() {
  const { latestPost, loading, error } = useLatestPost()

  if (loading) {
    return <div>Loading latest post...</div>
  }

  if (error) {
    return <div>Error loading latest post.</div>
  }

  if (!latestPost) {
    return <div>No posts available.</div>
  }

  const { title, imageURL, description, slug } = latestPost

  return (
    <div className={`bg-blue border-3 br-8 bs-4 ${styles.blogPreviewModal}`}>
      <MediumHeader className={`bg-red ${styles.title}`}>{title}</MediumHeader>
      {imageURL && (
        <Image
          src={imageURL}
          alt={title}
          width={800}
          height={600}
          className={`border-2 br-6 bs-3 ${styles.image}`}
        />
      )}
      <p className={`bg-light border-2 bs-3 br-6 ${styles.description}`}>{description}</p>
      <InternalLinkBox href={`/blog/${slug}`}>
        Continue reading {title}
      </InternalLinkBox>
    </div>
  )
}
