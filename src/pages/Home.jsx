import React from 'react'
import "./css/home.css";
import Card from '../components/Card';
const Home = () => {
  return (
   <>
   <div id="home">
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-section-content">

      <div className='landing-quote'>
        “Where every flavor tells a story.”
      </div>
      <div className="link-container">

      </div>
      </div>
    </div>
  
    <div className="intro">
<div className="text-content">
        <h2>Welcome</h2>

  <p>Restaurant  New Holycow is one of the best Indian restaurant in Leuven. Situated in  the heart of the historic city Leuven</p>

 <a href="/about-us">Learn more</a>
</div>
<div className="image-content">
  <div>

  <img src="/welcome.jpg" alt="" />
  </div>
  <div>

  <img src="/outdoor.jpg" alt="" />
  </div>
  {/* <div>

  <img src="/welcome.jpg" alt="" />
  </div> */}
</div>

    </div>
    <div className="popular">
      <h3>Popular</h3>
      <div className="card-slider">
        <Card/>
      </div>
    </div>
   </div>
   </>
  );
}

export default Home;