import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import FlexColContainer from '@/components/containers/section-containers/flex-col-container/FlexColContainer'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import ImageContainer from '@/components/containers/image-container/ImageContainer'
import aboutPicture from '@/public/img/profile/joel-cutout-kyiv.png'
import { icons } from '@/components/icons/icons'
import styles from './AboutSection.module.scss'
import TextContainer from '@/components/containers/text-container/TextContainer'
import ResumeCvButton from '@/components/buttons/resume-cv-button/ResumeCvButton'

export default function AboutSection() {
  return (
    <FlexColContainer id='about' className={`bg-red ${styles.aboutSection}`}>
      <SectionHeader className='bg-blue'>About</SectionHeader>
      <div className={`relative ${styles.servicesWrapper}`}>
        <SmallServiceContainer
          className='bg-orange'
          icon={icons.developer.path}
          viewBox={icons.developer.viewBox}
          xmlns={icons.developer.xmlns}
          iconFill='fill-green'
          iconClassName='bg-dark'
          headerText='Developer'
          headerClassName='bg-violet'
        >
          <p className='border-2 br-5 bs-2'>
            Next.js, React, Firebase, Prisma, & more!
          </p>
        </SmallServiceContainer>

        <SmallServiceContainer
          className='bg-blue'
          icon={icons.designer.path}
          viewBox={icons.designer.viewBox}
          xmlns={icons.designer.xmlns}
          iconFill='fill-vibrant-blue'
          iconClassName='bg-orange'
          headerText='Designer'
          headerClassName='bg-pink'
        >
          <p className='border-2 br-5 bs-2'>
            Figma, SASS/SCSS, Framer Motion, TailwindCSS, Accesibility-first
            design, and even more!
          </p>
        </SmallServiceContainer>

        <SmallServiceContainer
          className='bg-green'
          icon={icons.business.path}
          viewBox={icons.business.viewBox}
          xmlns={icons.business.xmlns}
          iconFill='fill-vibrant-orange'
          iconClassName='bg-vibrant-purple'
          headerText='Business'
          headerClassName='bg-yellow'
          headerSpanText='(er)'
        >
          <p className='border-2 br-5 bs-2'>
            Financial sales, marketing, stakeholder relations, entrepreneurship,
            and even retail!
          </p>
        </SmallServiceContainer>
      </div>
      <div className={styles.bioContainer}>
        <ImageContainer
          className='bg-yellow'
          src={aboutPicture}
          alt='Joel Borofsky with a falcon on his shoulder'
          imageBg='bg-vibrant-pink'
          titleContainerBg='bg-violet'
          title='Joel Borofsky'
          note='a bit older'
          iconBg1='bg-blue'
          iconFill1='fill-vibrant-blue'
          icon1={icons.falcon.path}
          xmlns1={icons.falcon.xmlns}
          viewbox1={icons.falcon.viewBox}
          iconBg2='bg-vibrant-blue'
          iconFill2='fill-red'
          icon2={icons.liberty.path}
          xmlns2={icons.liberty.xmlns}
          viewBox2={icons.liberty.viewBox}
        />
        <TextContainer>
          Hello there!
          <br />
          <br />
          I&apos;m Joel, a full-stack (as much as one can be) UI/UX developer
          based in Kansas, USA, passionate about creating digital experiences
          where a component isn&apos;t truly functional until it&apos;s
          beautiful, accessible, and delightful.
          <br />
          <br />
          Before diving into the world wide web (of development and design), I
          spent years in banking, finance, and business developmens across North
          Carolina and New York, supporting startups and even launching my own
          ventures. The unique blend of design, tech, and business acumen allows
          me to deeply understand user needs, stakeholder expectations, and how
          great UI/UX can drive meaningful business outcomes.
          <br />
          <br />
          My go-to stack of Next.js with SCSS and modern styling approaches is
          chosen not just for effeciency, but for their ability to create
          accessible and intuitive user interfaces. No matter the task, my goal
          is the same: make the web work for everyone.
          <br />
          <br />
          Currently, I&apos;m seeking new opportutnities with forward-thinking
          teams across Europe, or remotely within the US. For those who are
          offering a hybrid or in-office situation, if you&apos;re located in a
          vibrant, creative hub like New England, the Upper Midwest, or the
          Pacific North West, feel free to reach out!
          <br />
          <br />
          If you&apos;re a recruiter or represent a company that values
          creativity, accessibility, and thoughtful UI/UX design, let&apos;s
          talk! I&apos;ve been told I&apos;m fun to work with, I mean, how many
          UI/UX developers have a profile picture featuring themselves with a
          falcon?
        </TextContainer>
      </div>
      <div className={styles.linkContainer}>
      <InternalLinkBox href='/about/'>Learn more about me!</InternalLinkBox>
      <ResumeCvButton className='bg-green' />
      </div>
    </FlexColContainer>
  )
}
