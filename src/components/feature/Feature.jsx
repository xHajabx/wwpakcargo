import React from 'react'
import './feature.css'

export const Feature = ({title, text}) => {
  return (
    // <div className='gpt3__features-container__feature'>
      
    //   <div className="gpt3__features-container__feature-title"> 
    //     <h1> {title} </h1> 
    //   </div> 
      
    //   <div className="gpt3__features-container_feature-text"> 
    //     <p> {text} </p>
    //   </div>

    // </div> 
    <div className='track_container'> 
      <form> 
          <label for="invoice_num"> Invoice #: </label> 
          <input type="text" id="invoice_num" name="invoice_num"> </input>
          
          <label for="name">  Name: </label>
          <input type="text" id="name" name="name"> </input>

          <label for="contact">  Contact: </label>
          <input type="text" id="contact" name="contact"> </input>

          <button type="button"> SEARCH </button>
          
      </form> 
    </div> 
  )
}

export default Feature 