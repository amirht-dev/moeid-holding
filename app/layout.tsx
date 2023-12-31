import './globals.css'
import localFont from 'next/font/local'
import Navbar from '@/components/layout/Navbar'

const yekanFont = localFont({
  src: "../public/font/Yekan.woff2",
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={yekanFont.className}>
        <Navbar />
        <main className="space-y-16 md:space-y-40">
          {children}
        </main>
      </body>
    </html>
  )
}
