import React from 'react'
import { google, facebook, instagram, whatsapp } from './imports'
import './brand.css'

export const Brand = () => {
  return (
    <div className="brand section padding">

      <h1> Follow us </h1>

      <div> 
        <img src={google} alt="google"/> 
      </div> 
      <div> 
        <img src={facebook} alt="facebook" /> 
      </div> 
      <div> 
        <img src={instagram} alt="instagram" /> 
      </div> 
      <div> 
        <img src={whatsapp} alt="whatsapp" /> 
      </div> 
    </div>
  )
}

export default Brand 



