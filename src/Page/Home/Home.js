import React from 'react';
import Banner from './Banner/Banner';
import HomeProducts from './HomeProducts';
import HomeReviews from './HomeReviews';
import BusinessSummary from './BusinessSummary';
import AddComment from './AddComment';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Banner />

            <HomeProducts></HomeProducts>

            <div className='flex justify-end'>
                <button className='btn btn-link hover:btn-outline btn-info font-bold text-2xl shadow-xl '><Link to='/products'>See More products</Link></button>

            </div>

            <BusinessSummary></BusinessSummary>

            <HomeReviews></HomeReviews>

            <AddComment></AddComment>

        </div>
    );
};

export default Home;