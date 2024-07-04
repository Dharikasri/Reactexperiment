import React from 'react';
import '../Styles/Button.css'; 

const ButtonStyle = {
    margin: '20px', 
};

const Button1 = () => {
    return (
        <div className="container">
            <button className="button" style={ButtonStyle}>OK</button>
            <button className="submit" style={ButtonStyle}>SUBMIT</button>
            <button className="cancel" style={ButtonStyle}>CANCEL</button>
            <button className="add" style={ButtonStyle}>ADD</button>
        </div>
    );
};

export default Button1;
