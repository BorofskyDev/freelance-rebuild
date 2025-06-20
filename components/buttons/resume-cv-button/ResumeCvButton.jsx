import ModalButton from '@/components/buttons/modal-button/ModalButton'
import styles from './ResumeCvButton.module.scss'
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import DownloadButton from '../download-button/DownloadButton'
import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import TextContainer from '@/components/containers/text-container/TextContainer'
import { icons } from '@/components/icons/icons'
import LargeIcon from '@/components/icons/large-icon/LargeIcon'




export default function ResumeCvButton({ className = '' }) {
  const modalContent = (
    <div className={styles.modalBody}>
      <SectionHeader className='bg-pink'>Need a copy?</SectionHeader>
      <div className={styles.modalBody__linkContainer}>
        <MediumHeader className='bg-red'>Resumes</MediumHeader>
        <LargeIcon
          icon={icons.america.path}
          viewBox={icons.america.viewBox}
          xmlns={icons.america.xmlns}
          className='bg-vibrant-red fill-blue'
        />
        <TextContainer>
          For those who prefer a French word for an American convention, here
          you go!
        </TextContainer>
        <div className={styles.modalBody__linkBox}>
          <DownloadButton
            path='/ui_ux_resume.pdf'
            title='Download UI/UX Resume'
            className='bg-red'
          />
          <DownloadButton
            path='/sales_resume.pdf'
            title='Download Sales Resume'
            className='bg-green'
          />
        </div>
        <MediumHeader className='bg-yellow'>CV</MediumHeader>
        <LargeIcon
          icon={icons.europe.path}
          viewBox={icons.europe.viewBox}
          xmlns={icons.europe.xmlns}
          className='bg-vibrant-blue fill-yellow'
        />
        <TextContainer>
          If French is too modern, how about some Latin? Get your Curriculum
          Vitae right here!
        </TextContainer>
        <div className={styles.modalBody__linkBox}>
          <DownloadButton
            path='/ui_cv.pdf'
            title='Download UI/UX CV'
            className='bg-orange'
          />
          <DownloadButton
            path='/sales_cv.pdf'
            title='Download Sales CV'
            className='bg-yellow'
          />
        </div>
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
