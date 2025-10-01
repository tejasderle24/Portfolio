import {
  Footer,
  Navbar
} from './components'
import { AboutSection, HeroSection, SkillsSection } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <Footer />
    </>
  )
}

export default App
