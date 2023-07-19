import { v4 as uuidv4 } from 'uuid'
import ICONS from '@/constants/icons'
import styles from './styles.module.scss'

export const SocialIcons = () => {
  return (
    <div
      className={styles.social__wrapper}
      aria-label="Box de contatos"
      role="group"
    >
      {ICONS?.map(({ path, label, Icon }) => (
        <a
          href={path}
          aria-label={label}
          target="_blank"
          rel="nofollow noreferrer"
          key={uuidv4()}
          className={styles.social__icon}
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}
