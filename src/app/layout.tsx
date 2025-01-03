import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Weigh Anchor - Construction Meets Innovation',
  description: 'Breaking free from traditional constraints through technology-enhanced construction management.',
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon.png',
    apple: '/favicon/favicon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/favicon/favicon.png',
    },
  },
  manifest: '/favicon/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weighanchor.com',
    siteName: 'Weigh Anchor',
    title: 'Weigh Anchor - Construction Meets Innovation',
    description: 'Breaking free from traditional constraints through technology-enhanced construction management.',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Weigh Anchor Logo',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let isDark = localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
                document.documentElement.classList.toggle('dark', isDark);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
