// lib/hooks/blog/useTagNames.js

import { useState, useEffect } from 'react'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export function useTagNames(tagIds) {
  const [tagNames, setTagNames] = useState(null)

  useEffect(() => {
    const fetchTagNames = async () => {
      if (tagIds && tagIds.length > 0) {
        try {
          const tagsCollection = collection(db, 'tags')
          const tagPromises = tagIds.map(async (tagId) => {
            const tagDocRef = doc(tagsCollection, tagId)
            const tagDocSnap = await getDoc(tagDocRef)
            if (tagDocSnap.exists()) {
              const tagData = tagDocSnap.data()
              return tagData.name
            } else {
              return 'Unknown Tag'
            }
          })
          const names = await Promise.all(tagPromises)
          setTagNames(names)
        } catch (err) {
          console.error('Error fetching tag names:', err)
          setTagNames([])
        }
      } else {
        setTagNames([])
      }
    }

    fetchTagNames()
  }, [tagIds])

  return tagNames
}
