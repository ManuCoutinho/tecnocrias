import Header  from '@/views/Header'
import Challengers from '@/views/ChallengersSection'
import AboutSection from '@/views/AboutSection'
import { HomeSection } from '@/views/HomeSection'

function Home() {
  return (
    <main>
      <Header />
      <HomeSection />
      <AboutSection />
      <Challengers/>
    </main>
  )
}

export default Home
