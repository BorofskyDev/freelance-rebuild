// components/modals/message-modal/MessageModal.jsx

'use client'

import PropTypes from 'prop-types'
import format from 'date-fns/format'
import styles from './MessageModal.module.scss'

export default function MessageModal({ message }) {
  const {
    name,
    email,
    phone,
    businessName,
    subject,
    message: messageContent,
    createdAt,
  } = message

  return (
    <div className={`bg-light border-4 br-8 bs-4 ${styles.messageModalContent}`}>
      <h2 className={styles.subject}>{subject}</h2>
      <p className={styles.name}>
        <strong>Name:</strong> {name}
      </p>
      <p className={styles.contact}>
        <strong>Email:</strong> {email}
      </p>
      {phone && (
        <p className={styles.contact}>
          <strong>Phone:</strong> {phone}
        </p>
      )}
      {businessName && (
        <p className={styles.contact}>
          <strong>Business Name:</strong> {businessName}
        </p>
      )}
      <p className={styles.date}>
        <strong>Date Sent:</strong> {format(createdAt.toDate(), 'PPP p')}
      </p>
      <div className={styles.messageContent}>
        <strong>Message:</strong>
        <p>{messageContent}</p>
      </div>
    </div>
  )
}

MessageModal.propTypes = {
  message: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    businessName: PropTypes.string,
    subject: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.object.isRequired, // Firestore Timestamp
  }).isRequired,
}
