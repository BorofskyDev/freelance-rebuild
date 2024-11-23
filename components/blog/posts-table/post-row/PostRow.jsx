// components/blog/posts-table/post-row/PostRow.jsx

'use client'

import Image from 'next/image'
import format from 'date-fns/format'

export default function PostRow({ post, onEditClick }) {
  const publishedStatus = post.published ? 'Published' : 'Draft'

  const createdDate = post.createdAt
    ? format(new Date(post.createdAt), 'PPP')
    : 'Unknown'

  const handleClick = () => {
    onEditClick(post.id)
  }

  return (
    <tr onClick={handleClick} className='cursor-pointer hover:bg-gray-100'>
      <td>
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
      <td>{post.title}</td>
      <td>{publishedStatus}</td>
      <td>{createdDate}</td>
    </tr>
  )
}
