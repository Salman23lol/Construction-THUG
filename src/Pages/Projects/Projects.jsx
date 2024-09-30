import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import Hero from './Hero'
import OurProjects from '../../Component/Home/OurProjects'
import { Helmet } from 'react-helmet'

const Projects = () => {
  return (
    <main className='overflow-x-hidden'>
       <Helmet>
        <title>Project | THUG</title>
        <meta name="description" content="Explore our wide range of services tailored for your needs." />
      </Helmet>
        <Header />
        <Hero />
        <OurProjects />
        <Footer />
    </main>
  )
}

export default Projects