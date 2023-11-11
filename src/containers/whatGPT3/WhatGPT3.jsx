import React from 'react'
import Feature from '../../components/feature/Feature'
import video from '../../assets/video_container_update.mp4'
import './whatGPT3.css'

export const WhatGPT3 = () => {
  return (
    // <div className="gpt3__whatgpt3 section__margin" id="wgpt3">

      <div className='updates_container'> 

        <div className='video_updates'> 
          <video width="800px" height="500px" controls="controls"> 
            <source src={video} type="video/mp4"/> 
          </video>
        </div>

        <div className='updates_headlines'> 
          <h2> RECENT UPDATES: OCTOBER 8, 2023 </h2>
          <p> video and slideshow of recent container that landed in pakistan or USA </p> 
          <h3> CONTAINER TO PAKISTAN</h3>
          <p> news containing the container that left to pakistan </p>  
          <h3> CONTAINER TO USA </h3> 
          <p> news about the containar that arrived to pakistan </p>
        </div>

      </div>
     
      /* <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/> 
      </div> 

      <div className="gpt3__whatgpt3-heading"> 
        <h1 className="gradient__text"> The possibiliites are beyond your imagination </h1>
        <p> Explore the Library </p>
      </div>
        
      <div className= "gpt3__whatgpt3-container "> 
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>          
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/> 
      </div>  */

    // </div>
  )
}

export default WhatGPT3 