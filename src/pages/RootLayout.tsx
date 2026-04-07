import { Outlet } from "react-router"
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import { useRef } from "react"
import { SectionRefs } from "../types"

const RootLayout: React.FC = () => {
  const ref: SectionRefs = {
    musicVideo: useRef<HTMLElement>(null),
    narrative: useRef<HTMLElement>(null),
    commercial: useRef<HTMLElement>(null),
  }

  return (
    <div className="min-h-screen bg-black ">
      <Header targetRef={ref} />
      <main>
        <Outlet context={ref} />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default RootLayout
