// components/blog/posts-table/post-row/PostRow.jsx

'use client'

import Image from 'next/image'
import format from 'date-fns/format'
import styles from './PostRow.module.scss'

export default function PostRow({ post, onEditClick }) {
  const publishedStatus = post.published ? 'Published' : 'Draft'

  const createdDate = post.createdAt
    ? format(new Date(post.createdAt), 'PPP')
    : 'Unknown'

  const handleClick = () => {
    onEditClick(post.id)
  }

  return (
    <tr onClick={handleClick} className={`${styles.postRow}`}>
      <td className={`border-2 bs-2 br-4 bg-light ${styles.container}`}>
        {post.imageURL && (
          <Image
            src={post.imageURL}
            alt={post.title}
            width={100}
            height={60}
            style={{ objectFit: 'cover' }}
          />
        )}
      </td>
      <td className={`border-2 bs-2 br-4 bg-light ${styles.container}`}>
        {post.title}
      </td>
      <td
        className={`border-2 bs-2 br-4  ${styles.container} ${
          publishedStatus === 'Published' ? 'bg-green' : 'bg-blue'
        }`}
      >
        {publishedStatus}
      </td>
      <td className={`border-2 bs-2 br-4 bg-light ${styles.container}`}>
        {createdDate}
      </td>
    </tr>
  )
}
