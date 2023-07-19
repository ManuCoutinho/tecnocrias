import { SectionTitle } from '@/components/SectionTitle'
import { Cards } from '@/components/GridCards'
import { SocialIcons } from '@/components/SocialIcons'
import ABOUT from '@/constants/cardsAbout'
import styles from './styles.module.scss'

const About = () => {
  return (
    <section className={styles.about__container} id="about">
      <SectionTitle title="Sobre" size="md" />
      <Cards cardList={ABOUT} />
      <SocialIcons />
    </section>
  )
}

export default About
