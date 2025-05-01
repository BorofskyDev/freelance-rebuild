'use client'

import { motion } from 'framer-motion'
import styles from './ProjectIcon.module.scss'

export default function ProjectIcon({
  xmlns,
  viewBox,
  path,
  ariaLabel,
  iconFill,
  className,
}) {
  return (
    <li className={`${styles.projectIcon} ${className || ''}`}>
      <motion.svg
        xmlns={xmlns}
        viewBox={viewBox}
        aria-label={ariaLabel}
        className={styles.iconSvg}
        initial={{ scale: 0, y: 100 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 160,
          damping: 20,
        }}
      >
        <path d={path} fill={iconFill} />
      </motion.svg>
    </li>
  )
}
