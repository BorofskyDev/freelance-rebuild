// components/nav-menu/NavMenu.jsx

import MenuLink from '@/components/links/menu-link/MenuLink'
import styles from './NavMenu.module.scss'

export default function NavMenu({ handleMenuToggle }) {
  return (
    <ul className={styles.navMenu}>
      <MenuLink
        href='/'
        data-text='Home'
        content='Home'
        handleMenuToggle={handleMenuToggle}
      />
      <MenuLink
        href='/about'
        data-text='About'
        content='About'
        handleMenuToggle={handleMenuToggle}
      />
      <MenuLink
        href='/contact'
        data-text='Contact'
        content='Contact'
        handleMenuToggle={handleMenuToggle}
      />
    </ul>
  )
}
