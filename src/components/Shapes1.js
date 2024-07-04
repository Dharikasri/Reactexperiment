import React from 'react';
import '../Styles/shape1.css'; 

const shapeStyle = {
    margin: '20px', 
  };
  

const Shapes = () => {
    return (
        <div className="container">
            <div className="square"style={shapeStyle}></div>
            <div className="circle"style={shapeStyle}></div>
            <div className="rectangle"style={shapeStyle}></div>
        </div>
    );
};

export default Shapes;
