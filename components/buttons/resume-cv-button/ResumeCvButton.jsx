'use client'

import ModalButton from '@/components/buttons/modal-button/ModalButton'
import styles from './ResumeCvButton.module.scss'
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'

export default function ResumeCvButton({ className = '' }) {
  const modalContent = (
    <div className={styles.modalBody}>
      <SectionHeader className='bg-yellow'>Need a copy?</SectionHeader>
      <div className={styles.modalBody__linkContainer}>
        <a href='/resume.pdf' download className={styles.downloadBtn}>
          Resume
          <span className={styles.fileType}>Downloads in PDF</span>
        </a>

        <a href='/cv.pdf' download className={styles.downloadBtn}>
          CV
          <span className={styles.fileType}>Downloads in PDF</span>
        </a>
      </div>
    </div>
  )

  return (
    <ModalButton
      className={`${styles.resumeCvTrigger} ${className}`}
      modalContent={modalContent}
    >
      Resume&nbsp;/&nbsp;CV
    </ModalButton>
  )
}
