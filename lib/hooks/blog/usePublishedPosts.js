// lib/hooks/blog/usePublishedPosts.js

import { useState, useEffect } from 'react'
import { db } from '../../firebase' // Adjust the path if necessary
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  endBefore,
  getDocs,
} from 'firebase/firestore'

const PAGE_SIZE = 5

const usePublishedPosts = () => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [lastDoc, setLastDoc] = useState(null)
  const [firstDoc, setFirstDoc] = useState(null)
  const [isLastPage, setIsLastPage] = useState(false)
  const [isFirstPage, setIsFirstPage] = useState(true)
  const [loading, setLoading] = useState(false)

  const fetchPosts = async (page) => {
    setLoading(true)
    try {
      let q
      if (page === 1) {
        q = query(
          collection(db, 'posts'),
          where('published', '==', true),
          orderBy('publishDate', 'desc'),
          limit(PAGE_SIZE)
        )
      } else if (page > currentPage) {
        if (!lastDoc) return
        q = query(
          collection(db, 'posts'),
          where('published', '==', true),
          orderBy('publishDate', 'desc'),
          startAfter(lastDoc),
          limit(PAGE_SIZE)
        )
      } else if (page < currentPage) {
        if (!firstDoc) return
        q = query(
          collection(db, 'posts'),
          where('published', '==', true),
          orderBy('publishDate', 'desc'),
          endBefore(firstDoc),
          limit(PAGE_SIZE)
        )
      }

      if (!q) return

      const snapshot = await getDocs(q)
      const fetchedPosts = snapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          title: data.title,
          slug: data.slug,
          publishDate: data.publishDate.toDate(),
          description: data.description,
          imageURL: data.imageURL,
        }
      })

      setPosts(fetchedPosts)
      setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null)
      setFirstDoc(snapshot.docs[0] || null)
      setIsLastPage(snapshot.docs.length < PAGE_SIZE)
      setIsFirstPage(page === 1)
      setCurrentPage(page)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts(1)

  }, [])

  const nextPage = () => {
    if (!isLastPage) {
      fetchPosts(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (!isFirstPage) {
      fetchPosts(currentPage - 1)
    }
  }

  return { posts, nextPage, prevPage, isLastPage, isFirstPage, loading }
}

export default usePublishedPosts
