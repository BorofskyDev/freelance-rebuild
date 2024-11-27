// lib/hooks/messages/useMessages.js

import { useState, useEffect } from 'react'
import { fetchMessages } from '@/lib/functions/messages/fetchMessages'

/**
 * Custom hook to fetch and manage messages from Firestore.
 *
 * @returns {Object} An object containing messages, loading state, and error state.
 */
export function useMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true // To prevent state updates if the component is unmounted

    const getMessages = async () => {
      try {
        const fetchedMessages = await fetchMessages()
        if (isMounted) {
          setMessages(fetchedMessages)
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load messages.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    getMessages()

    return () => {
      isMounted = false
    }
  }, [])

  return { messages, loading, error }
}
