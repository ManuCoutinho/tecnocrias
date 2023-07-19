import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export const Cards = ({cardList}) => {
  return (
    <div className={styles.grid}>
      {cardList && cardList?.map(({ title, description, link, href }) => (
        <div className={styles.grid__card} key={uuidv4()}>
          <h4 className={styles.grid__title}>{title}</h4>
          <p className={styles.grid__description}>
            {description}
            {link && <a href={href} autoFocus rel='noopener noreferrer'>{link}</a>}
          </p>
        </div>
      ))}
    </div>
  )
}

Cards.propType = {
  cardList: PropTypes.array.isRequired
}
