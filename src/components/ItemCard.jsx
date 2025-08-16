import "./css/card.css";

const ItemCard = () => {
  return (
    <div id="card">
      <div className="card-overlay-btn">
        <button className="btn">Add to Cart</button>
      </div>
      <div className="card-img-container">
        <img src="" alt="" />
      </div>
      <div className="card-item-name">
        <p>Chicken Saag</p>
      </div>
    </div>
  )
}

export default ItemCard