// components/modals/blog-list-modal/BlogListModal.jsx
'use client'
import React from 'react'
import usePublishedPosts from '../../../lib/hooks/blog/usePublishedPosts'
import Link from 'next/link'
import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import styles from './BlogListModal.module.scss' // Assuming CSS module for styles
import Image from 'next/image'

const BlogListModal = () => {
  const { posts, nextPage, prevPage, isLastPage, isFirstPage, loading } =
    usePublishedPosts()

  return (
    <div className={`bg-violet border-3 br-8 bs-4 ${styles.blogListModal}`}>
      <MediumHeader className='bg-green'>Blog Posts</MediumHeader>
      

      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.postItem}>
              <Link href={`/blog/${post.slug}`}className={`border-4 br-6 bs-2 bg-light ${styles.postLink}`}>
                  <Image
                    height={1060}
                    width={1280}
                    src={post.imageURL}
                    alt={post.title}
                    className={`border-2 bs-2 br-6 ${styles.postImage}`}
                  />
                  <div className={styles.postContent}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postDate}>
                      {post.publishDate.toDateString()}
                    </p>
                    <p className={styles.postDescription}>{post.description}</p>
                  </div>
               
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className={styles.pagination}>
        <button
          onClick={prevPage}
          disabled={isFirstPage}
          className={`prev-button ${styles.button}`}
        >
          {/* Insert previous icon here */}
          {/* Example: <PrevIcon className={styles.icon} /> */}
          Prev
        </button>
        <button
          onClick={nextPage}
          disabled={isLastPage}
          className={`next-button ${styles.button}`}
        >
          {/* Insert next icon here */}
          {/* Example: <NextIcon className={styles.icon} /> */}
          Next
        </button>
      </div>
    </div>
  )
}

export default BlogListModal
