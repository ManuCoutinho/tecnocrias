import { Suspense, lazy } from 'react'
import { ArrowNav } from '@/components/ArrowNav'
import Loading from '@/components/Loading'
import styles from './styles.module.scss'

const Hero = lazy(() => import('@/components/Hero'))

const HomeSection = () => {
  return (
    <section className={styles.main__container} id="home">
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <ArrowNav nextSection="#about" />
    </section>
  )
}

export default HomeSection
