import About from '@/views/AboutSection'
import Challengers from '@/views/ChallengersSection'
import Community from '@/views/CommunitySection'
import Contact from '@/views/ContactSection'
import Header from '@/views/Header'
import HomeSection from '@/views/HomeSection'

function Home() {
  return (
    <main>
      <Header />
      <HomeSection />
      <About />
      <Community />
      <Challengers />
      <Contact />
    </main>
  )
}

export default Home
