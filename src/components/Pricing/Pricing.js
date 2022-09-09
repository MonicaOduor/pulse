import React from 'react'
import Navigation from '../Navigation'
import FAQ from './FAQ'
import PricingCards from './PricingCards'
import Review from './Review'
import Footer from '../Footer'

export default function Pricing() {
  return (
    <>
        <Navigation />
        <PricingCards />
        <Review />
        <hr/>
        <FAQ />
        <Footer />

    </>
  )
}
