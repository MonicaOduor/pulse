import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function FAQ() {
  return (
    <Container>
        <h1><strong>FAQ</strong></h1>
        <Row>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <strong>How does the 30-day free trial work?</strong>
                <p>You can use Pulse absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged.</p>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
                <strong>If I upgrade an existing account, do I get another free trial?</strong>
                <p>Brand new accounts are the only ones eligible for a 30-day free trial. If you upgrade an existing account, your credit card will be billed the new amount on the date of your next billing cycle.</p>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
                <strong>What is a “Financial Account”?</strong>
                <p>Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes.<br/>They’re designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries.</p>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
                <strong>Do I have to commit to a long-term contract?</strong>
                <p>No. There is no contract when you use Pulse, other than agreeing to our Terms of Service.</p>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
                <strong>Will I be able to cancel my account if I don’t use Pulse?</strong>
                <p>Yes – you can cancel your account at any time. To cancel your account, go to your billing page and click on “Please cancel my account” at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation.</p>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
                <strong>What types of payments do you accept?</strong>
                <p>We accept payments made online using Visa, Mastercard, Discover, and American Express.</p>
            </div>

        </Row>
    </Container>
  )
}
