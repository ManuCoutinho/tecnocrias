import { Cards } from '@/components/GridCards'
import styles from './styles.module.scss'


const Challengers = () => {
  return (
    <div className={styles.container} id="challengers">
      <h2>Desafios</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus numquam
        commodi omnis deleniti! Reprehenderit fuga quos cupiditate et.
      </p>
      <div className={styles.cardsContainer}>
        <Cards />
      </div>
    </div>
  )
}

export default Challengers
