import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Books from '@/components/Books'
import YouTube from '@/components/YouTube'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Books />
      <YouTube />
      <Contact />
      <Footer />
    </main>
  )
}
