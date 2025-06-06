// app/admin/layout.jsx

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/hooks/auth/useAuth' // Adjust the path if necessary
import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import styles from './layout.module.scss'
import PageContainer from '@/components/containers/page-container/PageContainer'
export default function AdminLayout({ children }) {
  const router = useRouter()
  const { isAdmin, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      if (isAdmin === false) {
        router.push('/') // Redirect non-admin users to the main page
      }
      // If isAdmin is true, allow access to admin pages
    }
  }, [isAdmin, loading, router])

  if (loading) {
    return (
      <div >
        {/* Optional: Add a loading spinner */}
        <p>Loading Admin Dashboard...</p>
      </div>
    )
  }

  // Optionally, you can handle the case where isAdmin is undefined or null
  if (isAdmin === false) {
    return null // Prevent rendering admin content if not admin
  }

  return (
    <PageContainer className={`bg-blue ${styles.layout}`}>
      <PageHeader>Admin Page!</PageHeader>
      <InternalLinkBox href='/admin'>Admin Dashboard</InternalLinkBox>

      {/* Optional: Add admin-specific layout components like a sidebar or header */}
      {children}
    </PageContainer>
  )
}
