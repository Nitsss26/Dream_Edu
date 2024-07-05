import Footer from '@/constant/Footer/Footer'
import './globals.css'
import { Nunito } from 'next/font/google'
import Header from '@/constant/Navbar/Header'
import BottomBar from '@/constant/BottomBar/BottomBar'
import WhatsApp from '@/constant/FAB/WhatsApp'
import Head from 'next/head'

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Dream Education',
  description: 'Welcome To Dream Education.',
  icon: ['/public/favicon.ico?v=1']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="fl-verify" content="9be66eef7379e3946a735731ecf2c665" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body className={nunito.className}>
        <Header />
        {children}
        <BottomBar />
        <WhatsApp />
        <Footer /></body>
    </html>
  )
}
