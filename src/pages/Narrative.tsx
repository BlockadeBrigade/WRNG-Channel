import { forwardRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { RootState, Video } from "../types"
import MasonryGrid from "../components/layout/MasonryGrid"
import { fetchVideoFromApi } from "../features/video/videoSlice"

const NarrativePage = forwardRef<HTMLDivElement>((props, ref) => {
  const videos = useSelector((state: RootState) => state.videos.videos)
  const dispatch = useDispatch()
  let filteredVideos: Video[] = []

  useEffect(() => {
    dispatch(fetchVideoFromApi())
  }, [dispatch])

  videos?.map((videos: Video) =>
    videos?.Category === "Narrative" ? filteredVideos.push(videos) : undefined,
  )

  return (
    <div ref={ref} className="min-h-screen bg-black pt-2">
      <div className=" mx-auto px-4">
        <MasonryGrid videos={filteredVideos} />
      </div>
    </div>
  )
})

export default NarrativePage
