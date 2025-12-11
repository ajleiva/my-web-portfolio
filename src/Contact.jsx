import linkedInLogo from './assets/LinkedIn_logo_initials.png'
import './Contact.css'

function Contact() {
  return (
    <section id='contact'>
      <h2>Contact</h2>

      <div className="contact-container">
        <ul className="contact-list">
          <li className="contact-item">
            <span className="contact-icon" aria-hidden>✉️</span>
            <a className="contact-link" href="mailto:ajleiva4@gmail.com">ajleiva4@gmail.com</a>
          </li>

          <li className="contact-item">
            <a className="contact-link" href="https://www.linkedin.com/in/axel-leiva-treminio/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
              <span className="sr-only">LinkedIn profile</span>
            </a>
          </li>

          <li className="contact-item">
            <span className="contact-icon" aria-hidden>📞</span>
            <a className="contact-link" href="tel:+15195742419">(519) 574-2419</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
