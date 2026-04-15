import { Footer } from "@/components/common/footer"
import { About } from "@/components/home/about"
import { ConnectAgent } from "@/components/home/connect-agent"
import { Hero } from "@/components/home/hero"
import { Innovations } from "@/components/home/innovations"
import { setRequestLocale } from "next-intl/server"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="">
      <div className="">
        <Hero />
      </div>
      <div className="relative">
        <div className="absolute top-40 right-0 bottom-0 left-0 z-0 bg-[linear-gradient(to_right,#59bb48_1px,transparent_1px),linear-gradient(to_bottom,#59bb48_1px,transparent_1px)] bg-[size:10px_10px] opacity-10" />
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-[600px] w-full bg-gradient-to-b from-black to-transparent" />

        <div className="relative z-20 px-4">
          <About />
          <Innovations />
          <ConnectAgent />
        </div>
        <Footer />
      </div>
    </div>
  )
}
