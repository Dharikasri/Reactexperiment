import React from 'react';

const Range = () => {
  return (
    <div>
      <h1>Display Range</h1>
      
      <label htmlFor="range1">Select Range between 1 to 10:</label>
      <br />
      <input type="range" id="range1" name="range1" min="1" max="10" defaultValue="2" />
      <br /><br />
      
      <label htmlFor="range2">Loading:</label>
      <br />
      <input type="range" id="range2" name="range2" min="1" max="10" defaultValue="8" />
    </div>
  );
}

export default Range;
