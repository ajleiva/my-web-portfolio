import React from 'react'
import './Home.css'
import ProfilePic from './assets/Profile_Pic.jpg'
import linkedInLogo from './assets/LinkedIn_logo_initials.png'
import githubLogo from './assets/github-mark-white.png'

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
          <p className="hero-sub">I'm a Software Developer and have a passion for Data Analytics.</p>

          <div className="hero-actions">
            <div className="hero-cta">
              <a className="btn btn-primary" href="#about">About Me</a>
            </div>

            <div className="hero-social">
              <a href="https://www.linkedin.com/in/axel-leiva-treminio/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
                <span className="sr-only">LinkedIn profile</span>
              </a>

              <a href="https://github.com/ajleiva/" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} className="logo" alt="GitHub logo" />
                <span className="sr-only">GitHub profile</span>
              </a>
            </div>
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
