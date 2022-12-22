import React from 'react'
import './blog.css'
import Article from "../../components/article/Article"
import blog01 from "../../assets/blog01.png"
import blog02 from "../../assets/blog02.png"
import blog03 from "../../assets/blog03.png"
import blog04 from "../../assets/blog04.png"
import blog05 from "../../assets/blog05.png"

export default function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-title">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-articles'>
        <Article articleImg={blog01}/>
        <Article articleImg={blog02}/>
        <Article articleImg={blog03}/>
        <Article articleImg={blog04}/>
        <Article articleImg={blog05}/>
      </div>
    </div>
  )
}
