import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import PageContainer from '@/components/containers/page-container/PageContainer'
import ContactLinkContainer from '@/components/containers/contact-containers/contact-link-container/ContactLinkContainer'
import ContactForm from '@/components/forms/contact-form/ContactForm'


export default function ContactPage() {
    return (
      <PageContainer className='bg-violet'>
        <PageHeader>Contact Me!</PageHeader>
        <ContactLinkContainer />
        <ContactForm />
      </PageContainer>
    )
}