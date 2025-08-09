import React from 'react';
import "./css/footer.css";
const Footer = () => {
  return (
    <div id='Footer'>
      <div className="left">
        <div className="time-info">

        <h4>Opening Hours</h4>
        <p>Wednesday to Monday</p>
        <div className="timings">
          <div>12:00 - 14:30</div>
          <div>17:00 - 22:30</div>
        </div>
        <p>Tudesday Closed</p>
        </div>
        <div className="contact-details">
          <div className="phone-number">
            <span><img src="./telephone.png" alt="" /></span>
            <span className="number">(+32)016 20 05 22</span>
            <div className="extra-info">During Opening Hours</div>
          </div>
          <div className="mail-id">
            <span>
              <img src="./mail.png" alt="" />
            </span>
            <span className="mail">
              <a href="mailto:holycowleuven@gmail.com" className='links'>holycowleuven@gmail.com</a>

            </span>
            <div className="extra-info">
              Always!-24/7
            </div>
          </div>
        </div>
      </div>
      <div className="mid">
        <div className='logo-container'>

        <img src="./map.png" alt="" />
        </div>
        <div className="follow-credential">
          <div className='attributes'>Follow Us</div>

          <div className='follow-links'>
            <span>
              <img src="/facebook.png" alt="" />
            </span>
            <span>
              <img src="/instagram.png" alt="" />
            </span>
            <span>
              <img src="/trivago.png" alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="right">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.5427961790597!2d4.698015011609142!3d50.87666347155859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c160d872f3b16d%3A0x620185fef3a5c3eb!2sNew%20Holy%20Cow!5e0!3m2!1sen!2snp!4v1754713313352!5m2!1sen!2snp" width="400" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
      </div>
    </div>
  )
}

export default Footer