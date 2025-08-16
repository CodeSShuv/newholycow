import "./css/blockSearch.css";

const BlockSearch = () => {
  return (
    <div id='block-search'>
      <div className="block-search-inner-container">
        <div id="block-search-heading">
          Book Your Seat Online
        </div>
        <div className="sub">
          Get your guaranteed Accommodation Right Now!
        </div>
        <div className="block-search-calender-container">
          <div className="input-container">
            <label htmlFor="">Date:</label>
            <input type="date" name="" id="" />

          </div>
          <div className="time-containers">
            <label htmlFor="">Time:</label>
        <div className="input-container">
            <input type="time" name="" id="" />
          </div>
              <span>until:</span>
            <div className="input-container">
            <input type="time" name="" id="" />
          </div>

          </div>
  
          <div className="input-container">
            <button className="btn">Check Seat</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockSearch;