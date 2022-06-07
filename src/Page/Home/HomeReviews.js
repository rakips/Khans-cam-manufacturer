import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Reviews/Review';


const HomeReviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='mt-10 pt-5 '>
            <h1 className='text-5xl text-center text-orange-500 mt-10 font-semibold mb-8'> Our happy Customer Reviews</h1>
            <hr className=' bg-gradient-to-tr' />

            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 gap-5 my-4'>
                {
                    reviews.splice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>
            <div className='flex justify-end'>
                <button className='btn btn-link '><Link to='/review'>See More</Link></button>

            </div>
        </div>
    );
};

export default HomeReviews;