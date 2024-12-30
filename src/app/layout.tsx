import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'
import FooterPage from "./components/Footer";
import HeaderPage from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'โรงเรียนบ้านหนองเบิด',
  description: 'โรงเรียนบ้านหนองเบิด ตำบลเมืองน้อย อำเภอธวัชบุรี จังหวัดร้อยเอ็ด',
  keywords: 'Nongberd School, โรงเรียนบ้านหนองเบิด, หนองเบิด',
  icons: {
    icon: '/favicon.png', // Default favicon
    shortcut: '/favicon.ico', // Optional shortcut icon
    apple: '/apple-touch-icon.png', // Optional Apple Touch icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <HeaderPage />
          <Navbar />
          <main className="flex justify-center items-start p-1 min-h-screen bg-white">
            {children}
          </main>
        <FooterPage />
        </AuthProvider>
      </body>
    </html>
  )
}
