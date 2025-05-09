import { icons } from '@/components/icons/icons'
import ColumnPageContainer from '@/components/containers/column-page-container/ColumnPageContainer'
import ColumnContentContainer from '@/components/containers/column-content-container/ColumnContentContainer'
import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import LargeIcon from '@/components/icons/large-icon/LargeIcon'
import TextContainer from '@/components/containers/text-container/TextContainer'
import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export default function AccessibilityPageComponent() {
  return (
    <ColumnPageContainer bgColor='bg-orange'>
      <PageHeader>Accessibility Statement</PageHeader>
      <LargeIcon
        icon={icons.astronaut.path}
        xmlns={icons.astronaut.xmlns}
        viewBox={icons.astronaut.viewBox}
        className={`bg-vibrant-blue fill-yellow`}
      />

      <ColumnContentContainer>
        <TextContainer>
          Last updated: May 8, 2025
          <br />
          <br />
          JoelBorofsky.com is committed to ensuring digital accessibility for
          all users. We strive to meet or exceed WCAG 2.1 Level AA standards to
          make our content usable by everyone, including people with visual,
          auditory, mobility, or cognitive disabilities.
        </TextContainer>

        <MediumHeader className='bg-red'>Standards & Guidelines</MediumHeader>
        <TextContainer>
          - We follow Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
          <br />
          - We use semantic HTML, ARIA roles, and landmarks to support screen
          readers.
          <br />- Color contrast ratios meet or exceed 4.5:1 for normal text and
          3:1 for large text.
        </TextContainer>

        <MediumHeader className='bg-green'>Accessibility Features</MediumHeader>
        <TextContainer>
          - Keyboard navigation support across all interactive elements.
          <br />
          - Focus indicators and skip-links for efficient navigation.
          <br />
          - Alternative text for all meaningful images; decorative images have
          empty alt text.
          <br />- Resizable text up to 200% without loss of functionality or
          layout.
        </TextContainer>

        <MediumHeader className='bg-blue'>Tools & Testing</MediumHeader>
        <TextContainer>
          - Regular audits with Axe, WAVE, and manual screen-reader testing
          (NVDA, VoiceOver).
          <br />
          - Figma WCAG contrast checks during design.
          <br />- Continuous integration includes automated accessibility
          linting.
        </TextContainer>

        <MediumHeader className='bg-yellow'>Known Issues</MediumHeader>
        <TextContainer>
          While we aim for full compliance, you may encounter minor issues like:
          <br />
          - Occasionally unlabeled form controls in third-party embeds.
          <br />
          - Rare focus-order inconsistencies under 200% zoom on some pages.
          <br />
          We address new issues promptly as they are identified.
        </TextContainer>

        <MediumHeader className='bg-pink'>Feedback & Contact</MediumHeader>
        <TextContainer>
          If you experience accessibility barriers, please let us know:
        </TextContainer>
        <InternalLinkBox href='/contact'>Report an Issue</InternalLinkBox>

        <MediumHeader className='bg-orange'>Ongoing Commitment</MediumHeader>
        <TextContainer>
          We regularly review and update our site to improve accessibility. This
          statement may be revised; check back for updates.
        </TextContainer>
      </ColumnContentContainer>
    </ColumnPageContainer>
  )
}
