import React from 'react'
import './possibility.css'
import doorImage from '../../assets/wwpakcargo_van.png'
import pakistanImage from '../../assets/cargo_america.jpeg'
import americaImage from '../../assets/cargo_ship_pk.jpeg'

export const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'> 

      <div className='services'>

        <div className='services_title'> <h1> OUR SERVICES </h1> </div>

        <div className='services_section'> 
      
          <div className='door_to_door'> 

            <img src={doorImage} alt="door"/>   
            <div className='door_to_door_container'>       
              <h1> DOOR to DOOR  </h1>
              {/* <link rel="icon" type="image/x-icon" href=""> </link> */}
              <p>
                Our door to door services offer picking up your parcels* (in certain states) or 
                you can send over the parcel with our prepaid label. Just give us a call and we will pick up your 
                parcel at your door. 
              </p> 
              <button> Discover More </button>
            </div>
            
          </div>

          <div className='pakistan_cargo_shipping'> 

            <img src={pakistanImage} alt=""/>
            <div className='pakistan_cargo_container'> 
              <h1> Cargo Shipping to Pakistan </h1>
              
              <p> We ship your parcels via cargo ship that arrives to Pakistan in under a month. 2 containers
              are deployed each month so if you missed your date to get the parcel ready you have more than enough 
              time to deliver. 
              </p> 
              <button> Discover More</button>
            </div>

          </div>

          <div className='america_cargo_shipping'> 
          
            <img src={americaImage} alt=""/>
            <div className='america_cargo_shipping_subheading'> 
              <h1> Online Orders </h1>
              <p> You can order from Amazon, Walmart, Costco, Macys, etc. from any brand or 
                website in the USA and have the orders shipped towards our office! To find out more 
                click here!  
              </p>
              <button> Discover More </button>
            </div> 

          </div> 
          
        </div>

      </div>

    </div>
  )
}

export default Possibility