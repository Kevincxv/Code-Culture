import type { Metadata } from 'next'
import './globals.css'
import NavTest from './components/navComponents/navTest'
import SidePanel from './components/static/sidePanel'
import Footer from './components/static/footer'

export const metadata: Metadata = {
  title: 'Code Culture',
}

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavTest />
        <SidePanel />
        <Footer />
        {children}
      </body>
    </html>
  )
}
