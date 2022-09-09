import React from 'react'
import { Container } from 'react-bootstrap'
import cashflow from '../images/cashflow.png'
export default function Features() {
  return (
    <Container className='text-center'>
        <br/>
        <div className='p-5'>
            <h1><strong>Can your spreadsheets do this?</strong></h1>
            <p>Pulse is like your cash flow spreadsheet, except the math isn’t wrong. Also, Pulse has:</p>
        </div>

        <div style={{display: 'grid', gridGap: '35px', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))'}}>
        <div>
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-cash-flow-finance-flaticons-lineal-color-flat-icons.png"className=""/>
            <small>
                <br/>
                <strong>Multiple Cash Flow Views</strong>
                <br/>
                Monitor your cash flow on a yearly, monthly, weekly, daily transactional basis.
            </small>
        </div>

        <div>
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-customers-agile-flaticons-lineal-color-flat-icons-2.png"/>
            <small>
                <br/>
                <strong>Customers and Projects</strong>
                <br/>
                Run cash flow reports on customers and projects to see how profitable they’re going to be.
            </small>
        </div>

        <div>
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-reports-productivity-flaticons-lineal-color-flat-icons.png"/>
            <small>
                <br/>
                <strong>Visual Reports</strong>
                <br/>
                With our easy-to-understand reports, you can see cash moving in and out of your business.
            </small>
        </div>

        <div>
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-currency-summer-travel-flaticons-lineal-color-flat-icons-2.png"/>
            <small>
                <br/>
                <strong>Currency Conversion</strong>
                <br/>
                If your business operates on multiple currencies, we have you covered with today’s exchange rates.
            </small>
        </div>

        <div>
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-team-team-building-flaticons-lineal-color-flat-icons-5.png"/>
            <small>
                <br/>
                <strong>Invite Your Team</strong>
                <br/>
                Invite your team to help out, or showcase your projections to investors by giving them read-only access.
            </small>
        </div>

        <div>
            <img src="https://img.icons8.com/dusk/40/000000/quickbooks.png"/>
            <small>
                <br/>
                <strong>Connects to Quickbooks Online</strong>
                <br/>
                Save time and reduce errors by keeping Pulse and your accounting software in sync.
            </small>
        </div>
    </div>
    <br/>
    <a href='#!' style={{color: '#00ad6a'}}>See Everything Pulse Does →</a>
    </Container>
  )
}
