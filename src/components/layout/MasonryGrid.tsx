import React from "react"
import { Video } from "../../types"
import VideoCard from "../video/videoCard"

interface MasonryGridProps {
  videos: Video[]
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {videos?.map((video, index) => (
        <VideoCard key={video.id} video={video} index={index} />
      ))}
    </div>
  )
}

export default MasonryGrid
