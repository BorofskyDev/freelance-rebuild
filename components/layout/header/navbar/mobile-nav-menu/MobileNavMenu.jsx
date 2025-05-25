'use client'

import { motion } from 'framer-motion'
import styles from './MobileNavMenu.module.scss'
import NavMenu from '../nav-menu/NavMenu'
import ResumeCvButton from '@/components/buttons/resume-cv-button/ResumeCvButton'
import ThemeToggle from '@/components/buttons/theme-toggle-button/ThemeToggleButton'

const menuVariants = {
  open: {
    x: 0,
    transition: {
      x: { type: 'easeInOut', stiffness: 1000, damping: 10 },
      opacity: { duration: 0.2 },
    },
  },
  closed: {
    x: 500,
    transition: {
      x: { type: 'backInOut', stiffness: 1000, damping: 20 },
      opacity: { duration: 0.3 },
    },
  },
}

export default function MobileNavMenu({ handleMenuToggle }) {
  return (
    <motion.nav className={styles.mobileMenu} variants={menuVariants}>
      <NavMenu handleMenuToggle={handleMenuToggle} />
      <ResumeCvButton className='bg-blue' />
      <ThemeToggle />
    </motion.nav>
  )
}
