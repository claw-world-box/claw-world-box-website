"use client"

import { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

function VideoCard() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)

  let hideTimeout: NodeJS.Timeout

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      startHideTimer()
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
      setShowControls(true)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const startHideTimer = () => {
    clearTimeout(hideTimeout)
    hideTimeout = setTimeout(() => {
      setShowControls(false)
    }, 2000)
  }

  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true)
      startHideTimer()
    }
  }

  useEffect(() => {
    return () => clearTimeout(hideTimeout)
  }, [])

  return (
    <div
      className="relative w-full max-w-[813px] overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src="/dummy-video.mp4"
        className="h-[200px] w-full object-cover md:h-[411px]"
      />

      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-black/30 backdrop-blur md:h-22.5 md:w-22.5">
            <Play className="h-4 w-5 fill-white text-white md:h-10 md:w-10" />
          </div>
        </button>
      )}

      {/* Controls */}
      <div
        className={`absolute right-0 bottom-0 left-0 z-10 flex items-center justify-between bg-black/60 px-4 py-2 backdrop-blur transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* PLAY / PAUSE */}
        <button onClick={isPlaying ? handlePause : handlePlay}>
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white" />
          ) : (
            <Play className="h-5 w-5 text-white" />
          )}
        </button>

        {/* Sount */}
        <button onClick={toggleMute}>
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
    </div>
  )
}

export function Media() {
  return (
    <section
      id="media-section"
      className="relative scroll-mt-24 overflow-hidden border-b border-[#007423] pt-6 pb-10 text-white md:mt-[150px] md:pt-20 md:pb-[160px]"
    >
      <div className="relative z-10 mx-auto max-w-[1700px]">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </section>
  )
}
