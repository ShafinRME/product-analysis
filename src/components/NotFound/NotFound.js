import React from 'react';
import "./NotFound.css"
import image from "../../404.jpg"

const NotFound = () => {
    return (
        <div>
            <h1 className='dude'>...Hey dude...</h1>
            <h1 className='sorry'>............Sorrryyyy.............</h1>
            <h4 className='nothing'>Here is nothing for you without this photo.</h4>
            <div>
                <img className='pic' src={image} alt="Pictures is not found" />
            </div>
        </div>
    );
};

export default NotFound;