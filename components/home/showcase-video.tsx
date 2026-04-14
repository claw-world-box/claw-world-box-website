const SHOWCASE_VIDEO_SRC =
  "https://doodjgs0wea2zx0o.public.blob.vercel-storage.com/1f823f7ee1f51d95704af439100ba2d0.mp4"

export function ShowcaseVideo() {
  return (
    <section className="relative mx-auto mt-10 max-w-[1673px] px-4 md:mt-[72px]">
      <div className="overflow-hidden rounded-[20px] border border-[#333333] bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <video
          className="aspect-video w-full object-contain"
          controls
          playsInline
          preload="metadata"
          src={SHOWCASE_VIDEO_SRC}
        />
      </div>
    </section>
  )
}
