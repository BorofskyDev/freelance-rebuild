// components/pages/admin/messages/AdminMessagesPage.jsx

'use client'

import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import MessagesListContainer from '@/components/containers/messages-list-container/MessagesListContainer'
import styles from './page.module.scss'

export default function AdminMessagesPage() {
  return (
    <main className={styles.adminMessagesPage}>
      <SectionHeader className={`bg-pink ${styles.header}`}>
        Messages
      </SectionHeader>
      <MessagesListContainer />
    </main>
  )
}
