import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router"
import { useEffect, useState } from "react"
import { RootState, SectionRefs } from "../../types/index"
import { toggleMenu } from "../../features/ui/uiSlice"
import { useNavigate } from "react-router"
import { useAppDispatch } from "../../features/hooks"

interface HeaderProps {
  targetRef: SectionRefs
}

const Header: React.FC<HeaderProps> = ({ targetRef }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const menuOpen = useSelector((state: RootState) => state.ui.menuOpen)
  const siteSettings = useSelector(
    (state: RootState) => state.siteSettings?.siteSettings,
  )

  const [scrollDirection, setScrollDirection] = useState("scrollDown")

  const handleScrollIntoView = (key: keyof SectionRefs) => {
    const section = targetRef[key] as React.RefObject<HTMLElement> | null
    if (section?.current) {
      section?.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  useEffect(() => {
    let lastScroll = window.scrollY
    const handleHideNav = () => {
      const currentScroll = window.scrollY

      if (currentScroll < lastScroll) {
        setScrollDirection("scrollUp")
      } else {
        setScrollDirection("scrollDown")
      }

      lastScroll = currentScroll
    }
    window.addEventListener("scroll", handleHideNav)

    return () => window.removeEventListener("scroll", handleHideNav)
  }, [])

  return (
    <header
      className={`fixed font-roboto top-0 right-0 left-0 z-50 bg-black/80 backdrop-blur-lg transition-transform duration-500 ${scrollDirection == "scrollDown" ? "-translate-y-full" : "translate-y-0"} `}
    >
      <nav className=" mx-auto flex items-center justify-end px-6  py-2">
        <button
          onClick={() => navigate("/")}
          className="mr-auto px-2 font-bold text-white"
        >
          <img className="h-16 w-20" src={siteSettings[0]?.logo} />
        </button>
        {menuOpen && (
          <div className="top-full mr-6 flex gap-6">
            <button
              onClick={() => handleScrollIntoView("musicVideo")}
              className="relative text-lg animate-underline-hover  text-white transition-colors hover:text-violet-400 "
            >
              <Link to={"/"}>Music Video</Link>
            </button>
            <button
              onClick={() => handleScrollIntoView("commercial")}
              className="relative text-lg text-white animate-underline-hover transition-colors hover:text-violet-400 "
            >
              <Link to={"/"}>Commercial</Link>
            </button>
            <button
              onClick={() => handleScrollIntoView("narrative")}
              className=" relative text-lg text-white animate-underline-hover transition-colors hover:text-violet-400 "
            >
              <Link to={"/"}>Narrative</Link>
            </button>
            <button
              onClick={() => navigate("/about")}
              className="relative text-lg text-white animate-underline-hover transition-colors hover:text-violet-400 "
            >
              About
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="relative text-lg text-white animate-underline-hover transition-colors hover:text-violet-400 "
            >
              Shop
            </button>
            <button
              onClick={() => navigate("contact")}
              className="relative text-lg text-white animate-underline-hover transition-colors hover:text-violet-400 "
            >
              Contact
            </button>
          </div>
        )}

        <button
          onClick={() => dispatch(toggleMenu())}
          className="mr-6 flex h-6 w-8 flex-col gap-1.5 pt-1 text-white"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 bg-white  transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          ></span>
          <span
            className={`h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-0.5 bg-white transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          ></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
