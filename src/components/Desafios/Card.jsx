import CardsItems from './CardsItems'
import { v4 as uuidv4 } from 'uuid'
import styles from './styles.module.scss'

export const Card = () => {
  function getCardsItem() {
    return CardsItems.map(cards => {
      return (
        <a href={cards.link} key={uuidv4()}>
          <div className={styles.card}>
            <h3>{cards.title}</h3>
            <p>{cards.text}</p>
          </div>
        </a>
      )
    })
  }
  return getCardsItem()
}
