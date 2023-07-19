import { Envelope } from '@phosphor-icons/react'
import { NavFooter } from '@/components/NavFooter'
import NAVIGATION from '@/constants/navigation'
import SOCIAL_LINKS from '@/constants/socialLinks'
import styles from './styles.module.scss'

const Contact = () => {
  const navLinks = NAVIGATION.slice(1, 4)

  return (
    <section className={styles.ct__container} id="contact">
      <footer className={styles.ct__footer}>
        <div className={styles.ct__wrapper}>
          <NavFooter title="Crias_" list={navLinks} />
          <NavFooter title="Social" list={SOCIAL_LINKS} />
          <div className={styles.ct__mail}>
            <p>
              A Tecnocrias trabalha para trazer diversidade para a tecnologia e
              inovação. Se quiser colaborar com alguma dessas frentes de ação,
              entre em contato conosco.
            </p>
            <button>
              <Envelope fontSize={24} /> Nos escreva!
            </button>
          </div>
        </div>
        <div className={styles.ct__copyright}>
          <img src="/assets/creative-commons.svg" alt="logo Creative Commons" />
          <p>Material licenciado sob a licença Creative Commons CC-BY.</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
