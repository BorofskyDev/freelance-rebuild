// lib/hooks/blog/useLatestPost.js

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from 'firebase/firestore'

export function useLatestPost() {
  const [latestPost, setLatestPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const postsRef = collection(db, 'posts')
        const q = query(
          postsRef,
          where('published', '==', true),
          orderBy('publishDate', 'desc'),
          limit(1)
        )
        const querySnapshot = await getDocs(q)
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0]
          setLatestPost({ id: doc.id, ...doc.data() })
        } else {
          setLatestPost(null)
        }
      } catch (err) {
        console.error('Error fetching latest post:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestPost()
  }, [])

  return { latestPost, loading, error }
}
