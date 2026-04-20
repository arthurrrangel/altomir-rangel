import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Books from '@/components/Books'
import YouTubeSection from '@/components/YouTube'
import Contribute from '@/components/Contribute'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Books />
        <YouTubeSection />
        <Contribute />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
