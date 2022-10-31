import { BsChevronDoubleDown } from 'react-icons/bs'

import styles from './styles.module.scss'

export const ArrowDown = props => {
  return (
    <span className={styles.chevron}>
      <a href={props.nextSection} role="icon" name="arrow-navigation">
        <BsChevronDoubleDown />
      </a>
    </span>
  )
}
