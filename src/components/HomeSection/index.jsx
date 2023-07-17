import { ArrowDown } from '../ArrowDown'
import HeroAnimation from '../Hero'
import styles from './styles.module.scss'

export const Home = () => {


  return (
    <section className={styles.main__container}>
      <HeroAnimation/>
      <ArrowDown nextSection="#about" />
    </section>
  )
}
