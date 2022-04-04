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
                            <h2>{rv.name}</h2>
                        </div>
                        <div>
                            <p>Comments: <br />{rv.reviews}</p>
                            <p>Ratings:{rv.ratings}<FontAwesomeIcon icon={faStar} /></p>

                        </div>

                    </div>

                )
            }


        </div>
    );
};

export default Reviews;