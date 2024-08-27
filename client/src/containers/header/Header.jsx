import React from 'react'
import './header.css'
import people from '../../assets/people.jpeg'
import AD from '../../assets/cargo.png'

const Header = () => {
  return (
      
    <div className="header">
      
      {/* child div #1 */}
      <div className="header-content"> 

        <h1> Ship from USA to PK or from PK to USA </h1>
        <p> Container 32 has been released from port Qasim. Container 21 dispatched form NY </p>

        {/* <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button"> Get Started </button> 
        </div>

        <div className="gpt3__header-content__people"> 
          <img src={people} alt="people" />   
          <p> join us on facebook, instagram, or whatsapp </p>  
        </div> */}
 
        {/* div #3 */} 
      </div>

      {/* <div className="gpt3__header-image"> 
        <img src={AD} alt="AD"/> 
      </div>  */}

      {/* child div #2 */}
      

      {/* child div #3 */}
      <div className='white__background_header'> </div>

      <div className='header__bottom_container'>  
      
        <div className='header__ship'>  
          <h3> SHIP </h3> 
        </div>  

        <div className='header__track'>  
          
          <span className="fa-solid fa-magnifying-glass fa-lg">  </span>
          <h3> TRACK </h3>
        
        </div> 

        <div className='header__info'>  
          <h3> INFO </h3>  
        </div>

      </div>

    </div>
  )
}

export default Header