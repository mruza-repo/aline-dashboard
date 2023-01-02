import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/layouts/landing-page/about-section'
import ContactUs from '../components/layouts/landing-page/contact-us'
import FAQ from '../components/layouts/landing-page/faq'
import Footer from '../components/layouts/landing-page/footer'
import Header from '../components/layouts/landing-page/header'
import HeroSection from '../components/layouts/landing-page/hero-section'
import NewsLetter from '../components/layouts/landing-page/news-letter'
import ServiceSection from '../components/layouts/landing-page/services-section'
import WeOffer from '../components/layouts/landing-page/we-offer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ALine | One stop destination for all your digital need </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WeOffer />
      <FAQ />
      <NewsLetter />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
