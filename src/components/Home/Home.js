import React from 'react';
import "./Home.css"
import pic from "../../food.jfif"
import useLoadReviews from '../../hooks/fakeDataLoad';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    let [reviews, setReviews] = useLoadReviews();
    // let newReviews = reviews.slice(0, 2);
    // setReviews(newReviews);
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
                {
                    reviews.slice(0, 3).map(rvs =>
                        <div className='review-head'>
                            <div className='pic-name'>
                                <img src={rvs.picture} alt="pic is not found" />
                                <h2>{rvs.name}</h2>
                            </div>
                            <div>
                                <p>Comments: <br />{rvs.reviews}</p>
                                <p>Ratings:{rvs.ratings}<FontAwesomeIcon icon={faStar} /></p>

                            </div>

                        </div>
                    )
                }
                <Link to="/reviews"><button className='review-btn'>See All Reviews</button></Link>

            </div>
        </div>
    );
};

export default Home;