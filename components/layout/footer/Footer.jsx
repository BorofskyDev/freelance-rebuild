'use client'
import { useAuth } from '@/lib/hooks/auth/useAuth'
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import MediumTitleContainer from '@/components/containers/title-containers/medium-title-container/MediumTitleContainer'
import ExternalButtonLink from '@/components/links/external-button-link/ExternalButtonLink'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import styles from './Footer.module.scss'
import LogoutButton from '@/components/buttons/logout-button/LogoutButton'

export default function Footer() {
  const { user, isAdmin, loading } = useAuth()
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <SectionHeader className={`bg-pink ${styles.header__title}`}>
          Footer!
        </SectionHeader>
      </div>

      <div className={styles.blocks}>
        <MediumTitleContainer className='bg-red'>
          Developer
        </MediumTitleContainer>
        <MediumTitleContainer className='bg-blue'>
          Designer
        </MediumTitleContainer>
        <MediumTitleContainer className='bg-green'>
          Business
        </MediumTitleContainer>
        <MediumTitleContainer className='bg-yellow'>
          Decent Ole&apos; Chap
        </MediumTitleContainer>
      </div>
      <div className={`bg-blue ${styles.links} ${styles.importantLinks}`}>
        <MediumTitleContainer className={`bg-pink ${styles.title}`}>
          Important Links
        </MediumTitleContainer>
        <ul className={styles.links__list}>
          <li>
            <InternalLinkBox href='/'>Home</InternalLinkBox>
          </li>
          <li>
            <InternalLinkBox href='/about'>About</InternalLinkBox>
          </li>
         
          <li>
            <InternalLinkBox href='/contact'>Contact</InternalLinkBox>
          </li>
          {loading ? null : user ? (
            <>
              {isAdmin && (
                <InternalLinkBox href='/admin'>Admin</InternalLinkBox>
              )}
              <li>
                <LogoutButton />
              </li>
            </>
          ) : (
            <InternalLinkBox href='/login'>Login</InternalLinkBox>
          )}
          <li>
            <InternalLinkBox href='/privacy-policy'>
              Privacy Policy
            </InternalLinkBox>
          </li>
          <li>
            <InternalLinkBox href='/terms-of-service'>
              Terms of Service
            </InternalLinkBox>
          </li>
          <li>
            <InternalLinkBox href='/cookies'>Cookies</InternalLinkBox>
          </li>
          <li>
            <InternalLinkBox href='/accessibility-statement'>
              Accessibility Statement
            </InternalLinkBox>
          </li>
        </ul>
      </div>
      <div className={`${styles.links} ${styles.linksLearning}`}>
        <MediumTitleContainer className={`bg-orange ${styles.title}`}>
          People That Helped Me Learn
        </MediumTitleContainer>
        <ul className={styles.links__list}>
          <ExternalButtonLink href='https://scrimba.com' className='bg-blue'>
            Scrimba
          </ExternalButtonLink>
          <ExternalButtonLink href='https://coder-coder.com' className='bg-red'>
            Coder Coder
          </ExternalButtonLink>
          <ExternalButtonLink
            href='https://www.kevinpowell.co'
            className='bg-violet'
          >
            Kevin Powell
          </ExternalButtonLink>
          <ExternalButtonLink
            href='https://codingheroes.io'
            className='bg-pink'
          >
            Coding Heroes
          </ExternalButtonLink>
          <ExternalButtonLink
            href='https://bruno-simon.com'
            className='bg-green'
          >
            Bruno Simon
          </ExternalButtonLink>
          <ExternalButtonLink
            href='https://courses.webdevsimplified.com'
            className='bg-yellow'
          >
            WebDev Simplified
          </ExternalButtonLink>
        </ul>
      </div>
      <div className={`bg-dark ${styles.links} ${styles.legalLinks}`}>
        <MediumTitleContainer className={`bg-blue ${styles.title}`}>
          It&apos;s Closing Time, One Last Call for Links
        </MediumTitleContainer>
        <ul className={styles.links__list}>
          <li>
            <InternalLinkBox href='/piracy-policy'>
              Piracy Policy
            </InternalLinkBox>
          </li>

          <li>
            <InternalLinkBox href='/zizek-policy'>Zizek Policy</InternalLinkBox>
          </li>

          <li>
            <InternalLinkBox href='/kafka-policy'>Kafka Policy</InternalLinkBox>
          </li>
        </ul>
      </div>
    </footer>
  )
}
