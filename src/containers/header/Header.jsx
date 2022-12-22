import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
export default function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quod similique facilis. Asperiores ducimus eaque deleniti ratione dolorem fugit magnam ipsa quaerat, suscipit atque quas ut perspiciatis, odio at iure!</p>
        <div className="gpt3__header-content__input">
          <input type="email" id="" placeholder='Your Email Address'  />
          <button>get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  )
}
