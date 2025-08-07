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
        <img src="./map.png" alt="" />
      </div>
      <div className="right">
        
      </div>
    </div>
  )
}

export default Footer