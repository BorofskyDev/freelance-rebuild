// lib/functions/messages/fetchMessages.js

import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'

/**
 * Fetches all messages from the 'messages' collection, ordered by createdAt descending.
 *
 * @returns {Promise<Array>} An array of message objects.
 */
export async function fetchMessages() {
  try {
    const messagesRef = collection(db, 'messages')
    const q = query(messagesRef, orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    const messages = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return messages
  } catch (error) {
    console.error('Error fetching messages:', error)
    throw error
  }
}
