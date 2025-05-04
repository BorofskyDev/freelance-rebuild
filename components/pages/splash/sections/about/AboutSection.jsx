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
          image={{
            src: aboutPicture,
            alt: 'Joel Borofsky with a falcon on his shoulder',
            wrapperClass: 'bg-yellow',
            imageClass: 'bg-vibrant-red',
          }}
          title={{
            text: 'Joel Borofsky',
            containerBg: 'bg-green',
          }}
          note='a bit older'
          icons={[
            {
              className: 'bg-vibrant-purple',
              fill: 'fill-vibrant-green',
              icon: icons.falcon.path,
              xmlns: icons.falcon.xmlns,
              viewBox: icons.falcon.viewBox,
            },
            {
              className: 'bg-vibrant-blue',
              fill: 'fill-orange',
              icon: icons.liberty.path,
              xmlns: icons.liberty.xmlns,
              viewBox: icons.liberty.viewBox,
            },
          ]}
        />
        <TextContainer>
          Hello there!
          <br />
          <br />
          I&apos;m Joel, a UI/UX developer based in Kansas who believes good
          design should feel like kindness.
          <br />
          <br />
          I build web apps that don&apos;t just function — they invite. My core
          stack is Next.js + SCSS (but I&apos;m comfortable with Tailwind or
          Styled Components too). Whether it&apos;s civic tools reaching
          Congress or quirky ecommerce platforms for real-world clients, I bring
          a design-first mindset to full-stack development.
          <br />
          <br />
          Once upon a time, I tried the banker bro life. Turns out I&apos;m too
          empathetic for that — and too allergic to ego to thrive as a tech bro.
          So now I&apos;m doing what actually fits: designing systems that scale
          and interfaces that feel good to use. That business background still
          shows up, though — in the way I think like a founder, ask the right
          questions early, and collaborate with stakeholders like we&apos;re
          building something that matters (and I hope we are!).
          <br />
          <br />
          I&apos;m looking for remote-first roles (or hybrid work in creative
          hubs like New England, the Upper Midwest, or the Pacific Northwest).
          If you&apos;re building tools for the public good — not just
          &quot;changing the world&quot; on a pitch deck — or if you care deeply
          about accessible, joyful UI... let&apos;s talk.
          <br />
          <br />
          Falcon not included.
        </TextContainer>
      </div>
      <div className={styles.linkContainer}>
        <InternalLinkBox href='/about/'>Learn more about me!</InternalLinkBox>
        <ResumeCvButton className='bg-green' />
      </div>
    </FlexColContainer>
  )
}
