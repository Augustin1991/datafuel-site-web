import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "DataFuel - Redonnez de la valeur à vos données",
  description:
    "DataFuel est une plateforme Web3 qui récompense les utilisateurs avec le token $DFL pour le partage sécurisé de leurs données personnelles.",
  generator: "v0.app",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
