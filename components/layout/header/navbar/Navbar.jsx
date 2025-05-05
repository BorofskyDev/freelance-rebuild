import ResumeCvButton from '@/components/buttons/resume-cv-button/ResumeCvButton'
import NavMenu from './nav-menu/NavMenu'
import styles from './Navbar.module.scss'
import ThemeToggle from '@/components/buttons/theme-toggle-button/ThemeToggleButton'

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
        <ThemeToggle />
      </div>
    </nav>
  )
}
export default Navbar
