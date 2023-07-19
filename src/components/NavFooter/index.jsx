import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export const NavFooter = ({ title, list }) => {
  return (
    <div className={styles.nf_wrapper}>
      <nav className={styles.nf__list}>
        <span className={styles.nf__title}>
          <p>{title}</p>
        </span>
        <ul>
          {list?.map(({ path, name, Icon }) => (
            <li key={uuidv4()}>
              {Icon && <Icon />}
              <a
                href={path}
                rel="noopener noreferrer"
                aria-label={`link to ${name}`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

NavFooter.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      item: PropTypes.string,
      Icon: PropTypes.element
    })
  ).isRequired
}

NavFooter.displayName = 'Navigation'
