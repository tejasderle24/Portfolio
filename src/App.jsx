import {
  Footer,
  Navbar
} from './components'
import {
  AboutSection,
  HeroSection,
  ProjectsSection,
  SkillsSection
} from './pages'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </>
  )
}

export default App
