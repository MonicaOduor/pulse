import React from 'react'

import cardimg1 from '../images/2.png'
import cardimg2 from '../images/3.png'
import cardimg3 from '../images/4.png'


export default function BlogSectionHome() {
  return (
    <div className='container'>
      <br/>
        <div className='text-center p-5'>
            <h1><strong>Pulse helps real businesses survive & thrive.</strong></h1>
            <p>Our blog features stories from real business owners with real business advice, in addition to our own insights on how you can build better cash flow habits.</p>
        </div>

        <div style={{display: 'grid', gridGap: '15px', gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))'}}>
        <div className="card rounded-0 blog_card" style={{background: 'inherit'}}>
          <img className="card-img-top" src={cardimg1} alt="Card image cap" />
          <div className="card-body">
            <small className='text-secondary'>SURVIVE & THRIVE</small><br/>
            <p><strong>Growth in a Downturn: How Arash Fayz of LA Tutoring Pivoted After An 80% Client Drop</strong></p>
            <p className='text-secondary'>Arash Fayz of LA Tutors knew he needed to change his business model when the pandemic hit. Here is how he scaled his tutoring business after an 80% drop in clients.</p>
            <a href='#' style={{color: '#00ad6a'}}>Read More →</a>
          </div>
        </div>

        <div className="card rounded-0 blog_card" style={{background: 'inherit'}}>
          <img className="card-img-top" src={cardimg2} alt="Card image cap" />
          <div className="card-body">
            <small className='text-secondary'>ENTREPRENURSHIP</small><br/>
            <p><strong>Monetizing a Network: How Jodi Brandstetter Started Her Second Business</strong></p>
            <p className='text-secondary'>STEM talent consultant Jodi Brandstetter started her second business during the pandemic—a business book publishing network. Here is how she made it work.</p>
            <a href='#' style={{color: '#00ad6a'}}>Read More →</a>
          </div>
        </div>

        <div className="card rounded-0 blog_card" style={{background: 'inherit'}}>
          <img className="card-img-top" src={cardimg3} alt="Card image cap" />
          <div className="card-body">
            <small className='text-secondary'>PRO TIPS</small><br/>
            <p><strong>5 Steps to Optimizing A Services Business from Brogan Renshaw, Founder of Firewire Digital</strong></p>
            <p className='text-secondary'>Brogan Renshaw filled a gap in his local market by starting an SEO agency, FireWire Digital. Here’s what he’s learned from niching down and streamlining his business.</p>
            <a href='#' style={{color: '#00ad6a'}}>Read More →</a>
          </div>
        </div>


        </div>

    </div>
  )
}
