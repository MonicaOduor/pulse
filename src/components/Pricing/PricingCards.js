import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function PricingCards() {
  return (
    <Container>
        <div className='text-center'>
            <h1 className='p-4'><strong>Try Pulse free for<br className='d-lg-block d-sm-none d-md-block'/> 30 days.</strong></h1>
            <p>See why Pulse is the best way to monitor your cash flow. Sign<br className='d-lg-block d-sm-none d-md-block'/> up for any plan and try Pulse absolutely free for 30 days.</p>
        </div>
        <br/>
        <br className='d-lg-block d-sm-none'/>
        <br className='d-lg-block d-sm-none'/>
        <br className='d-lg-block d-sm-none'/>

        <div className='grid-container'>
            <div className='card pricing-card1 border-0' style={{background: 'inherit'}}>
                <p><strong style={{color: '#00ad6a'}}>These are what we call the Pulse Basics. They’re what every customer gets.</strong></p>
                <ul>
                  <li>Manage cash flow on a daily, weekly, monthly or yeaarly basis</li>
                  <li>Forecast growth with recurring income or expenses that scale automatically</li>
                  <li>Works with any currency</li>
                  <li>See Money In and Money Out, categorize transactions, and run helpful reports</li>
                  <li>Toggle entries and accounts on and off to game out different scenarios</li>
                </ul>
            </div>

            <div className='card p-0 pricing-card2 pricing-card rounded-0'>
              <span className='text-center text-white' style={{backgroundColor: '#00ad6a'}}>RECOMMENDED</span>
              <div className='p-3'>
                <h2>
                  <strong style={{color: '#00ad6a'}}>Small Business Plan</strong>
                  &nbsp;
                  <span className='text-secondary' style={{fontSize: '0.7em'}}>$59 per month</span>
                </h2>
                <small><strong>YOU GET PULSE BASICS, PLUS:</strong></small>
                <br />
                <img src="https://img.icons8.com/color/20/000000/double-tick.png"/> Manage cash flow across multiple financial accounts
                <br/>
                <img src="https://img.icons8.com/color/20/000000/double-tick.png"/> Invite your investors, book keeper, or management team to see reports or manage cash flow
                <br/>
                <img src="https://img.icons8.com/color/20/000000/double-tick.png"/> Integrate with QuickBooks Online for more accurate cash flow
                <br/>
                <img src="https://img.icons8.com/color/20/000000/double-tick.png"/> Track your actual cash flow alongside your projected cash flow
                <br/>
                <br/>
                <button className='btn btn-lg mx-auto m-2 rounded-0 d-block pricing-btn' style={{backgroundColor: '#00ad6a'}}>Sign Up Now</button>
              </div>
            </div>

            <div className='card p-0 pricing-card3 pricing-card rounded-0'>
              <small className='bg-light text-center'>Complex business with multiple financial accounts, currencies, or auditing needs?</small>
              <div className='p-3'>
                <h2>
                  <strong style={{color: '#00ad6a'}}>Unlock Extra Features</strong>
                  &nbsp;
                  <span className='text-secondary' style={{fontSize: '0.7em'}}>$89 per month</span>
                </h2>
                <small><strong>GET IT ALL PLUS:</strong></small>
                <br />
                <img src="https://img.icons8.com/color/20/000000/double-tick.png"/> Manage cash flow across unlimited financial accounts
                <br/>
                <img src="https://img.icons8.com/color/20/000000/double-tick.png"/>Convert to any currency for localized cash flow reporting and projections
                <br/>
                <img src="https://img.icons8.com/color/20/000000/double-tick.png"/> Attach invoices or contracts to your cash flow entries for accountability and auditing
                <br/>

                <br/>
                <button className='btn btn-lg mx-auto m-2 rounded-0 d-block pricing-btn' style={{backgroundColor: '#00ad6a'}}>Try Premium</button>
              </div>
            </div>
        </div>
    </Container>
  )
}
