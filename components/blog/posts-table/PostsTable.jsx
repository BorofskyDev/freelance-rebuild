// components/blog/posts-table/PostsTable.jsx
'use client'

import PostRow from './post-row/PostRow'
import styles from './PostsTable.module.scss'

export default function PostsTable({ posts, onEditClick }) {
  return (
    <div className={`bg-orange border-4 bs-4 br-6 ${styles.postsTable}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Status</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {posts.map((post) => (
            <PostRow key={post.id} post={post} onEditClick={onEditClick} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
