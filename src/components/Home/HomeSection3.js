import React from 'react'
import { Container, Row } from 'react-bootstrap'
import img from '../images/1.png'

export default function HomeSection3() {
  return (
    <Container>
        <Row>
            <div className='col-lg-7 mt-lg-5 text-lg-center' >
                <h1><strong>Make smarter business<br/>decisions with Pulse.</strong></h1>
                <p>Do you know if you can hire another employee or take some money out of the company? Should you take on that new project or should turn it down? With Pulse, you immediately see how business decisions will impact your cash in the future, which in turn gives you the confidence you need to know if the decision is right.</p>
            </div>

            <div className="card text-center col-lg-5 pt-2 rounded-0" style={{color: '#00ad6a'}}>
                <img className="card-img-top img-responsive center-block img-fluid" src={img} alt="img" style={{borderRadius: '50%', width: '100px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <div className="card-body">
                    <p>“Pulse makes my business smarter. We make better decisions because we can see further. You could say it has lowered our stress level by removing the fear of not knowing.”</p>
                    <small className='text-dark'>
                        CARL SMITH, BUREAU OF DIGITAL <br />

                    </small>
                    <a href='#!' style={{color: '#00ad6a'}}>Read Customer Story→</a>

                </div>
            </div>

        </Row>
        <br />
    </Container>
  )
}
