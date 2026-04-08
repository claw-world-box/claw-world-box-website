"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("Home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (!element) return

    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="relative flex flex-1 items-center">
      <div className="w-full">
        <div className="relative order-2 flex min-h-[400px] items-end overflow-hidden rounded-[1.5rem] bg-black/30 shadow-[0_30px_120px_rgba(0,0,0,0.45)] md:min-h-[603px] md:rounded-[2rem] lg:order-1 lg:min-h-[900px]">
          <Image
            src="/hero-bg.png"
            alt="Claw World Box hero artwork"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.28)_0%,rgba(2,6,23,0.14)_30%,rgba(2,6,23,0.68)_78%,rgba(2,6,23,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.52)_100%)]" />

          <div className="absolute inset-0 z-10">
            <div className="relative mx-auto h-full max-w-[1619px]">
              <div className="absolute top-30 left-0 hidden p-4 pl-5 text-[14px] text-white uppercase md:block md:w-[464px] lg:top-[241px] lg:pl-8 lg:text-[20px]">
                <div className="flex gap-14">
                  <div>
                    <p className="text-white/95">{t("leftBlock1")}</p>
                    <p>{t("leftBlock2")}</p>
                    <p>{t("leftBlock3")}</p>
                  </div>
                  <p>2026</p>
                </div>
              </div>

              <div className="absolute top-30 right-0 hidden p-4 pl-5 text-[14px] text-white uppercase md:block md:w-[464px] lg:top-[241px] lg:pl-8 lg:text-[20px]">
                <p className="text-white/95">{t("rightBlock")}</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-1 z-10 w-full px-4 pb-5 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
            <div className="mx-auto max-w-2xl text-center">
              <Image
                src="/logo-rgb.svg"
                alt="Claw World Box logo"
                width={600}
                height={300}
                className="mx-auto w-full max-w-[320px] sm:max-w-[420px] md:max-w-[600px]"
              />

              <div className="mx-auto w-[310px] text-center md:w-auto">
                <p className="mt-5 text-[12px] leading-5 text-[#05C740] sm:mt-6.5 sm:text-sm sm:leading-7 lg:text-base">
                  {t("tagline1")}
                </p>

                <p className="mt-1 text-[12px] leading-5 text-[#05C740] sm:text-sm sm:leading-4 lg:text-base">
                  {t("tagline2")}
                </p>
              </div>

              <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-10.75 sm:flex-row sm:justify-center">
                <Button
                  type="button"
                  onClick={() => scrollToSection("connect-agent-section")}
                  className="h-10 w-full cursor-pointer rounded-[5px] bg-[#05C740] hover:bg-[#05c73feb] sm:w-auto md:h-[36px] md:w-[138px]"
                >
                  <Image
                    src="/link-agent.svg"
                    alt={t("linkAgent")}
                    width={22}
                    height={22}
                  />
                  <p className="text-[12px]">{t("linkAgent")}</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
