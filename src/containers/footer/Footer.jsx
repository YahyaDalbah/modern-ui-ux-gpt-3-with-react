import React from 'react'
import './footer.css'
import gpt3logo from "../../assets/logo.svg"

export default function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-title'>
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content_title">
          <img src={gpt3logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-content_links">
          <h4>Links</h4>
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
        </div>
        <div className="gpt3__footer-content_links">
          <h4>Company</h4>
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
        </div>
        <div className="gpt3__footer-content_links">
          <h4>Get in touch</h4>
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
        </div>
      </div>
      <div className="gpt3__footer-content_copywrite">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}
