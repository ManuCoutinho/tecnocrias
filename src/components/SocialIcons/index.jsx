import { DiscordLogo, GithubLogo, Envelope } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export const SocialIcons = () => {
  return (
    <div className={styles.box_icon} aria-label="Box de contatos">
      <a
        href="https://github.com/tecnocrias"
        role="Acesso ao Github do Tecnocrias"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <GithubLogo />
      </a>
      <a
        href="https://discord.gg/adxvNfMM88"
        role="Acesso ao Discord do Tecnocrias"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <DiscordLogo />
      </a>
      <a
        href="mailto:tecnolets@gmail.com"
        role="Acesso ao email do Tecnocrias"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <Envelope />
      </a>
    </div>
  )
}
