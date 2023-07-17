import { useEffect, useRef, useState } from 'react'
import RINGS from 'vanta/dist/vanta.rings.min.js'
import styles from './styles.module.scss'

function HeroAnimation(){
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if(!vantaEffect){
      setVantaEffect(() =>
        RINGS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x16161a,
          color: 0x2cb67d
        })
      )
    }

    return () => {
      if(vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section ref={vantaRef} className={styles.hero__container}>
      <div>
        <p>
          Você é apaixonade por tecnologia e está ansiose para expandir seus
          conhecimentos no mundo do código aberto? Não procure mais!
        </p>
        <p>
          O Tecnocrias está te convocando para embarcar em uma jornada incrível.
          🚀
        </p>
      </div>
    </section>
  )
}

export default HeroAnimation
