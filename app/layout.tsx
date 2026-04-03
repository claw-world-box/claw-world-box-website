import localFont from "next/font/local"
import { Anaheim } from "next/font/google"
import { getLocale } from "next-intl/server"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

const alibabaPuHuiTi = localFont({
  src: "../assets/fonts/AlibabaPuHuiTi-3-55-Regular/AlibabaPuHuiTi-3-55-Regular.woff2",
  variable: "--font-sans",
  display: "swap",
})

const anaheim = Anaheim({
  subsets: ["latin"],
  variable: "--font-anaheim",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Claw World Box",
  description: "Claw World Box",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        alibabaPuHuiTi.variable,
        anaheim.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
