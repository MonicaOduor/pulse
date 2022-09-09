import React from 'react'
import avatar from '../images/subvert-avatar.png'

function Review() {
  return (
    <div className='text-center container p-5'>
        <br/>
        <img src={avatar} />
        <p>“Pulse is worth every penny because it empowers business owners with critical financial insight and knowledge.”</p>
        <small style={{color: '#00ad6a'}}><strong>SUBVERT MARKETING, INC.</strong></small>

    </div>
  )
}

export default Review