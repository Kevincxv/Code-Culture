import type { Metadata } from 'next'
import './globals.css'
import NavBar from './components/navigation/navBar'

export const metadata: Metadata = {
  title: 'Code Culture',
}

export default function RootLayout({ children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
