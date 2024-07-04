import React from 'react';
import '../Styles/shape.css'; 

const shapeStyle = {
  margin: '20px', 
};

const Square = () => (
  <div className="square" style={shapeStyle}></div>
);

const Circle = () => (
  <div className="circle" style={shapeStyle}></div>
);

const Rectangle = () => (
  <div className="rectangle" style={shapeStyle}></div>
);

const Triangle = () => (
  <div className="triangle" style={shapeStyle}></div>
);

const TriangleRight = () => (
  <div className="triangle-right" style={shapeStyle}></div>
);

const TriangleSkewed = () => (
  <div className="triangle-skewed" style={shapeStyle}></div>
);

const Trapezoid = () => (
  <div className="trapezoid" style={shapeStyle}></div>
);

const App = () => (
  <div>
    <Square />
    <Circle />
    <Rectangle />
    <Triangle />
    <TriangleRight />
    <TriangleSkewed />
    <Trapezoid />
  </div>
);

export { App, Square, Circle, Rectangle, Triangle, TriangleRight, TriangleSkewed, Trapezoid };
