import { DiscordLogo, GithubLogo, Envelope } from '@phosphor-icons/react'
import { AboutItems } from './AboutItems'
import styles from './styles.module.scss'

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2>Sobre</h2>

      <AboutItems />

      <div className={styles.box_icon} aria-label="Box de contatos">
        <a
          href="https://github.com/tecnocrias"
          role="Acesso ao Github do Tecnocrias"
          target="_blank"
          rel="nofollow noreferrer"
        >
        <GithubLogo size={32} />
        </a>
        <a
          href="https://discord.gg/adxvNfMM88"
          role="Acesso ao Discord do Tecnocrias"
          target="_blank"
          rel="nofollow noreferrer"
        >
         <DiscordLogo size={32} />
        </a>
        <a
          href="mailto:tecnolets@gmail.com"
          role="Acesso ao email do Tecnocrias"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Envelope size={32} />
        </a>
      </div>
    </section>
  )
}
