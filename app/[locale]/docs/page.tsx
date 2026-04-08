import { Footer } from "@/components/common/footer"
import { GuideMarkdown } from "@/components/docs/guide-markdown"
import { Link } from "@/i18n/navigation"
import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { readFile } from "node:fs/promises"
import path from "node:path"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Docs" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function DocsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations("Docs")
  const file = locale === "zh" ? "zh.md" : "en.md"
  const fullPath = path.join(process.cwd(), "content", "guide", file)
  const markdown = await readFile(fullPath, "utf8")

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <div className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-[linear-gradient(to_right,#59bb48_1px,transparent_1px),linear-gradient(to_bottom,#59bb48_1px,transparent_1px)] bg-[size:10px_10px] opacity-10" />
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-[320px] w-full bg-gradient-to-b from-black to-transparent" />

        <div className="relative z-20 mx-auto max-w-[900px] px-4 pt-8 pb-4 md:pt-14">
          <nav className="mb-8 text-sm text-white/50">
            <Link
              href="/"
              className="text-[#05C740] hover:text-[#3ae86f] hover:underline"
            >
              {t("backHome")}
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white/70">{t("breadcrumbCurrent")}</span>
          </nav>
          <p className="mb-2 text-[12px] font-medium tracking-[0.2em] text-[#05C740]/70 uppercase">
            {t("kicker")}
          </p>
          <GuideMarkdown markdown={markdown} />
        </div>
        <Footer />
      </div>
    </div>
  )
}
