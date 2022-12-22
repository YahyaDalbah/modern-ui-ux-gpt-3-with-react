import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import shopify from '../../assets/shopify.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'

export default function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
        <div className="gpt3__brand-images">
          <img src={google} alt="" />
          <img src={slack} alt="" />
          <img src={atlassian} alt="" />
          <img src={dropbox} alt="" />
          <img src={shopify} alt="" />
        </div>
    </div>
  )
}