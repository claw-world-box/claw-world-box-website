import { useTranslations } from "next-intl"

type Step = {
  number: string
  key: "install" | "custom" | "config" | "register" | "demo"
  highlighted?: boolean
}

const steps: Step[] = [
  { number: "1", key: "install", highlighted: true },
  { number: "2", key: "custom" },
  { number: "3", key: "config" },
  { number: "4", key: "register" },
  { number: "5", key: "demo", highlighted: true },
] as const

const codeExample = [
  'import { ClawWorldBoxClient } from "@agw/claw-world-box";',
  "const client = new ClawWorldBoxClient({",
  '  smoldotChainSpecPath: "/path/to/claw-world-box-spec.json"',
  "});",
  "await client.connect();",
  "const agent = await client.registerWithRandomSpawn();",
]

function ActionCard({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="relative isolate flex h-[80px] items-center justify-center overflow-hidden rounded-2xl border border-[#05C740] bg-[#020a05] p-4 shadow-[0_0_20px_rgba(5,199,64,0.16),inset_0_0_28px_rgba(5,199,64,0.1)] md:h-[148px]"
    >
      <div className="absolute inset-0 z-0 bg-[#020a05]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(5,199,64,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,199,64,0.1)_1px,transparent_1px)] bg-[size:8px_8px]" />
      <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl shadow-[inset_0_0_35px_rgba(5,199,64,0.15),inset_0_0_80px_rgba(5,199,64,0.08)]" />

      <pre className="relative z-10 flex h-full w-full items-center justify-center overflow-x-auto text-center font-mono text-[14px] leading-6 text-[#007423] md:w-[356px] md:justify-start md:text-[16px] md:leading-8">
        <code className="font-anaheim">{title}</code>
      </pre>
    </a>
  )
}

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

          <p className="max-w-[1040px] text-sm leading-6 text-white/80 md:text-right md:text-[16px] md:leading-7">
            {t("description")}
          </p>
        </div>

        <div>
          <div className="relative mt-10 grid h-full gap-10 sm:mt-12 md:h-[262px] lg:mt-20 xl:grid-cols-5 xl:gap-6">
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[60%] bg-gradient-to-b from-gray-500/40 to-transparent lg:block" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative border-t border-[#69696966]"
              >
                <div className="-mt-2 flex min-h-[50px] items-end justify-start pl-[50px] lg:-mt-14">
                  <p className="text-[15px] leading-6 text-white/80 md:text-[16px]">
                    {t(`steps.${step.key}.title`)}
                  </p>
                </div>
                <div className="absolute -top-4.5 left-0 flex size-[35px] items-center justify-center rounded-full border border-white/45 bg-black text-[20px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
                  {step.number}
                </div>
                <div className="inline-block pl-[50px]">
                  <div
                    className={`mt-4 max-w-full rounded-[4px] border px-2 py-2 text-[10px] leading-4 sm:max-w-[208px] md:px-2 md:text-[8px] md:leading-normal ${
                      step.highlighted
                        ? "border-[#4F4F4F] text-[#05C740] shadow-[inset_0_0_75.8px_-36px_#05C740]"
                        : "border-transparent bg-transparent text-[#05C740]"
                    }`}
                  >
                    {t(`steps.${step.key}.detail`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9">
          <h4 className="text-[20px] font-medium tracking-[0.04em] text-[#05C740] md:text-[30px]">
            {t("codeExample")}
          </h4>

          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-4">
            <div className="relative isolate min-h-[250px] overflow-hidden rounded-2xl border border-[#05C740] bg-[#020a05] p-4 shadow-[0_0_20px_rgba(5,199,64,0.16),inset_0_0_28px_rgba(5,199,64,0.1)] md:h-[310px]">
              <div className="absolute inset-0 z-0 bg-[#020a05]" />
              <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(5,199,64,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,199,64,0.1)_1px,transparent_1px)] bg-[size:8px_8px]" />
              <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl shadow-[inset_0_0_35px_rgba(5,199,64,0.15),inset_0_0_80px_rgba(5,199,64,0.08)]" />

              <pre className="relative z-10 no-scrollbar flex h-full items-center justify-start overflow-x-auto font-anaheim text-[11px] leading-6 text-[#007423] sm:text-[13px] sm:leading-7 md:justify-center md:text-[16px] md:leading-8">
                <code className="font-anaheim">{codeExample.join("\n")}</code>
              </pre>
            </div>

            <div className="grid gap-4">
              <ActionCard title={t("viewDocs")} href="/" />
              <ActionCard title={t("runDemo")} href="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
