import React from 'react'
import { Container } from 'react-bootstrap'
import svg from '../images/homesection1.svg'

export default function HomeSection1() {
  return (
    <Container>
        <div className='mt-5'>
            <h1>Yes, your business can<br/>survive that expense.</h1>
            <p>Do you know how much money youll have in two weeks? Two months? Two years? <br className='d-sm-none d-lg-block'/>Business owners who use Pulse have better cash flow habits and a firm grasp on <br className='d-sm-none d-lg-block'/>the pulse of their business. <strong>First month free.</strong></p>
            <button className='btn-lg btn btn-primary p-3 rounded-0'><strong>Try 30 Days Free</strong></button>
            <br/>
            <small>Plans starts at $29. <a href='#pricing' className='text-dark'><strong>See full pricing</strong></a></small><br/>

            <img src={svg} width='100%' className='img-responsive header-img' alt='graph'/>
        </div>
    </Container>
  )
}
