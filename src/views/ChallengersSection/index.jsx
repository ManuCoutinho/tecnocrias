import { SectionTitle } from '@/components/SectionTitle'
import { Cards } from '@/components/GridCards'
import CHALLENGERS from '@/constants/challengers'
import styles from './styles.module.scss'

const Challengers = () => {
  return (
    <section className={styles.cl__container} id="challengers">
      <SectionTitle title="Desafios" />
      <Cards cardList={CHALLENGERS} />
    </section>
  )
}

export default Challengers
