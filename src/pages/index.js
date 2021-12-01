import Navigation from 'components/common/navigation'
import Hero from 'components/common/hero'
import Contact from 'components/common/contact'
import Cases from 'components/common/cases'
import Footer from 'components/common/footer'

export default function Index() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <Navigation />
      <Hero />
      <Contact />
      <Cases />
      <Footer />
    </>
  )
}
