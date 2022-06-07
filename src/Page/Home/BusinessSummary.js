import React from 'react';
import bg from '../../Image/businessbg.png'
import './BusinessSummary.css'

const BusinessSummary = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="mt-12">

            <div className="hero">
                <div className="hero-content text-center">
                    <div className=" max-w-2xl">
                        <h1 className=" text-4xl font-bold">MILLIONS OR CUSTOMER TRUST US</h1>
                        <p className="py-6 text-2xl text-orange-500 font-bold">Try to understand user Expectation.</p>

                    </div>

                </div>
            </div>

            {/* -------------------------------------- */}
            <div>
                <div className="stats stats-vertical justify-center flex lg:stats-horizontal info shadow">

                    <div className="stat bg-transparent place-items-center ">
                        <div className="stat-title font-semibold">We serve </div>
                        <div className="stat-value">3000K</div>
                        <div className="stat-desc text-success font-semibold">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat  place-items-center ">
                        <div className="stat-title font-semibold">New Customers</div>
                        <div className="stat-value">102k</div>
                        <div className="stat-desc text-success font-semibold">↗︎ Join by online</div>
                    </div>

                    <div className="stat bg-transparent place-items-center">
                        <div className="stat-title font-semibold">Services</div>
                        <div className="stat-value">200 Countries</div>
                        <div className="stat-desc text-success font-semibold">Successfully delivery </div>
                    </div>

                    <div className="stat bg-transparent place-items-center">
                        <div className="stat-title font-semibold">Review</div>
                        <div className="stat-value">100M</div>
                        <div className="stat-desc text-success font-semibold">Happy Customers </div>
                    </div>
                </div>

                <div className=' justify-center flex mt-10'>
                    <div className="card w-4/5 flex  shadow-2xl">
                        <div className="card-body ">

                            <h2 className="card-title text-info text-3xl">Have any question about us or get a products request?</h2>
                            <p className='text-2xl font-simebold'> Don't hesitate to contact us. </p>

                            <div className="card-actions justify-end">
                                <div>
                                    <button className="btn btn-accent">Request for Quota</button>
                                </div>
                                <div >
                                    <button className="btn btn-ghost btn-outline hover:btn-success">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default BusinessSummary;