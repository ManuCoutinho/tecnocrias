import { useState } from 'react'
import NAV_DATA from '@/constants/navigation'
import styles from './styles.module.scss'

export const Navbar = () => {
  const [location, setLocation] = useState(null)

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__menu} role="menu" aria-controls="menuitem">
        {NAV_DATA.map(({ name, path }) => {
          return (
            <a
              className={styles.nav__item}
              key={name}
              href={path}
              data-active={location === path}
              onClick={() => setLocation(() => path)}
            >
              <li role="menuitem" tabIndex={1}>
                {name}
              </li>
            </a>
          )
        })}
      </ul>
    </nav>
  )
}
