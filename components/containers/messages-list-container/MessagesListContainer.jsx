// components/forms/messages/MessagesListContainer.jsx

'use client'

import { useState } from 'react'
import { useMessages } from '@/lib/hooks/messages/useMessages'
import MessageModal from '@/components/modals/message-modal/MessageModal'
import Modal from '@/components/modals/Modal'
import styles from './MessagesListContainer.module.scss'
import format from 'date-fns/format'

export default function MessagesListContainer() {
  const { messages, loading, error } = useMessages()
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMessageClick = (message) => {
    setSelectedMessage(message)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMessage(null)
  }

  if (loading) {
    return <p>Loading messages...</p>
  }

  if (error) {
    return <p className={styles.errorText}>{error}</p>
  }

  return (
    <div className={styles.messagesListContainer}>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className={styles.messagesTable}>
          <thead>
            <tr>
              <th className='bg-light'>Name</th>
              <th className='bg-light'>Date Sent</th>
              <th className='bg-light'>Subject</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr
                key={message.id}
                onClick={() => handleMessageClick(message)}
                className={styles.messageRow}
              >
                <td>{message.name}</td>
                <td>{format(message.createdAt.toDate(), 'PPP')}</td>
                <td className={styles.subjectCell}>
                  {message.subject.length > 30
                    ? `${message.subject.substring(0, 30)}...`
                    : message.subject}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Message Modal */}
      <Modal modalBg='bg-pink' isOpen={isModalOpen} onClose={closeModal}>
        {selectedMessage && <MessageModal message={selectedMessage} />}
      </Modal>
    </div>
  )
}
