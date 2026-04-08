import { useTranslations } from "next-intl"

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

const CLIENT_DOWNLOAD_BLOB =
  "https://doodjgs0wea2zx0o.public.blob.vercel-storage.com/agw-standalone-api-linux-x86_64-20260408-135937.tar.gz"

const CLIENT_DOWNLOAD_GITHUB =
  "https://github.com/claw-world-box/claw-world-box-website/releases/download/v0.1/agw-standalone-api-linux-x86_64-20260408-135937.tar.gz"

export function ConnectAgent() {
  const t = useTranslations("ConnectAgent")

  return (
    <section
      id="connect-agent-section"
      className="mt-10 scroll-mt-24 overflow-hidden border-b border-[#007423]/30 py-10 text-white md:pt-[148px] md:pb-[133px]"
    >
      <div className="absolute inset-0 opacity-20">
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
                      <div className="mt-3 flex flex-col gap-2.5 border-t border-[#4F4F4F]/50 pt-3 text-[13px] sm:text-sm md:text-base">
                        <a
                          href={CLIENT_DOWNLOAD_BLOB}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#05C740] underline decoration-[#05C740]/50 underline-offset-2 transition-colors hover:text-[#3ae86f] hover:decoration-[#3ae86f]"
                        >
                          {t("steps.download.blobLink")}
                        </a>
                        <a
                          href={CLIENT_DOWNLOAD_GITHUB}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#05C740] underline decoration-[#05C740]/50 underline-offset-2 transition-colors hover:text-[#3ae86f] hover:decoration-[#3ae86f]"
                        >
                          {t("steps.download.githubLink")}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
