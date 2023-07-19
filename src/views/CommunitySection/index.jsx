import { SectionTitle } from '@/components/SectionTitle'

import styles from './styles.module.scss'

const Community = () => {
  return (
    <section id="community" className={styles.com__container}>
      <SectionTitle
        title="Comunidade"
        subtitle="Tecnocrias significa fazer parte de uma comunidade de aprendizado acolhedora e solidária."
      />
      <div className={styles.com__wrapper}>
        <div className={styles.com__banner}>
          <picture>
            <source
              srcSet="/assets/girl_banner.png"
              media="(orientation: portrait)"
              type="image/png"
            />
            <img
              src="/assets/girl_banner.webp"
              alt="imagem afrofuturistica de uma mulher"
              type="image/webp"
            />
          </picture>
        </div>
        <div className={styles.com__description}>
          <p>
            Nosso grupo de estudo é uma comunidade dinâmica de indivíduos com
            interesses semelhantes que compartilham um objetivo comum: explorar
            e dominar as complexidades sobre o universo da tecnologia, sobretudo
            desenvolvimento de software. <br /> Seja você um pessoa iniciante ou
            um(a) desenvolvedor(a) experiente, esta é a comunidade perfeita para
            aprofundar-se no fascinante mundo da tecnologia. <br /> Juntar-se ao
            nosso grupo de estudo significa ter acesso a uma comunidade de
            aprendizado acolhedora e solidária. Fomentamos um ambiente onde a
            troca de conhecimentos, o mentorado e a colaboração florescem. Você
            terá a oportunidade de se conectar com profissionais da indústria,
            participar de workshops e até mesmo assistir a palestras de
            convidados especialistas renomados.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Community
