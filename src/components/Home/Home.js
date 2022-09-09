import React from 'react'
import BlogSectionHome from './BlogSectionHome'
import CardImg from './CardImg'
import Features from './Features'
import Footer from '../Footer'
import HomeSection1 from './HomeSection1'
import HomeSection3 from './HomeSection3'
import Navigation from '../Navigation'
import ReviewsHome from './ReviewsHome'
import Signup from './Signup'
import StoriesHome from './StoriesHome'

export default function Home() {
  return (
    <div>
        <Navigation />
        <HomeSection1/>
        <ReviewsHome />
        <HomeSection3/>
        <CardImg/>
        <BlogSectionHome />
        <Features />
        <StoriesHome />
        <Signup />
        <Footer />
    </div>
  )
}
