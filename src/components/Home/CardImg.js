import React from 'react'
import { Container } from 'react-bootstrap'

import cardimg from '../images/home-cardimg.jpg'

function CardImg() {
  return (
    <Container>
        <div className="card rounded-0">
            <img className="card-img rounded-0 " src={cardimg} style={{height: '23rem', objectFit: 'cover'}} alt="Card image"/>
            <div className="card-img-overlay text-white col-lg-5 ml-lg-5">
                <br/><br/>
                <h1><strong>Pulse is specifically designed for small businesses.</strong></h1>
                <p>Our customers include creative and technology agencies, service providers, restaurants, manufacturers, retail shops, contractors, freelancers, and more.</p>
                <button className='btn btn-light rounded-0 p-1 cardimg_btn'>
                    <small><strong>Sign Up for a Free 30-Day Trial</strong></small>
                </button>
            </div>
        </div>

    </Container>
  )
}

export default CardImg