import { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from './animation.json'

import styles from './styles.module.scss'

// ! main html

export const Home = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  })

  // const animationData = import('./animation.json')
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
    </section>
  )
}
