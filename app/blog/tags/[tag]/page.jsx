// app/blog/[tag]/page.jsx

'use client' // Marks this component as a Client Component

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation' // Correct hook for App Directory
import { db } from '@/lib/firebase'
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  getDoc,
} from 'firebase/firestore'
import PageContainer from '@/components/containers/page-container/PageContainer'
import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import BlogListModal from '@/components/modals/blog-list-modal/BlogListModal'
const TagPage = () => {
  const params = useParams()
  const tagId = params.tag // 'tag' now represents the Tag ID

  const [posts, setPosts] = useState([])
  const [tagName, setTagName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!tagId) return // Exit if tagId is undefined

    console.log(`Fetching data for Tag ID: ${tagId}`) // Debug log

    const fetchTagNameAndPosts = async () => {
      setLoading(true)
      try {
        // Fetch the Tag document using Tag ID
        const tagDocRef = doc(db, 'tags', tagId)
        const tagDocSnap = await getDoc(tagDocRef)
        if (tagDocSnap.exists()) {
          const tagData = tagDocSnap.data()
          console.log(`Tag Name: ${tagData.name}`) // Debug log
          setTagName(tagData.name)
        } else {
          console.log('Tag not found.') // Debug log
          setTagName('Unknown Tag')
        }

        // Fetch posts that contain this tag ID
        const postsCollection = collection(db, 'posts')
        const postsQuery = query(
          postsCollection,
          where('published', '==', true),
          where('tags', 'array-contains', tagId),
          orderBy('publishDate', 'desc')
        )
        const postsSnapshot = await getDocs(postsQuery)

        const fetchedPosts = []
        postsSnapshot.forEach((doc) => {
          const data = doc.data()
          fetchedPosts.push({
            id: doc.id,
            title: data.title,
            slug: data.slug,
            publishDate: data.publishDate.toDate(),
            description: data.description,
            imageURL: data.imageURL,
          })
        })

        console.log(`Fetched ${fetchedPosts.length} posts for Tag ID: ${tagId}`) // Debug log
        setPosts(fetchedPosts)
      } catch (err) {
        console.error('Error fetching posts by tag:', err)
        setError('Failed to load posts. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchTagNameAndPosts()
  }, [tagId])

  return (
    <PageContainer className='bg-orange'>
      <PageHeader>Tag: {tagName || tagId}</PageHeader>
      {loading ? (
        <p className='loading'>Loading posts...</p>
      ) : error ? (
        <p className='error'>{error}</p>
      ) : posts.length > 0 ? (
        <BlogListModal posts={posts} />
      ) : (
        <p>No posts found for this tag.</p>
      )}
    </PageContainer>
  )
}

export default TagPage
