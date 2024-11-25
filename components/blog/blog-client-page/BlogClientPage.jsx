// components/blog/BlogClientPage.jsx

'use client' // Ensure this is a client component

import { useState } from 'react'
import PostsTable from '@/components/blog/posts-table/PostsTable'
import ModalButton from '@/components/buttons/modal-button/ModalButton'
import CreatePostModal from '@/components/modals/create-post-modal/CreatePostModal'
import EditPostModal from '@/components/modals/edit-post-modal/EditPostModal'
import MediumHeader from '@/components/typography/headers/medium-header/MediumHeader'
import styles from './BlogClientPage.module.scss'

export default function BlogClientPage({ posts }) {
  const [selectedPostId, setSelectedPostId] = useState(null)

  const handleEditClick = (postId) => {
    console.log('Opening EditPostModal with postId:', postId)
    setSelectedPostId(postId)
  }

  const handleCloseModal = () => {
    setSelectedPostId(null)
  }

  return (
    <section className={styles.blogPage}>
      <MediumHeader className='bg-pink'>Blog Functions</MediumHeader>
      <ul className={styles.functionsList}>
        <li>
          <ModalButton className='bg-green' modalContent={<CreatePostModal />}>
            Create New Blog Post
          </ModalButton>
        </li>
        <li>
          {/* Pass posts to PostsTable */}
          <PostsTable posts={posts} onEditClick={handleEditClick} />
        </li>
      </ul>
      {selectedPostId && (
        <EditPostModal postId={selectedPostId} onClose={handleCloseModal} />
      )}
    </section>
  )
}
