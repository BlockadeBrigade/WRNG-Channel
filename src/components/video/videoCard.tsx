import React, { Fragment, useEffect, useRef, useState } from "react"
import { Video } from "../../types"
import {
  Transition,
  Dialog,
  TransitionChild,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react"

interface VideoCardProps {
  video: Video
  index: number
}

const VideoCard: React.FC<VideoCardProps> = ({ video, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  let previewTimeout: number | string | timeout = null

  const startPreview = () => {
    videoRef.current!.muted = true
    videoRef.current!.currentTime = 1
    videoRef.current!.playbackRate = 0.5
    videoRef.current!.play()
  }
  const stopPreview = () => {
    videoRef.current!.currentTime = 0
    videoRef.current!.playbackRate = 1
    videoRef.current!.pause()
  }

  videoRef.current?.addEventListener("mouseenter", () => {
    startPreview()
    previewTimeout = setTimeout(stopPreview, 2000)
  })

  videoRef.current?.addEventListener("mouseleave", () => {
    clearTimeout(previewTimeout)
    previewTimeout = null
    stopPreview()
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.1 },
    )
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    return () => observer.disconnect()
  }, [index])

  return (
    <>
      <div
        ref={cardRef}
        className={`group font-akira font-extrabold cursor-pointer overflow-hidden  bg-gray-900 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
        onClick={() => {
          setIsModalOpen(true)
        }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-fill transition-transform duration-500 group-hover:scale-110"
          width="2rem"
          height="2rem"
          aria-label={video?.VideoName}
          muted
          preload="metadata"
          poster={video?.VideoUpload}
        >
          <source src={video?.VideoUpload} type="video/mp4" />
        </video>
        <div className="absolute   p-0 my-auto inset-0 flex items-center justify-center pointer-events-none bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-8xl text-white font-extrabold tracking-tighter">
            {video?.VideoName?.toUpperCase()}
          </p>
        </div>
      </div>
      <Transition show={isModalOpen} as={Fragment}>
        <Dialog className="z-[99999]" onClose={() => setIsModalOpen(false)}>
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/75 transition-opacity duration-300 data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-5xl rounded-3xl bg-black aspect-video overflow-hidden">
                  <video
                    className="h-full w-full object-fill"
                    aria-label={video?.VideoName}
                    controls
                    autoPlay
                    preload="metadata"
                    poster={video?.VideoUpload}
                  >
                    <source src={video?.VideoUpload} type="video/mp4" />
                  </video>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default VideoCard
