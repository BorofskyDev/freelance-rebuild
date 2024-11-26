import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import styles from './page.module.scss'
import PageContainer from '@/components/containers/page-container/PageContainer'


export default function ContactPage() {
    return (
        <PageContainer className={`bg-violet ${styles.contactPage}`}>
            <PageHeader>Contact Me!</PageHeader>
        </PageContainer>
    )
}