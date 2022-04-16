import { Logo } from './Logo'
import { NavItems } from './NavItems'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <nav className={styles.nav}>
        <NavItems />
      </nav>
    </header>
  )
}
