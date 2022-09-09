import React from 'react'
import { Container } from 'react-bootstrap'

export default function HomeSection1() {
  return (
    <Container>
        <div className='m-5 text-center'>
            <h1><strong>Need an accurate financial forecast?</strong></h1>
            <h5>Use Pulse to project your cash flow with confidence.</h5>
            <br/>
            <button className='btn-lg btn btn-primary p-3 rounded-0'><strong>Try 30 Days Free</strong></button>
            <br/>
        </div>
    </Container>
  )
}
