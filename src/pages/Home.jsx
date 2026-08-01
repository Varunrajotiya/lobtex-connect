import { Helmet } from 'react-helmet-async'
import company from '../data/company'
import Hero from '../components/Hero'
import QuickActions from '../components/QuickActions'
import About from '../components/About'
import Services from '../components/Services'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingNav from '../components/FloatingNav'

export default function Home() {
  const title = `${company.companyName} | Digital Business Card`
  const description = company.about.short

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={company.coverImage} />
        {company.website && <meta property="og:url" content={company.website} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      {/* Fixed ambient blobs — subtle brand-blue depth */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-700/25 blur-[100px]" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-sky-600/20 blur-[90px]" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-indigo-700/20 blur-[80px]" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-blue-900/20 blur-[80px]" />
      </div>

      <main className="max-w-2xl mx-auto pb-8">
        <Hero />
        <QuickActions />
        <About />
        <Services />
        <Products />
        <Contact />
        <Footer />
      </main>

      <FloatingNav />
    </>
  )
}
