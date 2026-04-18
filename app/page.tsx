import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Books from '@/components/Books'
import YouTubeSection from '@/components/YouTube'
import Invite from '@/components/Invite'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Books />
      <YouTubeSection />
      <Invite />
      <Contact />
      <Footer />
    </main>
  )
}
