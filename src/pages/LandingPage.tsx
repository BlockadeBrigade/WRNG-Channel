import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPage } from "../features/ui/uiSlice"
import { fetchSettingsFromApi } from "../features/siteSettings/siteSettingSlice"
import { RootState } from "../store"

const LandingPage: React.FC = () => {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const siteSettings = useSelector(
    (state: RootState) => state?.siteSettings.siteSettings,
  )

  console.log(siteSettings)
  useEffect(() => {
    dispatch(fetchSettingsFromApi())
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  return (
    <div className="min-h-screen font-akira font-extralight bg-black flex items-center justify-center">
      <div
        className={`text-center transition-all duration-1500 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      >
        <video
          src={siteSettings[0]?.landingPageVideo}
          className="w-[100svw] "
          autoPlay
          loop
        >
          <source type="video/mp4" />
        </video>
        <p className="text-lg pt-2 text-gray-400">SCROLL DOWN</p>
        <div className=" overflow-hidden">
          <button
            onClick={() => dispatch(setPage("home"))}
            className=" text-2xl rotate-180   text-neutral-200 "
          >
            <p className="  text-neutral-200 py-0 -my-3 text-2xl animate-scrollSliding  [animation-delay:1s] ">
              ^
            </p>
            <p className="  text-neutral-200  py-0 -my-3 text-2xl animate-scrollSliding   [animation-delay:2s]">
              ^
            </p>
            <p className=" text-neutral-200 py-0 -my-3 text-2xl animate-scrollSliding   [animation-delay:3s]">
              ^
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
