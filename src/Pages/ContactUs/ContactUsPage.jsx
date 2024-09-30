import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import Hero from './Hero'
import ContactUs from './ContactUs'
import { Helmet } from 'react-helmet'

const ContactUsPage = () => {
  return (
    <main className='overflow-x-hidden'>
       <Helmet>
        <title>Contact | THUG</title>
        <meta name="description" content="Explore our wide range of services tailored for your needs." />
      </Helmet>
        <Header />
        <Hero />
        <ContactUs />
        <Footer />
    </main>
  )
}

export default ContactUsPage