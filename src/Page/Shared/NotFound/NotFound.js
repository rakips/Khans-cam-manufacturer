import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-column  justify-center align-center pt-5 not-found'>
                <h1 className='e-massage' >Oops!</h1>
                <h1 className='t-massage' >Not Found</h1>
                <img src="https://i.ibb.co/Df8YMPF/404-error-lost-in-space.gif" alt="" />

            </div>
        </div>
    );
};

export default NotFound;