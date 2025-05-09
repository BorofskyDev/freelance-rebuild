// components/modals/Modal.jsx
'use client'


import { Dialog, DialogPanel } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, onClose, children, modalBg = '' }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as='div'
          open={isOpen}
          onClose={onClose} /* ⬅ Esc + click-outside close */
          className={styles.modalWrapper} /* add whatever wrapper styles */
        >
          {/* ─── Overlay ─────────────────────────────────── */}
          <motion.div
            className={styles.modalOverlay} /* DO NOT change */
            onClick={onClose} /* click-outside close */
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* ─── Centered Panel ─────────────────────────── */}
          <DialogPanel
            as={motion.div} /* Headless UI + Framer Motion */
            className={`border-4 br-8 bs-4 ${modalBg} ${styles.modalContent}`}
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
            exit={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label='Close Modal'
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>

            {children}
          </DialogPanel>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
