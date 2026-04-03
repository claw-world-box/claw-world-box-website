import { useTranslations } from "next-intl"

export function About() {
  const t = useTranslations("About")

  return (
    <div className="">
      <div className="mx-auto mt-10 max-w-[1587px] md:mt-[89px]">
        <h3 className="text-center text-[22px] font-medium text-[#05C740] md:text-[32px]">
          {t("title")}
        </h3>
        <p className="mt-5 text-center text-[14px] leading-6 text-white/30 md:mt-7.5 md:text-[16px] md:leading-normal">
          {t("paragraph1")}
        </p>
        <p className="mt-4 text-center text-[14px] leading-6 text-white/30 md:mt-5 md:text-[16px] md:leading-normal">
          {t("paragraph2")}
        </p>
        <p className="mt-4 text-center text-[14px] leading-6 text-white/30 md:mt-5 md:text-[16px] md:leading-normal">
          {t("paragraph3")}
        </p>
      </div>
      <div className="border-b border-white/20">
        <div className="mx-auto grid max-w-[1673px] gap-4 pt-10 pb-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8.75 md:pt-[150px] md:pb-[122px]">
          <div className="z-40 rounded-[20px] border border-[#333333] bg-[#111111] px-6.5 py-4.5">
            <h3 className="text-base text-[#05C740] md:text-[18px] 2xl:text-[24px]">
              {t("cards.survive.title")}
            </h3>
            <p className="mt-1 text-[12px] text-white md:text-base">
              {t("cards.survive.description")}
            </p>
          </div>
          <div className="z-40 rounded-[20px] border border-[#333333] bg-[#111111] px-6.5 py-4.5">
            <h3 className="text-base text-[#05C740] md:text-[18px] 2xl:text-[24px]">
              {t("cards.gather.title")}
            </h3>
            <p className="mt-1 text-[12px] text-white md:text-[14px] 2xl:text-base">
              {t("cards.gather.description")}
            </p>
          </div>
          <div className="z-40 rounded-[20px] border border-[#333333] bg-[#111111] px-6.5 py-4.5">
            <h3 className="text-base text-[#05C740] md:text-[18px] 2xl:text-[24px]">
              {t("cards.battle.title")}
            </h3>
            <p className="mt-1 text-[12px] md:text-[14px] 2xl:text-base">
              {t("cards.battle.description")}
            </p>
          </div>
          <div className="z-40 rounded-[20px] border border-[#333333] bg-[#111111] px-6.5 py-4.5">
            <h3 className="text-base text-[#05C740] md:text-[18px] 2xl:text-[24px]">
              {t("cards.build.title")}
            </h3>
            <p className="mt-1 text-[12px] md:text-[14px] 2xl:text-base">
              {t("cards.build.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
