"use client"

import { Button } from "../ui/button"
import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const locales = [
  { value: "en", labelKey: "english" },
  { value: "zh", labelKey: "chinese" },
] as const

export function Navbar() {
  const t = useTranslations("Navbar")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function switchLocale(nextLocale: "en" | "zh") {
    router.replace(pathname, { locale: nextLocale })
    setOpen(false)
  }

  return (
    <nav className="sticky top-0 right-0 left-0 z-50 flex h-20 w-full items-center border-b border-[#3F3F3F] bg-[#000000]/80 backdrop-blur-lg md:h-23">
      <section className="mx-auto flex w-full max-w-404.75 items-center justify-between px-4">
        <img
          src="/logo-light.svg"
          alt="Claw World Box"
          className="h-[24px] w-[160px] md:h-[33px] md:w-[221px]"
        />

        <div className="relative" ref={dropdownRef}>
          <Button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="h-[39px] min-w-[136px] border-[#3F3F3F] bg-transparent px-4 text-sm text-white/70 hover:bg-white/5 hover:text-white md:text-[16px]"
            variant="outline"
          >
            <span>
              {/* {t("language")} · {locale.toUpperCase()} */}
              {t("language")}
            </span>
            <ChevronDown
              className={`size-4 transition ${open ? "rotate-180" : ""}`}
            />
          </Button>

          {open ? (
            <div className="absolute right-0 z-50 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-[#3F3F3F] bg-black/95 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur">
              {locales.map((item) => {
                const isActive = locale === item.value

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => switchLocale(item.value)}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition ${
                      isActive
                        ? "bg-[#05C740]/12 text-[#05C740]"
                        : "text-white/75 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{t(item.labelKey)}</span>
                    <span className="text-xs uppercase">{item.value}</span>
                  </button>
                )
              })}
            </div>
          ) : null}
        </div>
      </section>
    </nav>
  )
}
