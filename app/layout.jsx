// app/layout.js (or app/layout.tsx)

import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import { AuthProvider } from '@/lib/hooks/auth/useAuth'
import { playfairDisplay, inconsolata, inter, permanentMarker } from './fonts'
import '@/styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Joel Borofsky | Designer & Developer',
  description:
    'A former banker and business developer turned web designer and fullstack developer. I can bring your project to life!',

  // Open Graph metadata (used by Facebook, LinkedIn, Slack, etc.)
  openGraph: {
    title: 'Joel Borofsky | Designer & Developer',
    description:
      'A former banker and business developer turned web designer and fullstack developer. I can bring your project to life!',
    url: 'https://joelborofsky.com',
    siteName: 'Joel Borofsky',
    images: [
      {
        url: '/site-image.png',
        width: 1200,
        height: 630,
        alt: 'Joel Borofsky | Designer & Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Joel Borofsky | Designer & Developer',
    description:
      'A former banker and business developer turned web designer and fullstack developer. I can bring your project to life!',
    images: ['/site-image.png'],
    // creator: '@YourTwitterHandle', // optional
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${inconsolata.variable} ${inter.variable} ${permanentMarker.variable}`}
      >
        <ThemeProvider
          attribute='data-theme'
          defaultTheme='system'
          enableSystem={true}
        >
          <AuthProvider>
            <Header />
            {children}
            <Footer />
            <Analytics />
          
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
