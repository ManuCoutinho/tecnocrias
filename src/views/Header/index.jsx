import { Logo } from '@/components/Logo'
import { Navbar} from '@/components/Navbar'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.nav__wrapper}>
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}

export default Header
