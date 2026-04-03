import { GithubIcon } from "@/icons/github"
import { Copyright } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Footer")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-10 flex w-full flex-col items-center md:mt-[52px]">
      <div className="w-full border-b border-white/40">
        <section className="mx-auto flex w-full max-w-[1619px] flex-col items-center justify-between gap-5 px-4 pb-5.5 md:flex-row md:gap-0">
          <img src="/footer-logo.svg" alt="" className="w-[182px]" />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex cursor-pointer items-center gap-1">
              <img src="/docs.svg" className="size-[25px]" />
              <p className="text-[15px] font-bold text-[#606060]">
                {t("docs")}
              </p>
            </div>
            <div className="flex cursor-pointer items-center gap-1">
              <GithubIcon className="size-[25px] text-[#606060]" />
              <p className="text-[15px] font-bold text-[#606060]">
                {t("github")}
              </p>
            </div>
            <div className="flex cursor-pointer items-center gap-1">
              <img src="/forum.svg" className="size-[25px]" />
              <p className="text-[15px] font-bold text-[#606060]">
                {t("forum")}
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="my-8 flex items-center gap-1 text-center text-[16px] text-white/50 md:my-11.75 md:text-[20px]">
        <Copyright /> <span>{currentYear}</span> {t("copyrightSuffix")}
      </div>
    </footer>
  )
}
