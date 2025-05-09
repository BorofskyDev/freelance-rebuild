'use client'

import { useState } from 'react'
import FlexColContainer from '@/components/containers/section-containers/flex-col-container/FlexColContainer'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'
import ImageContainer from '@/components/containers/image-container/ImageContainer'
import aboutPicture from '@/public/img/profile/kyiv-bird-cutout2.png'
import { icons } from '@/components/icons/icons'
import TextContainer from '@/components/containers/text-container/TextContainer'
import ResumeCvButton from '@/components/buttons/resume-cv-button/ResumeCvButton'
import Modal from '@/components/modals/Modal'
import { CVAbout, DeveloperAbout, DesignerAbout } from './about-modals'
import styles from './AboutPageComponent.module.scss'
import PageHeader from '@/components/typography/headers/page-header/PageHeader'

export default function AboutPageComponent() {
  const [openModal, setOpenModal] = useState(null)
  const closeModal = () => setOpenModal(null)
  return (
    <>
      <FlexColContainer
        id='about'
        className={`bg-violet ${styles.aboutPageComponent}`}
      >
        <PageHeader>About Me!</PageHeader>
        <div className={`relative ${styles.servicesWrapper}`}>
          <SmallServiceContainer
            className='bg-vibrant-red'
            icon={icons.developer.path}
            viewBox={icons.developer.viewBox}
            xmlns={icons.developer.xmlns}
            fill='fill-green'
            iconClassName='bg-dark'
            headerText='Developer'
            headerClassName='bg-blue'
          >
            <button
              onClick={() => setOpenModal('developer')}
              className={styles.modalButton}
            >
              Learn more about my development skills and experience
            </button>
          </SmallServiceContainer>

          <SmallServiceContainer
            className='bg-vibrant-green'
            icon={icons.designer.path}
            viewBox={icons.designer.viewBox}
            xmlns={icons.designer.xmlns}
            fill='fill-vibrant-blue'
            iconClassName='bg-yellow'
            headerText='Designer'
            headerClassName='bg-pink'
          >
            <button
              onClick={() => setOpenModal('designer')}
              className={styles.modalButton}
            >
              Lean more about my design focus
            </button>
          </SmallServiceContainer>

          <SmallServiceContainer
            className='bg-vibrant-blue'
            icon={icons.business.path}
            viewBox={icons.business.viewBox}
            xmlns={icons.business.xmlns}
            fill='fill-blue'
            iconClassName='bg-vibrant-red'
            headerText='Business'
            headerClassName='bg-yellow'
            headerSpanText='(er)'
          >
            <button
              onClick={() => setOpenModal('cv')}
              className={styles.modalButton}
            >
              Learn more about my professional background
            </button>
          </SmallServiceContainer>
        </div>
        <div className={styles.bioContainer}>
          <ImageContainer
            image={{
              src: aboutPicture,
              alt: 'Joel Borofsky with fat brown birds on his arm and a falcon on his shoulder',
              wrapperClass: 'bg-pink',
              imageClass: 'bg-vibrant-blue',
            }}
            title={{
              text: 'Bird Attorney',
              containerBg: 'bg-yellow',
            }}
            note='not really'
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
                fill: 'fill-green',
                icon: icons.world.path,
                xmlns: icons.world.xmlns,
                viewBox: icons.world.viewBox,
              },
            ]}
          />
          <TextContainer>
            In 2018 I found myself helping newly arrived refugees navigate the
            maze of U.S. banking. Instead of lecturing them from a booklet as
            instructed, I sat down—through a translator—and got to know them and
            their story first. From that, I built a custom plan (&quot;If you
            want X, here&apos;s exactly how you get it&quot;), and watched them
            go from frustrated and confused to empowered in a few conversations.
            That moment cemented my belief that empathy—really listening
            first—turns complexity into clarity.
            <br />
            <br />
            A few years later, five weeks into a Python-heavy bootcamp, we
            started learning web development out of necessity. I built a simple
            counter-app in JavaScript but wanted to style it. Thing is, I
            didn&apos;t know how. 5 hours later after watching Kevin Powell
            tutorials, I realized that I wanted to go into web development and
            not data analytics. CSS became my creative refuge and the gateway to
            component-driven React, then Next.js, then accessible, user-first
            UIs. Today, I bake keyboard navigation, ARIA labels, and focus
            states into every build - because if someone can&apos;t click it or
            see it, it doesn't work.
            <br />
            <br />
            When not coding or designing, you&apos;ll find me world-building in
            Crusader Kings III, sketching some half-formed fiction that will
            eventually be abandoned, or diving into engineering history,
            paleo-history, history in general, and of course Star Wars lore.
            <br />
            <br />
            I want to join a quirky, UI/UX-first team where I can swear the
            small stuff and build features that make people pause, smile, and
            say, &apos;Oh, nice button.&apos;
            
          </TextContainer>
        </div>
        <div className={styles.linkContainer}>
          <ResumeCvButton className='bg-green' />
        </div>
      </FlexColContainer>

      <Modal
        isOpen={openModal === 'cv'}
        onClose={closeModal}
        modalBg='bg-vibrant-blue'
      >
        <CVAbout />
      </Modal>

      <Modal
        isOpen={openModal === 'developer'}
        onClose={closeModal}
        modalBg='bg-vibrant-red'
      >
        <DeveloperAbout />
      </Modal>

      <Modal
        isOpen={openModal === 'designer'}
        onClose={closeModal}
        modalBg='bg-vibrant-green'
      >
        <DesignerAbout />
      </Modal>
    </>
  )
}
