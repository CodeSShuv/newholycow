import React from 'react'
import "./css/home.css";
import ItemCard from '../components/ItemCard';
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
    <div className='dining'>
    <div className="dinig-info">
    Dining
    </div>
    <div className='dining-cards-container'>
    {/* ------ */}
    <div  className='dinig-cards'>
      <div className='img-container'>
        <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/69c467744f7f1694331768d6d611bfc77582e36a-906x972.jpg?w=180&auto=format&dpr=2" alt="" />
      </div>
      <div>
        <h4>Chefs</h4>
        <p> The chef cook with more than 15 years of experience in Indian kitchen. </p>
      </div>
    </div>
   
    {/* ------- */}
    <div  className='dinig-cards'>
      <div className='img-container'>
        <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/69c467744f7f1694331768d6d611bfc77582e36a-906x972.jpg?w=180&auto=format&dpr=2" alt="" />
      </div>
      <div>
        <h4>Chefs</h4>
        <p> The chef cook with more than 15 years of experience in Indian kitchen. </p>
      </div>
    </div>
    
    {/* ------- */}
    <div  className='dinig-cards'>
      <div className='img-container'>
        <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/69c467744f7f1694331768d6d611bfc77582e36a-906x972.jpg?w=180&auto=format&dpr=2" alt="" />
      </div>
      <div>
        <h4>Chefs</h4>
        <p> The chef cook with more than 15 years of experience in Indian kitchen. </p>
      </div>
    </div>
    
    {/* ------- */}
     </div>
    </div>
    <div className="popular">
      <h3>Popular</h3>
      <div className="card-slider">
        <ItemCard/>
      </div>
    </div>
   </div>
   </>
  );
}

export default Home;