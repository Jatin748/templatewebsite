import '@/styles/globals.css'
import Header from '@/components/Header'
import { Work_Sans } from 'next/font/google'
import Footer from '@/components/Footer'
const work = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900', '700', '800'],
})
export default function App({ Component, pageProps }) {
  return (
    <main className={work.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
