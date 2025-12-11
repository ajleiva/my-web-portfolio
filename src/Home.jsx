import React from 'react'
import './Home.css'
import ProfilePic from './assets/Profile_Pic.jpg'

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1>
            Hey there,
            <br />
            I'm <span className="hero-name">Axel Leiva Treminio</span>
          </h1>
          <p className="hero-sub">I am into Software Development and Data Analytics.</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#about">About Me</a>
          </div>

          <div className="hero-social">
            <a href="https://www.linkedin.com/in/axel-leiva-treminio/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-circle">
            <img src={ProfilePic} alt="Axel Leiva Treminio" className="hero-avatar" />
          </div>
        </div>
      </div>
    </section>
  )
}
