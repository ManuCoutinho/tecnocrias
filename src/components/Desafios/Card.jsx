import React from 'react'
import CardsItems from './CardsItems'
import styles from './styles.module.scss'

export const Card = () => {
  function getCardsItem() {
    return CardsItems.map(cards => {
      return (
        <a href={cards.link}>
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
