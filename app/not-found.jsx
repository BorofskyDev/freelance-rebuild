import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import LargeTitleContainer from '@/components/containers/title-containers/large-title-container/LargeTitleContainer'
import MediumIcon from '@/components/icons/medium-icon/MediumIcon'
import image from '@/public/img/profile/four-oh-four.png'
import ImageContainer from '@/components/containers/image-container/ImageContainer'
import FlexColRowContainer from '@/components/containers/section-containers/flex-col-row-container/FlexColRowContainer'
import { icons } from '@/components/icons/icons'
import styles from './not-found.module.scss'
import TextContainer from '@/components/containers/text-container/TextContainer'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
export default function NotFound() {
  return (
    <FlexColRowContainer>
      <div className={`bg-violet ${styles.content}`}>
        <PageHeader>Four Oh Four!</PageHeader>

        <LargeTitleContainer className='relative bg-orange font-handwriting'>
          issa 404
          <MediumIcon
            icon={icons.brokenRobot.path}
            viewBox={icons.brokenRobot.viewBox}
            xmlns={icons.brokenRobot.xmlns}
            className='bg-dark fill-vibrant-green top-right'
          />
        </LargeTitleContainer>
        <TextContainer>
          Some things were never meant to be seen, like this picture, or this
          page. I&apos;m not sure what happened here, but the link you&apos;ve
          clicked on doesn&apos;t seem to exist or be working. I encourage you
          to weep and mourn the loss of this page, but also to move on and go
          back or go home (to my home page, not your home, for all I know
          that&apos;s where you are...I hope you&apos;re having a good day!)
        </TextContainer>
        <InternalLinkBox href='/'>ET Go Home</InternalLinkBox>
      </div>
      <div className={styles.image}>
        <ImageContainer
          image={{
            src: image,
            alt: 'Joel Borofsky around 12 in bed curled up with a weird, erratic face',
            wrapperClass: 'bg-red',
            imageClass: 'bg-vibrant-purple',
          }}
          title={{
            text: 'Joel Borofsky',
            containerBg: 'bg-orange',
          }}
          note='my god'
          icons={[
            {
              className: 'bg-dark',
              fill: 'fill-pink',
              icon: icons.lost.path,
              xmlns: icons.lost.xmlns,
              viewBox: icons.lost.viewBox,
            }, 
            {
              className: 'bg-green',
              fill: 'fill-vibrant-purple',
              icon: icons.wtf.path,
              xmlns: icons.wtf.xmlns,
              viewBox: icons.wtf.viewBox,
            }
          ]}
        
        />
      </div>
    </FlexColRowContainer>
  )
}
