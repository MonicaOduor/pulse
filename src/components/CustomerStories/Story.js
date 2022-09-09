import React from 'react'
import Footer from '../Footer'
import Signup from '../Home/Signup'
import Navigation from '../Navigation'
import CaseStudy from './CaseStudy'
import Reviews from './Reviews'

export default function Story() {
  return (
    <>
        <Navigation />
        <CaseStudy />
        <hr/>
        <Reviews/>
        <br/>
        <Signup />
        <Footer />
    </>
  )
}
