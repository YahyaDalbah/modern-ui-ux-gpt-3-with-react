import React from 'react'
import './feature.css'
export default function Feature({title , text}) {
  return (
    <div className='gpt3__features'>
      <div className="gpt3__features-title">
        <div/>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-text">
        {text}
      </div>
    </div>
  )
}
