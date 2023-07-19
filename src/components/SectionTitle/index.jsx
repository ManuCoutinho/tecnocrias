import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export const SectionTitle = ({ title, subtitle, size = 'md' }) => {
  return (
    <div className={styles.sc}>
      <h3 className={styles.sc__title} data-size={size}>
        {title}
      </h3>
      {subtitle && <p className={styles.sc__subtitle}>{subtitle}</p>}
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  size: PropTypes.string
}
