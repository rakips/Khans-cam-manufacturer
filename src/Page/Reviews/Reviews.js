import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();


    return (
        <div>
            <h1 className='text-5xl text-center text-orange-600 pt-4 mt-10 font-semibold mb-8'> Our happy Customer Reviews</h1>
            <hr className=' bg-gradient-to-tr' />

            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 gap-4 my-4 pb-14'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>



        </div>
    );
};

export default Reviews;