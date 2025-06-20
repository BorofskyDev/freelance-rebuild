import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import styles from './page.module.scss'
import ExternalButtonLink from '@/components/links/external-button-link/ExternalButtonLink'

export default function AdminPage() {
  return (
    <div className={`bg-blue ${styles.adminPage}`}>
      

      <div className={styles.linkContainer}>
        <InternalLinkBox href='/admin/blog'>Blog</InternalLinkBox>
      <InternalLinkBox href='/admin/messages'>Messages</InternalLinkBox>
      <ExternalButtonLink href='https://job-search-app-henna.vercel.app/user' className='bg-yellow'>Job Search</ExternalButtonLink>
      </div>
    </div>
  )
}
