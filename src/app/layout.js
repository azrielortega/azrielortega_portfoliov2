import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat ({subsets : ['latin']})

export const metadata = {
  title: 'Azriel',
  description: "Azriel Matthew Ortega's Personal Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}
