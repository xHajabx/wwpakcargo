import React from 'react'
import './blog.css'
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports' 
 
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      
      <div className='gpt3__blog-heading'> 
          <h1 className='gradient__text '> See what our customers think! </h1>
          <p> This part should contain videos and photos of good customer feedback </p>
          <video> </video>
          <video> </video>
          <video> </video>
      </div>  

      <div className='gpt3__blog-container'>
      </div>

    </div>
  )
}

export default Blog 