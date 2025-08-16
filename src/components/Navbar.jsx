

import "./css/navbar.css";
const Navbar = () => {

  return (
    <nav>
      <div className="logo-container">
        <img src="./map.png" alt="new holy cow logo" className='logo-img' />

      </div>
      <ul className="navigations">
        <li><a className='links nav-link' href="#">Home</a></li>
        <li><a className='links nav-link' href="#">Contact</a></li>
        <li><a className='links nav-link' href="#">Menu</a></li>
        <li><a className='links nav-link' href="#">Photos</a></li>
        <li><a className='links nav-link' href="#">Testimonials</a></li>
      </ul>
      <div className="nav-btn-container">
        <button className='btn' id='seat-book-btn'>Book a seat now </button>

        <button className='btn' id='ordernow-btn'>Order now </button>
      </div>
      
          <div className="ham-burger-menu hide">
            <button className='btn'>
             <img src="./more.png" alt="" />
            </button>
          </div>
       
    </nav>
  )
}

export default Navbar