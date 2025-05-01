import ResumeCvButton from '@/components/buttons/resume-cv-button/ResumeCvButton'
import NavMenu from './nav-menu/NavMenu'
import styles from './Navbar.module.scss'

function Navbar({ isSticky, navbarRef }) {
  return (
    <nav
      className={`${styles.navbar} ${isSticky ? styles.stickyNav : ''}`}
      ref={navbarRef}
    >
      <div className={styles.navbar__container}>
        <NavMenu />
      </div>
      <div className={styles.navbar__container}>
        <ResumeCvButton className='bg-blue' />
      </div>
    </nav>
  )
}
export default Navbar
