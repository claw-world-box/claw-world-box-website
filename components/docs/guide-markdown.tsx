"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"

const mdComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mb-6 border-b border-[#007423]/40 pb-4 text-2xl font-medium tracking-wide text-[#05C740] md:text-3xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 text-xl font-medium text-[#05C740]/95 md:text-2xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-lg font-medium text-white md:text-xl">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-2 text-base font-medium text-white/90">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-[15px] leading-7 text-white/75 md:text-[16px] md:leading-8">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-white/75 md:text-[16px]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-5 text-[15px] leading-7 text-white/75 md:text-[16px]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="marker:text-[#05C740]/80">{children}</li>,
  hr: () => <hr className="my-10 border-[#007423]/35" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-white/90">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#05C740] underline decoration-[#05C740]/40 underline-offset-2 hover:text-[#3ae86f]"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-2 border-[#05C740]/50 bg-white/[0.03] py-2 pl-4 text-white/70">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="mb-6 overflow-x-auto rounded-lg border border-[#007423]/35">
      <table className="w-full min-w-[520px] border-collapse text-left text-[13px] text-white/80 md:text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#05C740]/10 text-[#05C740]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border-b border-[#007423]/40 px-3 py-2.5 font-medium">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-[#007423]/25 px-3 py-2.5 align-top text-white/75">
      {children}
    </td>
  ),
  tr: ({ children }) => <tr className="even:bg-white/[0.02]">{children}</tr>,
  code: ({ className, children }) => {
    const isBlock = className?.includes("language-")
    if (isBlock) {
      return (
        <code className={`${className} font-anaheim text-[13px] text-[#90cea0]`}>
          {children}
        </code>
      )
    }
    return (
      <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.88em] text-[#3ae86f]">
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="mb-6 overflow-x-auto rounded-xl border border-[#05C740]/25 bg-[#020a05] p-4 shadow-[inset_0_0_24px_rgba(5,199,64,0.06)]">
      {children}
    </pre>
  ),
}

export function GuideMarkdown({ markdown }: { markdown: string }) {
  return (
    <article className="pb-16">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
        {markdown}
      </ReactMarkdown>
    </article>
  )
}
