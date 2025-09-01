import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'We Dev - AI Development Platform',
  description: 'Advanced AI-powered development platform for building the future of software',
  keywords: 'AI, development, platform, software, nextjs',
  authors: [{ name: 'We Dev Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'We Dev - AI Development Platform',
    description: 'Advanced AI-powered development platform',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4F46E5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}