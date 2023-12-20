import type { Metadata } from 'next'
import './globals.css'
import NavTest from './components/static/navTest'

export const metadata: Metadata = {
  title: 'Code Culture',
}

export default function RootLayout({ children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavTest />
        {children}
      </body>
    </html>
  )
}
