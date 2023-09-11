import './globals.css'
import { Inter } from 'next/font/google'

export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

  
export const metadata = {
  title: 'IIT PATNA HOSTEL Management',
  description: 'The students of IIT Patna are provided with accomodation facilities in the campus of the college itself.',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
