import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import styles from './page.module.scss'

export default function AdminPage() {
  return (
    <div className={`bg-blue ${styles.adminPage}`}>
      

      <div className={styles.linkContainer}>
        <InternalLinkBox href='/admin/blog'>Blog</InternalLinkBox>
      <InternalLinkBox href='/admin/messages'>Messages</InternalLinkBox>
      </div>
    </div>
  )
}
