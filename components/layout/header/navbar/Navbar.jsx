
import ResumeCvButton from '@/components/buttons/resume-cv-button/ResumeCvButton'
import NavMenu from './nav-menu/NavMenu'
import styles from './Navbar.module.scss'

function Navbar({ isSticky, navbarRef }) {
  return (
    <nav
      className={`${styles.navbar} ${isSticky ? styles.stickyNav : ''}`}
      ref={navbarRef}
    >
      <NavMenu />
      <ResumeCvButton className='bg-blue' />
    </nav>
  )
}
export default Navbar
