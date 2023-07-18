import Header  from '@/views/Header'
import { Desafios } from '@/components/Desafios'
import { About } from '@/components/About'
import { HomeSection } from '@/views/HomeSection'

function Home() {
  return (
    <main>
      <Header />
      <HomeSection />
      <About />
      <Desafios />
    </main>
  )
}

export default Home
