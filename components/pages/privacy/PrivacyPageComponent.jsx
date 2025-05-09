import { icons } from '@/components/icons/icons'
import LargeIcon from '@/components/icons/large-icon/LargeIcon'
import ColumnPageContainer from '@/components/containers/column-page-container/ColumnPageContainer'
import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import ColumnContentContainer from '@/components/containers/column-content-container/ColumnContentContainer'
import TextContainer from '@/components/containers/text-container/TextContainer'
import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export default function PrivacyPageComponent() {
  return (
    <ColumnPageContainer bgColor='bg-blue'>
      <PageHeader>Privacy Policy!</PageHeader>
<LargeIcon
  icon={icons.smilingSun.path}
  xmlns={icons.smilingSun.xmlns}
  viewBox={icons.smilingSun.viewBox}
  className={`bg-vibrant-blue fill-yellow`}
/>
<ColumnContentContainer>

</ColumnContentContainer>
        <TextContainer>
          Last updated: May 8, 2025 - Thank you for visiting Joel
          Borofsky&apos;s personal site. Your privacy is important to me. This
          policy explains what (minimal) information I collect, how I use it,
          and your rights.
        </TextContainer>
        <MediumHeader className='bg-red'>Information I Collect</MediumHeader>
        <TextContainer>
          <br /> <br />
          <strong>Site Analytics</strong>: I use Vercel Analytics (a cookieless,
          privacy-focused service) to monitor overall site traffic: pages
          viewed, referrers, and basic performance metrics. This data is
          aggregated and anonymous—no personal identifiers (names, emails, IPs)
          are stored or shared.
          <br /> <br />
          <strong>Contact Form Submissions</strong>: If you choose to reach out
          via the form at Contact, I collect the name, email address, and
          message you provide. This information is stored securely in Firebase
          and is accessible only to me via the site&apos;s admin panel.
        </TextContainer>
        <InternalLinkBox href='/contact'>Contact Me</InternalLinkBox>
        <MediumHeader className='bg-green'>
          How I Use Your Information
        </MediumHeader>
        <TextContainer>
          Analytics Data helps me understand which pages people find most
          useful, so I can improve site content and performance.
          <br /> <br />
          Contact Form Data enables me to reply to your questions, feedback, or
          project inquiries.
          <br /> <br /> I do not use your information for advertising,
          profiling, or any third-party marketing.
        </TextContainer>
        <MediumHeader className='bg-blue'>Sharing & Disclosure</MediumHeader>
        <TextContainer>
          I do not sell, trade, or rent your personal data to anyone.
          <br /> <br /> I will never share your contact-form submissions with
          third parties, except if legally required (e.g., court order or
          governmental request). <br />
          <br />
          Firebase and Vercel operate as data processors on my behalf; they
          handle storage and analytics hosting but have no rights to your data
          beyond that purpose.
        </TextContainer>
        <MediumHeader className='bg-yellow'>Data Retention</MediumHeader>
        <TextContainer>
          <strong>Analytics</strong>: Retained only in aggregated form; no
          individual-level data is stored.
          <br /> <br />
          <strong>Contact Submissions</strong>: Retained as long as necessary to
          address your inquiry and for record-keeping; you may request deletion
          at any time (see “Your Rights” below).
        </TextContainer>
        <MediumHeader className='bg-pink'>Security Measures</MediumHeader>
        <TextContainer>
          All data in transit is encrypted via HTTPS/TLS.
          <br />
          <br />
          Contact submissions in Firebase are protected by Google&apos;s
          security infrastructure and require my authenticated access—no public
          access.
          <br /> <br />I periodically review security best practices to keep
          your information safe.
        </TextContainer>
        <MediumHeader className='bg-orange'>Your Rights</MediumHeader>
        <TextContainer>
          Under applicable data-protection laws, you may:
          <br /> <br />
          Access the personal data I hold about you (e.g., your contact-form
          submission).
          <br />
          <br />
          Rectify or update it if it&apos;s inaccurate.
          <br />
          <br />
          Erase it—ask me to delete your message from my records at any time.
          <br /> <br />
          Object to any further processing beyond what&apos;s described here.
          <br />
          <br />
          To exercise any of these rights, please use the Contact Form or email
          me directly via that form.
        </TextContainer>
        <InternalLinkBox href='/contact'>Contact Me</InternalLinkBox>
        <MediumHeader className='bg-violet'>
          Changes To This Policy
        </MediumHeader>
        <TextContainer>
          I may update this policy from time to time. Any changes will be posted
          here with a revised &quot;Last updated&quot; date. Please check back
          occasionally to stay informed.
        </TextContainer>
    </ColumnPageContainer>
  )
}


