import { useState } from 'react'
import Lottie from 'react-lottie'
import { ArrowDown } from '../ArrowDown'
import animationData from './animation.json'

import styles from './styles.module.scss'

export const Home = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <section className={styles.container}>
      <Lottie
        options={defaultOptions}
        height={500}
        width={500}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
      <ArrowDown nextSection="#about" />
    </section>
  )
}
