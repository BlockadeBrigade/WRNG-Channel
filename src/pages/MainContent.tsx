import LandingPage from "./LandingPage"
import HomePage from "./HomePage"
import PortfolioPage from "./Portfolio"
import NarrativePage from "./Narrative"
import { useOutletContext } from "react-router"
import { SectionRefs } from "../types"

const MainContent: React.FC = () => {
  const { musicVideo, narrative, commercial } = useOutletContext<SectionRefs>()
  return (
    <>
      <div className="min-h-screen bg-black">
        <div>
          <section>
            <LandingPage />
          </section>
          <section ref={musicVideo}>
            <HomePage />
          </section>
          <section ref={commercial}>
            <PortfolioPage />
          </section>
          <section ref={narrative}>
            <NarrativePage />
          </section>
        </div>
      </div>
    </>
  )
}

export default MainContent
