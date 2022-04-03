import React from 'react';
import "./Home.css"
import pic from "../../food.jfif"

const Home = () => {
    return (
        <div>
            <h2 className='website-name'>Food Mania</h2>
            <div className='home-doc'>
                <div>
                    <h2 className='headline1'>Choose Your Best Food</h2>
                    <h2 className='headline2'>Keep Your Health Good</h2>
                    <p className='texts'>Hi,Welcome to Our Food Mania Official Website.Here you can explore many types of Food around the World.Every Food Item is 100% Good for Human Body.You can buy them from our website.Just click the Below Link</p>
                    <button className='button-header'>Live Demo</button>
                </div>
                <div>
                    <img className='image' src={pic} alt="Img is not found" />
                </div>
            </div>
            <div>
                <h1>Customer Reviews(3)</h1>
                <button className='review-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;