import Header from '@/components/layout/header/Header'
import { playfairDisplay, inconsolata, inter, permanentMarker } from './fonts'
import Footer from '@/components/layout/footer/Footer'
import { AuthProvider } from '@/lib/hooks/auth/useAuth'
import '@/styles/globals.scss'

export const metadata = {
  title: 'Joel Borofsky | Designer & Developer',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${playfairDisplay.variable} ${inconsolata.variable} ${inter.variable} ${permanentMarker.variable}`}
      >
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
