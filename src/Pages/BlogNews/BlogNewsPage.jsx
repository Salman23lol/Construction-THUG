import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import Hero from './Hero'
import BlogNews from '../../Component/Home/BlogNews'
import { Helmet } from 'react-helmet'

const BlogNewsPage = () => {
  return (
    <main className='overflow-x-hidden'>
 <Helmet>
        <title>Blog-News | THUG</title>
        <meta name="description" content="Explore our wide range of services tailored for your needs." />
      </Helmet>
        <Header />
        <Hero />
        <BlogNews />
        <Footer />

    </main>
  )
}

export default BlogNewsPage