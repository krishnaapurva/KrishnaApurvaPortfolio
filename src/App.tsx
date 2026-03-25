import { BackgroundFx } from './components/BackgroundFx'
import { NavBar } from './components/NavBar'
import { ScrollProgress } from './components/ScrollProgress'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HowIThinkSection } from './sections/HowIThinkSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'
import { EducationSection } from './sections/EducationSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFx />
      <ScrollProgress />
      <NavBar />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <HowIThinkSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  )
}

export default App
