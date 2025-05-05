'use client'

import { useScroll, useSpring, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import styles from './ScrollProgress.module.scss'

export default function ScrollProgress() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    container: typeof window !== 'undefined' ? undefined : ref,
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className={styles.progressBar} style={{ scaleX }} />
}
