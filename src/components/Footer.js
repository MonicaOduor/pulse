import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './images/logo.svg'

export default function Footer() {
  return (
    <div className='bg-dark container-fluid footer' >
        <Row className='p-5'>
            <div className='text-center col-md-12 col-lg-5'>
                <img src={logo} alt=''/><br/><br/>
                <button className='btn btn-lg btn-outline-success rounded-0 pl-5 pr-5 footer_btn'>Sign Up for a Free 30-Day Trial</button>
            </div>
            <div className='col-lg-7'>
            <br/>
                <Row>
                    <span className='col-4 '>
                        <span className='text-white footer-links'><strong>Product</strong></span><br/>
                        <Link to='/features' style={{color: '#00ad6a', textDecoration: 'none'}} className='footer-links'>Features</Link>
                        <br/>
                        <Link to='/pricing' style={{color: '#00ad6a', textDecoration: 'none'}} className='footer-links'>Pricing</Link>
                        <br/>
                        <a href='#!' style={{color: '#00ad6a', textDecoration: 'none'}} className='footer-links'>Sign Up</a>
                        <br/>
                    </span>

                    <span className='col-4 '>
                        <span className='text-white footer-links'><strong>Company</strong></span><br/>
                        <Link to='/stories' style={{color: '#00ad6a', textDecoration: 'none'}} className='footer-links'>Customer Stories</Link>
                        <br/>
                        <a href='#!' style={{color: '#00ad6a', textDecoration: 'none'}} className='footer-links'>About</a>
                        <br/>
                        <a href='#!' style={{color: '#00ad6a', textDecoration: 'none'}} className='footer-links'>Contact</a>
                        <br/>
                    </span>

                    <span className='col-4 '>
                        <span className='text-white footer-links'><strong>Resources</strong></span><br/>
                        <a href='#!' style={{color: '#00ad6a', textDecoration: 'none'}} className='footer-links'>Support</a>
                        <br/>
                        <Link to='/blog' style={{color: '#00ad6a', textDecoration: 'none'}} className='footer-links'>Blog</Link>
                        <br/>
                    </span>
                </Row>
            </div>

        </Row>
        <div className='text-secondary col-lg-8 p-1' style={{fontSize: '0.75em'}}>
            <small>
                <span>&copy;2022 Pulseapp.com, Inc. All Rights Reserved |</span>&nbsp;
                <span><a href='#!' style={{color: 'inherit'}}>Terms of Use</a> |</span>&nbsp;
                <span><a href='#!' style={{color: 'inherit'}}>Privacy Policy</a> |</span>&nbsp;
                <span><a href='#!' style={{color: 'inherit'}}>EU Privacy</a></span>
                <br/>
                <span>Recreating the landing page of Pulse App. This is a challenge provided by Frontend Practice.<br/>Pulse is a clone made by <a style={{color: 'inherit'}} href='https://github.com/MonicaOduor/'>Monica Oduor</a>.&nbsp;</span>
                <span>I also made&nbsp;
                    <a href="https://github.com/MonicaOduor/backstagetalks" target='blank' style={{color: 'inherit'}}>Backstage Talks</a>,&nbsp;
                    <a href="https://github.com/MonicaOduor/guestlist" target='blank' style={{color: 'inherit'}}>GuestList</a>, and&nbsp;
                    <a href="https://github.com/MonicaOduor/mynotesapp" target='blank' style={{color: 'inherit'}}>My Notes App</a>.
                </span>
            </small>
        </div>
        <br/><br/>
    </div>
  )
}
