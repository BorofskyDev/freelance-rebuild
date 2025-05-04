import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import LargeTitleContainer from '@/components/containers/title-containers/large-title-container/LargeTitleContainer'
import { icons } from '@/components/icons/icons'
import MediumIcon from '@/components/icons/medium-icon/MediumIcon'
import TextContainer from '@/components/containers/text-container/TextContainer'
import ImageContainer from '@/components/containers/image-container/ImageContainer'
import ContactLinkContainer from '@/components/containers/contact-containers/contact-link-container/ContactLinkContainer'
import contactImage from '@/public/img/profile/joel-hat-cutout.png'
import styles from './ContactSection.module.scss'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export default function ContactSection() {
  return (
    <section className={`bg-violet ${styles.contactSection}`}>
      <div className={styles.containerOne}>
        <SectionHeader className='bg-green'>Contact</SectionHeader>
        <PageHeader>Hello Again!</PageHeader>
        <LargeTitleContainer className='relative bg-yellow'>
          <span>Let&apos;s work together!</span>
          <MediumIcon
            icon={icons.handshake.path}
            viewBox={icons.handshake.viewBox}
            xmlns={icons.handshake.xmlns}
            className={`bg-vibrant-purple fill-blue ${styles.icon}`}
          />
        </LargeTitleContainer>
        <TextContainer>
          I&apos;m open for consulting, freelance work, or partnerships. Feel
          free to reach out!
        </TextContainer>
      </div>
      <div className={styles.containerTwo}>
        <ImageContainer
          image={{
            src: contactImage,
            alt: 'Joel Borofsky',
            wrapperClass: 'bg-vibrant-blue',
            imageClass: 'bg-pink',
          }}
          title={{
            text: 'Joel Borofsky',
            containerBg: 'bg-yellow',
          }}
          note='not a model'
          icons={[
            {
              className: 'bg-blue',
              fill: 'fill-vibrant-red',
              icon: icons.fireHeart.path,
              xmlns: icons.fireHeart.xmlns,
              viewBox: icons.fireHeart.viewBox,
            },
            {
              className: 'bg-green',
              fill: 'fill-vibrant-purple',
              icon: icons.cuteCat.path,
              xmlns: icons.cuteCat.xmlns,
              viewBox: icons.cuteCat.viewBox,
            },
          ]}
        />
        <ContactLinkContainer />
        <InternalLinkBox href='/contact'>Use my contact form!</InternalLinkBox>
      </div>
    </section>
  )
}
