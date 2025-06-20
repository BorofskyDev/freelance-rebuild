import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import { icons } from '@/components/icons/icons'
import LargeIcon from '@/components/icons/large-icon/LargeIcon'
import TextContainer from '@/components/containers/text-container/TextContainer'
import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import ColumnPageContainer from '@/components/containers/column-page-container/ColumnPageContainer'
import ColumnContentContainer from '@/components/containers/column-content-container/ColumnContentContainer'

export default function KafkaPolicyComponent() {
  return (
    <ColumnPageContainer bgColor='bg-dark'>
      <PageHeader>Kafka Policy</PageHeader>
      <LargeIcon
        icon={icons.cockroach.path}
        xmlns={icons.cockroach.xmlns}
        viewBox={icons.cockroach.viewBox}
        className={`bg-vibrant-purple fill-pink`}
      />
      <ColumnContentContainer>
        <TextContainer>
          Last updated: S x, 19xx
          <br />
          <br />
          It is assumed — without necessity of proof — that by entering this
          domain, the user has, at some unspecified time, agreed to all
          necessary agreements.
          <br />
          <br />
          Though these Terms cannot be read in full (nor are they available in
          any central repository), the User is expected to have intuited their
          structure in advance. Should a contradiction appear between what was
          expected and what occurs, the fault lies entirely with the User.
          <br />
          <br />
          These Terms are binding and self-amending. Their nature is mutable,
          not unlike the corridor in which the accused was once invited to wait
          (and did, loyally, until death).
        </TextContainer>

        <MediumHeader className='bg-red'>
          Article I: Access and Use
        </MediumHeader>
        <TextContainer>
          Access to this website is neither granted nor denied. It simply
          occurs.
          <br />
          <br />
          Any action taken on this site — clicking, scrolling, lingering,
          hesitating — constitutes both acceptance and violation of the Terms.
          <br />
          <br />
          The site may be revoked at any time, for reasons not disclosed,
          possibly not known.
        </TextContainer>

        <MediumHeader className='bg-green'>
          Article II: User Conduct
        </MediumHeader>
        <TextContainer>
          Users must behave in accordance with a set of principles that cannot
          be fully described, but whose breach will be immediately apparent to
          the invisible Committee.
          <br />
          <br />
          To dispute a decision, one must file Form 37-B (“Denial of
          Self-Knowledge”) and present it at the window that does not open.
        </TextContainer>

        <MediumHeader className='bg-blue'>
          Article III: Data and Responsibility
        </MediumHeader>
        <TextContainer>
          All data collected shall remain sealed in a file within a drawer, in a
          cabinet, in an office, in a building whose location is provisional.
          <br />
          <br />
          Responsibility for that data is held by an Administrator who has not
          been seen in many years. It is said he once visited the site himself,
          but did not agree to the Terms and was therefore absorbed into them.
          <br />
          <br />
          If your data is lost, it is assumed you gave it willingly.
        </TextContainer>

        <MediumHeader className='bg-yellow'>
          Article IV: Termination
        </MediumHeader>
        <TextContainer>
          You may terminate your usage of the site at any time. However, such
          termination does not affect the binding nature of this Agreement,
          which continues indefinitely.
          <br />
          <br />
          The only recognized method of exit is retroactive annulment, pending
          approval from the Tribunal of Abstract Violations.
        </TextContainer>
        <MediumHeader className='bg-violet'>Article V: S</MediumHeader>
        <TextContainer>
          This clause should already be known to you.
          <br />
          <br />
          If unknown, please report to the Bureau of Unforseen Circumstances and
          fill out form C-894-0j. Please allow anywhere from 8 weeks to an
          indefinite period for a reply. If the site is not here upon your
          return, you can cancel your request by filling out an amendment form
          C0-904-74f.
        </TextContainer>

        <MediumHeader className='bg-pink'>Final Clause</MediumHeader>
        <TextContainer>
          There is a door marked &quot;Terms & Agreements.&quot; A man stands
          before it. He asks to enter. The guard says &quot;not yet.&quot; He
          waits his entire life. At the moment of his death, he asks: &quot;Why,
          in all these years, did no one else try to enter?&quot;
          <br />
          <br />
          The guard replies: &quot;No one was here.&quot;
        </TextContainer>
      </ColumnContentContainer>
      <InternalLinkBox href='/contact'>Contact Me</InternalLinkBox>
    </ColumnPageContainer>
  )
}
