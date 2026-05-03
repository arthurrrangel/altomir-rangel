import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Books from '@/components/Books'
import YouTubeSection from '@/components/YouTube'
import Contribute from '@/components/Contribute'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function SectionDivider() {
  return (
    <div className="relative h-px">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5973F]/25 to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SectionDivider />
        <Books />
        <SectionDivider />
        <YouTubeSection />
        <SectionDivider />
        <Contribute />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
