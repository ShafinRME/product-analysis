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
                    <a href="https://food-mania-assignment-9.netlify.app/"> <button className='button-header'>Live Demo</button></a>
                </div>
                <div>
                    <img className='image' src={pic} alt="Img is not found" />
                </div>
            </div>

            <h1 className='customer-review-text'>Customer Reviews(3)</h1>
            <div className='reviews-all1'>
                {
                    reviews.slice(0, 3).map(rvs =>
                        <div className='review-head1'>
                            <div className='pic-name1'>
                                <img src={rvs.picture} alt="pic is not found" />
                                <h4>{rvs.name}</h4>
                            </div>
                            <div>
                                <p> <span className='comments'>Comments:</span>  <br />{rvs.reviews}</p>
                                <p className='ratings-head' ><span className='ratings'>Ratings: </span> <span className='ratings-star'>{rvs.ratings} <FontAwesomeIcon icon={faStar} /></span>  </p>

                            </div>

                        </div>
                    )
                }


            </div>
            <Link to="/reviews"><button className='review-btn'>See All Reviews</button></Link>
        </div>
    );
};

export default Home;