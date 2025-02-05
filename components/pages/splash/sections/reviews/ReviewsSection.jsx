import FourSquareSectionContainer from '@/components/containers/section-containers/four-square-section-container/FourSquareSectionContainer'
import FourSquareBox from '@/components/containers/section-containers/four-square-section-container/four-square-box/FourSquareBox'
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import { icons } from '@/components/icons/icons'
import styles from './ReviewsSection.module.scss'
import ReviewContainer from '@/components/containers/review-container/ReviewContainer'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export default function ReviewsSection() {
  return (
    <FourSquareSectionContainer className={styles.reviewsSection}>
      <FourSquareBox className={`bg-red ${styles.boxOne}`}>
        <SectionHeader className='bg-blue'>Reviews</SectionHeader>
        {/* <InternalLinkBox href='/reviews'>View All Reviews!</InternalLinkBox> */}
      </FourSquareBox>
      <FourSquareBox className={`bg-violet ${styles.boxTwo}`}>
        <ReviewContainer
          reviewerName='Erika Profit'
          reviewerHref='#'
          review='Joel was great to work with! He was fun, collaborative, and delivered more value than what I expected.'
          icon={icons.cool.path}
          viewBox={icons.cool.viewBox}
          xmlns={icons.cool.xmlns}
          iconBg='bg-yellow'
          iconFill='fill-vibrant-purple'
        />
      </FourSquareBox>
      <FourSquareBox className={`bg-green ${styles.boxThree}`}>
        <ReviewContainer
          reviewerName='Kelli Lieboldt'
          reviewerHref='#'
          review='I saw a major increase in business because of the website Joel created for me. Being able to have a personal gallery for my clients is such a huge advantage! '
          icon={icons.dinosaur.path}
          viewBox={icons.dinosaur.viewBox}
          xmlns={icons.dinosaur.xmlns}
          iconBg='bg-pink'
          iconFill='fill-vibrant-blue'
        />
      </FourSquareBox>
      <FourSquareBox className={`bg-orange ${styles.boxFour}`}>
        <ReviewContainer
          reviewerName='Rebekah Fowler'
          reviewerHref='#'
          review='Joel was able to take my intro-level site and turn it into something gorgeous and eye-catching!'
          icon={icons.smilingSun.path}
          viewBox={icons.smilingSun.viewBox}
          xmlns={icons.smilingSun.xmlns}
          iconBg='bg-blue'
          iconFill='fill-vibrant-orange'
        />
      </FourSquareBox>
    </FourSquareSectionContainer>
  )
}
