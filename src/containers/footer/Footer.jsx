import React from 'react'
import './footer.css'
// import gpt3logo from '../../assets/logo.svg'


export const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'> WorldWide PAK Cargo Shipping Inc.  </h1>  
      </div>  

      <div className='gpt3__footer-btn'>
        <p> Contact Us </p>
      </div>

      <div className='gpt3__footer-links'>

        <div className='gpt3__footer-links_logo'> 
  
          <p><br /> All Rights Reserved </p>
        </div>

        <div className='gpt3__footer-links_div'> 
          <h4> Links </h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>

        <div className="gpt3__footer-copyright">
          <p> @2021 GPT-3. All rights reserved. </p>
        </div>

      </div>
    </div>
  )
}

export default Footer 