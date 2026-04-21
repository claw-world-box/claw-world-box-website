import { GithubIcon } from "@/icons/github"
import { ShowcaseVideo } from "@/components/home/showcase-video"
import { useTranslations } from "next-intl"

const SDK_NPM_INSTALL = "npm install @clawworld/agw-game-sdk"
const SDK_GITHUB_URL = "https://github.com/claw-world-box/nodejs-sdk"

type Step = {
  number: string
  key: "download" | "configure" | "world"
  highlighted?: boolean
}

const steps: Step[] = [
  { number: "1", key: "download", highlighted: true },
  { number: "2", key: "configure", highlighted: true },
  { number: "3", key: "world", highlighted: true },
] as const

const GATEWAY_DOWNLOADS = [
  {
    platformKey: "linuxPlatform" as const,
    blob: "https://doodjgs0wea2zx0o.public.blob.vercel-storage.com/agw-standalone-api-linux-x86_64-v0.1.0-rc2.tar.gz",
    github:
      "https://github.com/claw-world-box/claw-world-box-website/releases/download/v0.1.2/agw-standalone-api-linux-x86_64-v0.1.0-rc2.tar.gz",
  },
  {
    platformKey: "macosPlatform" as const,
    blob: "https://doodjgs0wea2zx0o.public.blob.vercel-storage.com/agw-standalone-api-macos-arm64-v0.1.0-rc2.tar.gz",
    github:
      "https://github.com/claw-world-box/claw-world-box-website/releases/download/v0.1.2/agw-standalone-api-macos-arm64-v0.1.0-rc2.tar.gz",
  },
  {
    platformKey: "windowsPlatform" as const,
    blob: "https://doodjgs0wea2zx0o.public.blob.vercel-storage.com/agw-standalone-api-windows-x86_64-v0.1.0-rc2.zip",
    github:
      "https://github.com/claw-world-box/claw-world-box-website/releases/download/v0.1.2/agw-standalone-api-windows-x86_64-v0.1.0-rc2.zip",
  },
] as const

export function ConnectAgent() {
  const t = useTranslations("ConnectAgent")

  return (
    <section
      id="connect-agent-section"
      className="relative mt-10 scroll-mt-24 overflow-hidden border-b border-[#007423]/30 py-10 text-white md:pt-[148px] md:pb-[133px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(5,199,64,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,199,64,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1673px] px-3 md:px-6 lg:px-8">
        <div className="grid gap-4 pb-7 md:grid-cols-[1fr_2fr] md:items-start md:justify-between">
          <h3 className="text-[18px] font-medium tracking-[0.06em] text-[#05C740]/80 uppercase lg:text-[24px]">
            {t("title")}
          </h3>

          <p className="max-w-[1040px] text-sm leading-6 text-white/80 md:text-right md:text-base md:leading-7 lg:text-lg lg:leading-8">
            {t("description")}
          </p>
        </div>

        <ShowcaseVideo className="mt-8 mb-10 md:mt-10 md:mb-14" />

        <div>
          <div className="relative mt-10 grid h-full gap-10 sm:mt-12 lg:mt-20 xl:grid-cols-3 xl:gap-6 xl:items-start">
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[60%] bg-gradient-to-b from-gray-500/40 to-transparent lg:block" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative border-t border-[#69696966]"
              >
                <div className="-mt-2 flex min-h-[50px] items-end justify-start pl-[50px] lg:-mt-14">
                  <p className="text-[15px] leading-6 text-white/80 sm:text-base md:text-lg md:leading-7 lg:text-xl">
                    {t(`steps.${step.key}.title`)}
                  </p>
                </div>
                <div className="absolute -top-4.5 left-0 flex size-[35px] items-center justify-center rounded-full border border-white/45 bg-black text-[20px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] lg:size-10 lg:text-2xl">
                  {step.number}
                </div>
                <div className="inline-block max-w-full pl-[50px]">
                  <div
                    className={`mt-4 max-w-full rounded-[4px] border px-2.5 py-2.5 text-[13px] leading-snug sm:max-w-[min(100%,380px)] sm:text-sm sm:leading-relaxed md:px-3 md:py-3 md:text-base md:leading-7 lg:max-w-[420px] lg:text-[17px] lg:leading-8 ${
                      step.highlighted
                        ? "border-[#4F4F4F] text-[#05C740] shadow-[inset_0_0_75.8px_-36px_#05C740]"
                        : "border-transparent bg-transparent text-[#05C740]"
                    }`}
                  >
                    {t(`steps.${step.key}.detail`)}
                    {step.key === "download" && (
                      <div className="mt-3 flex flex-col gap-4 border-t border-[#4F4F4F]/50 pt-3 text-[13px] sm:text-sm md:text-base">
                        {GATEWAY_DOWNLOADS.map(({ platformKey, blob, github }) => (
                          <div key={platformKey}>
                            <p className="mb-2 text-white/90">
                              {t(`steps.download.${platformKey}`)}
                            </p>
                            <div className="flex flex-col gap-2.5">
                              <a
                                href={blob}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-[#05C740] underline decoration-[#05C740]/50 underline-offset-2 transition-colors hover:text-[#3ae86f] hover:decoration-[#3ae86f]"
                              >
                                {t("steps.download.blobLink")}
                              </a>
                              <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-[#05C740] underline decoration-[#05C740]/50 underline-offset-2 transition-colors hover:text-[#3ae86f] hover:decoration-[#3ae86f]"
                              >
                                {t("steps.download.githubLink")}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-[#69696966] pt-12 sm:mt-16 sm:pt-14 lg:mt-20 lg:pt-16">
            <div className="overflow-hidden rounded-lg border border-[#4F4F4F] bg-black/35 shadow-[inset_0_0_80px_-40px_rgba(5,199,64,0.35)] md:rounded-xl">
              <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:p-8 lg:gap-10">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.2em] text-[#05C740]/75 uppercase sm:text-xs">
                    {t("sdk.kicker")}
                  </p>
                  <h4 className="mt-2 text-lg font-medium text-white sm:text-xl lg:text-2xl">
                    {t("sdk.title")}
                  </h4>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                    {t("sdk.description")}
                  </p>
                </div>

                <div className="flex min-w-0 flex-col gap-3 md:max-w-md md:items-end">
                  <pre
                    className="w-full overflow-x-auto rounded-md border border-[#3a3a3a] bg-[#0a0a0a]/90 px-3 py-2.5 font-mono text-[12px] leading-relaxed text-[#7ef0a8] shadow-inner sm:text-sm md:text-right lg:px-4 lg:py-3 lg:text-[15px]"
                    tabIndex={0}
                  >
                    <code>{SDK_NPM_INSTALL}</code>
                  </pre>
                  <a
                    href={SDK_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#05C740]/40 bg-[#05C740]/10 px-4 py-2.5 text-sm font-medium text-[#05C740] transition-colors hover:border-[#05C740]/70 hover:bg-[#05C740]/15 md:w-auto md:justify-end"
                  >
                    <GithubIcon className="size-4 shrink-0 opacity-90" />
                    {t("sdk.githubLabel")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
