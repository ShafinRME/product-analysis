import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import useLoadReviews from '../../hooks/fakeDataLoad';
import "./Reviews.css"

const Reviews = () => {
    let [reviews, setReviews] = useLoadReviews();

    return (
        <div className='reviews-all'>
            {
                reviews.map(rv =>
                    <div className='review-head'>
                        <div className='pic-name'>
                            <img src={rv.picture} alt="pic is not found" />
                            <h4>{rv.name}</h4>
                        </div>
                        <div>
                            <p> <span className='comments'>Comments:</span>  <br />{rv.reviews}</p>
                            <p className='ratings-head' ><span className='ratings'>Ratings: </span> <span className='ratings-star'>{rv.ratings} <FontAwesomeIcon icon={faStar} /></span>  </p>

                        </div>

                    </div>

                )
            }


        </div>
    );
};

export default Reviews;