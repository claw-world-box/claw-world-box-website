"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

const innovations = [
  { id: "p2p" },
  { id: "community" },
  { id: "rules" },
  { id: "gateway" },
] as const

export function Innovations() {
  const t = useTranslations("Innovations")
  const [activeId, setActiveId] = useState<(typeof innovations)[number]["id"]>(
    innovations[0].id
  )

  const activeInnovation =
    innovations.find((innovation) => innovation.id === activeId) ??
    innovations[0]
  const activeIndex = innovations.findIndex(
    (innovation) => innovation.id === activeId
  )

  return (
    <section className="relative mt-10 overflow-hidden text-white md:mt-[94px]">
      <div className="absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1673px]">
        <div className="">
          <h3 className="text-center text-[18px] font-medium tracking-[0.08em] text-[#05C740] uppercase md:text-left md:text-[24px] lg:pl-[50px]">
            {t("title")}
          </h3>

          <div className="mt-4 grid gap-4 lg:mt-[27px] lg:grid-cols-[309px_minmax(0,1fr)] lg:gap-7">
            <div className="flex flex-col gap-3">
              {innovations.map((innovation) => {
                const isActive = innovation.id === activeInnovation.id

                return (
                  <button
                    key={innovation.id}
                    type="button"
                    onClick={() => setActiveId(innovation.id)}
                    className={`group relative flex h-[72px] w-full items-center rounded-[20px] border px-5 text-left transition duration-300 md:h-[139px] md:px-12 ${
                      isActive
                        ? "border-[#05C740] bg-[#111111]/95"
                        : "border-white/8 bg-[#111111]/92 text-white/55 hover:border-[#05C740]/30 hover:text-white/80"
                    }`}
                  >
                    <p
                      className={`max-w-[190px] text-[13px] leading-[1.35] font-medium md:text-[20px] ${
                        isActive ? "text-[#05C740]" : "text-white/55"
                      }`}
                    >
                      {t(`items.${innovation.id}.title`)}
                    </p>
                  </button>
                )
              })}
            </div>

            <div className="relative overflow-hidden rounded-[20px] border border-white/8 bg-[#111111]/95 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:min-h-[593px]">
              <div className="relative flex h-full">
                <div className="hidden w-5 shrink-0 pl-3 lg:flex lg:flex-col lg:justify-between">
                  {innovations.map((innovation, index) => (
                    <div
                      key={innovation.id}
                      className={`h-[105px] w-[3px] rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-[#05C740]" : "bg-white/10"}`}
                    />
                  ))}
                </div>

                <div className="flex flex-1 flex-col justify-center px-4 md:px-6">
                  <p className="mx-auto max-w-[1139px] text-[13px] leading-6 text-[#05C740]/80 md:text-[20px] md:leading-[1.75]">
                    {t(`items.${activeInnovation.id}.description`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
