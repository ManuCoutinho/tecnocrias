import styles from './styles.module.scss'

export const NavItems = () => {
  const items = [
    { name: 'Home', link: '#home' },
    { name: 'Sobre', link: '#sobre' },
    { name: 'Desafios', link: '#desafios' },
    { name: 'Tecnogueto', link: '#tecnogueto' },
    { name: 'Contato', link: '#contato' }
  ]

  return (
    <ul className={styles.nav_menu}>
      {items.map(item => {
        return (
          <a className={styles.nav_item} key={item.name} href={item.link}>
            <li>{item.name}</li>
          </a>
        )
      })}
    </ul>
  )
}
