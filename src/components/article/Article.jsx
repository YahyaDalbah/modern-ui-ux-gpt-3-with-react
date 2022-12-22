import React from 'react'
import './article.css'

export default function Article({articleImg}) {
  return (
    <div className='gpt3__article'>
        <img src={articleImg} alt="" />
        <div className='gpt3__article-content'>
          <h6>Sep 26, 2021</h6>
          <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
          <h6>Read Full Article</h6>
        </div>
        
    </div>
  )
}
