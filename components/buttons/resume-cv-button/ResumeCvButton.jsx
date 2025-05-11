

import ModalButton from '@/components/buttons/modal-button/ModalButton'
import styles from './ResumeCvButton.module.scss'
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import DownloadButton from '../download-button/DownloadButton'

export default function ResumeCvButton({ className = '' }) {
  const modalContent = (
    <div className={styles.modalBody}>
      <SectionHeader className='bg-red'>Need a copy?</SectionHeader>
      <div className={styles.modalBody__linkContainer}>
        <DownloadButton
          path='/resume.pdf'
          title='Download Resume'
          className='bg-yellow'
        />
        <DownloadButton
          path='/cv.pdf'
          title='Download CV'
          className='bg-green'
        />
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
