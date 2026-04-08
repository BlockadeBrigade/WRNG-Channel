import React, { useEffect } from "react"
import { fetchSettingsFromApi } from "../features/siteSettings/siteSettingSlice"
import { useSelector } from "react-redux"
import { RootState } from "../types"
import { useAppDispatch } from "../features/hooks"

const AboutPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const siteSettings = useSelector(
    (state: RootState) => state?.siteSettings.siteSettings,
  )
  console.log(siteSettings)

  useEffect(() => {
    dispatch(fetchSettingsFromApi())
  }, [dispatch])

  return (
    <div className="min-h-screen flex items-center bg-black pt-10 ">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className=" overflow-hidden  bg-gray-900">
            <img
              src={siteSettings[0].AboutProfile}
              alt="Akbar Jarlan"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="mb-4 animate-typing font-geist tracking-tight font-extrabold overflow-hidden whitespace-nowrap border-r-4 border-r-white  pr-5 text-5xl text-white">
              Jorian
            </h2>
            <h3 className="mb-6 font-victor text-xl pt-2 text-gray-400">
              Cinematographer / Director
            </h3>
            <p className="mb-6 text-md font-victor  leading-relaxed text-gray-400">
              {siteSettings[0].AboutBlurb}
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 border-b border-slate-500 pb-2 font-semibold font-geist text-white">
                  Skills
                </h4>
                <div className="flex flex-wrap font-victor gap-2">
                  {siteSettings[0]?.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="rounded-xs bg-violet-400 px-4 py-2 text-sm text-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
