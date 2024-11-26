
import NavMenu from './nav-menu/NavMenu'
import styles from './Navbar.module.scss'

function Navbar({ isSticky, navbarRef }) {
  return (
    <nav
      className={`${styles.navbar} ${isSticky ? styles.stickyNav : ''}`}
      ref={navbarRef}
    >
      <NavMenu />
    </nav>
  )
}
export default Navbar
