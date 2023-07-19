import PropTypes from 'prop-types'
import { CaretDoubleDown } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export const ArrowNav = props => {
  return (
    <span className={styles.chevron} data-testid="arrow-down">
      <a href={props.nextSection} aria-label="navigate to bottom">
        <CaretDoubleDown />
      </a>
    </span>
  )
}

ArrowNav.propTypes = {
  nextSection: PropTypes.string.isRequired
}
