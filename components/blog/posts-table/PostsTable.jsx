// components/blog/posts-table/PostsTable.jsx
'use client'

import PostRow from './post-row/PostRow'

export default function PostsTable({ posts, onEditClick }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Status</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <PostRow key={post.id} post={post} onEditClick={onEditClick} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
