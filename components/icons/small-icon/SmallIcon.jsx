'use client'
import { motion } from 'framer-motion'
import styles from './SmallIcon.module.scss'

export default function SmallIcon({
  icon,
  viewBox = '0 0 24 24',
  xmlns = 'http://www.w3.org/2000/svg',
  fill = 'currentColor',
  className = '',
  position = 'left',
}) {
  const positionClass = position === 'left' ? styles.left : styles.right

  return (
    <motion.div
      className={`absolute ${styles.smallIcon} ${positionClass} ${className}`}
      initial={{ x: position === 'left' ? 150 : -150, opacity: 1 }}
      whileInView={{
        rotate: position === 'left' ? 325 : -315,
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 160,
        damping: 12,
        duration: 0.3,
        ease: 'easeInOut',
      }}
      aria-hidden
    >
      <svg viewBox={viewBox} xmlns={xmlns} className={styles.smallIconImg}>
        <path d={icon} className={fill} />
      </svg>
    </motion.div>
  )
}
