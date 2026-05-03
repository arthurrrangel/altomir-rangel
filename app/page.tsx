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
    <div className="px-6 md:px-10 max-w-7xl mx-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
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
