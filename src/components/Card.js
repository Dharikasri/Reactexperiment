import React from 'react';
import '../Styles/Card.css'; 

const cardStyle = {
  margin: '20px', 
};

const Card = () => {
  return (
    <div className="card" style={cardStyle}>
      <div className="bordered-box">
        <img src="/bluetooth.jpg" alt="Bluetooth" />
        <div className="text">
          <h2>Bluetooth Headphone</h2>
        </div>
        <div className="rating-and-add">
          <div className="star-rating">
            <img src="/star.png" alt="Star" />
            <span>4.5</span>
          </div>
          <div className="add">ADD</div>
        </div>
        <div className="bottom-bar">
          <span className="price">Rs. 3,000.00</span>
          <div className="buy">BUY</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
