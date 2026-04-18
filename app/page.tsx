import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Books from '@/components/Books'
import YouTubeSection from '@/components/YouTube'
import Vision from '@/components/Vision'
import Contribute from '@/components/Contribute'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Books /></Reveal>
        <Reveal><YouTubeSection /></Reveal>
        <Reveal><Vision /></Reveal>
        <Reveal><Contribute /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  )
}
