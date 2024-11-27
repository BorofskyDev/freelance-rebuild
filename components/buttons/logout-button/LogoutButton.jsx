// components/auth/LogoutButton.jsx

'use client'

import { auth } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import styles from './LogoutButton.module.scss'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    // Clear the session cookie by calling the logout API route
    await fetch('/api/logout', {
      method: 'POST',
    })
    router.push('/login')
  }

  return <button className={`bg-red border-2 br-8 bs-2 fw-bold ${styles.logoutButton}`} onClick={handleLogout}>Logout</button>
}
