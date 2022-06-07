import React from 'react';

const Review = ({ review }) => {
    // console.log(review)
    const { _id, name, picture, comment, ratting, email } = review;




    return (
        <div>
            <div className="hero bg-red-50 rounded-3xl shadow-xl">
                <div className="hero-content">
                    <div className="avatar flex flex-col">
                        <div className="w-20 mask mask-squircle">
                            <img alt={name} src={picture} />
                        </div>

                    </div>
                    <div>
                        <h4 className='font-semibold text-2xl'>{name}</h4>
                        <p className=" text-justify" title={comment}>
                            {
                                comment.slice(0, 150)
                            }
                        </p>

                        <div className="rating rating-md">
                            <p className='font-bold text-orange-500 pr-3'>Ratting: </p>
                            <p className=' font-bold pr-2'> {ratting}</p>
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-red-400" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;