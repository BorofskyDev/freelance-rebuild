// components/buttons/theme-toggle/ThemeToggle.jsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import styles from './ThemeToggleButton.module.scss'

export default function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.themeToggle} ${className}`}
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
