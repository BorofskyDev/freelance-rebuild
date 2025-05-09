import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import { icons } from '@/components/icons/icons'
import LargeIcon from '@/components/icons/large-icon/LargeIcon'
import TextContainer from '@/components/containers/text-container/TextContainer'
import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import ColumnPageContainer from '@/components/containers/column-page-container/ColumnPageContainer'
import ColumnContentContainer from '@/components/containers/column-content-container/ColumnContentContainer'

export default function TermsPage() {
  return (
    <ColumnPageContainer bgColor='bg-red'>
      <PageHeader>Terms of Service</PageHeader>
      <LargeIcon
        icon={icons.check.path}
        xmlns={icons.check.xmlns}
        viewBox={icons.check.viewBox}
        className={`bg-vibrant-blue fill-yellow`}
      />
      <ColumnContentContainer>
        <TextContainer>
          Last updated: May 8, 2025
          <br />
          <br />
          These Terms of Service govern your use of www.joelborofsky.com. By
          accessing or using this site, you agree to be bound by these terms. If
          you disagree with any part, please do not use the site.
        </TextContainer>

        <MediumHeader className='bg-red'>1. Use License</MediumHeader>
        <TextContainer>
          Permission is granted to view, download, and print content for
          personal, non-commercial use only. You may not modify, publish,
          distribute, or sell any part of this site without express written
          permission.
        </TextContainer>

        <MediumHeader className='bg-green'>2. Admin Panel Access</MediumHeader>
        <TextContainer>
          The admin panel is restricted to the site owner. Unauthorized access
          or misuse of the admin interface is prohibited and may lead to
          termination of access and legal action.
        </TextContainer>

        <MediumHeader className='bg-blue'>3. External Links</MediumHeader>
        <TextContainer>
          This site may contain links to third-party websites. These links are
          provided for your convenience; I do not endorse or assume
          responsibility for any content on external sites.
        </TextContainer>

        <MediumHeader className='bg-yellow'>
          4. Modifications to Service
        </MediumHeader>
        <TextContainer>
          I reserve the right to modify or discontinue the site (or any part
          thereof) without notice. Continued use constitutes acceptance of any
          changes.
        </TextContainer>

        <MediumHeader className='bg-pink'>5. Termination</MediumHeader>
        <TextContainer>
          I may terminate or suspend access to the site immediately, without
          prior notice, for any &quot;reason&quot; or no reason, including breach of these
          terms.
        </TextContainer>

        <MediumHeader className='bg-orange'>6. Disclaimer</MediumHeader>
        <TextContainer>
          All content is provided &quot;as is&quot; without warranties of any
          kind. I disclaim all representations and warranties, whether express
          or implied, including accuracy, reliability, or fitness for a
          particular purpose.
        </TextContainer>

        <MediumHeader className='bg-violet'>
          7. Limitation of Liability
        </MediumHeader>
        <TextContainer>
          In no event shall I be liable for any indirect, incidental, special,
          or consequential damages arising out of or relating to your use of the
          site.
        </TextContainer>

        <MediumHeader className='bg-red'>8. Governing Law</MediumHeader>
        <TextContainer>
          These terms shall be governed by and construed in accordance with the
          laws of the State of Kansas, without regard to its conflict of law
          provisions.
        </TextContainer>

        <MediumHeader className='bg-green'>9. Changes to Terms</MediumHeader>
        <TextContainer>
          I may update these Terms from time to time. Any changes will be posted
          here with a revised &quot;Last updated&quot; date. Please review
          periodically.
        </TextContainer>
      </ColumnContentContainer>
      <InternalLinkBox href='/contact'>Contact Me</InternalLinkBox>
    </ColumnPageContainer>
  )
}
