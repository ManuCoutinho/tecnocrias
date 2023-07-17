import { CaretDoubleDown } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export const ArrowDown = props => {
  return (
    <span className={styles.chevron}>
      <a href={props.nextSection} role="icon" name="arrow-navigation">
        <CaretDoubleDown size={32} />
      </a>
    </span>
  )
}
