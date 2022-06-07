import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className="text-5xl text-center text-orange-600 pt-4 font-semibold">Blogs Here</h2>


            {/* qus 1 */}

            <div className='p-5 mt-6 bg-slate-50'>
                <h2 className='lg:text-4xl md:text-3xl px-4 font-black pb-2'>
                    <span className='font-bold text-primary pr-3 underline'>Ous 1: </span>
                    <span>How will you improve the performance of a React Application?</span>
                </h2>
                <hr />
                <h3 className='p-4 mt-3 lg:text-2xl sm:text-xl'>
                    <span className='font-bold text-blue-500 pr-3 underline'>Ans 1: </span>
                    <span>
                        I improve the performance of a React Application flowing:
                        <ul className="list-disc lg:ml-16 p-3">
                            <li>Keeping component state local where necessary</li>
                            <li>Memoizing React components to prevent unnecessary re-renders</li>
                            <li>Code-splitting in React using dynamic import()</li>
                            <li>Windowing or list virtualization in React</li>
                            <li>Avoid Large loading images in React</li>
                        </ul>
                    </span>
                </h3>
            </div>


            {/* qus 2 */}

            <div className='p-5 mt-6 bg-slate-50'>
                <h2 className='lg:text-4xl md:text-3xl px-4 font-black pb-2'>
                    <span className='font-bold text-primary pr-3 underline'>Ous 1: </span>
                    <span> What are the different ways to manage a state in a React application?</span>
                </h2>
                <hr />
                <h3 className='p-4 mt-3 lg:text-2xl sm:text-xl'>
                    <span className='font-bold text-blue-500 pr-3 underline'>Ans 1: </span>
                    <span>
                        There are four main types of state you need to properly manage in your React apps:
                        1. Local state. <br />
                        2. Global state. <br />
                        3. Server state. <br />
                        4. URL state. <br />
                    </span>
                </h3>
            </div>


            {/* qus 3 */}

            <div className='p-5 mt-6 bg-slate-50'>
                <h2 className='lg:text-4xl md:text-3xl px-4 font-black pb-2'>
                    <span className='font-bold text-primary pr-3 underline'>Ous 1: </span>
                    <span>How does prototypical inheritance work?</span>
                </h2>
                <hr />
                <h3 className='p-4 mt-3 lg:text-2xl sm:text-xl'>
                    <span className='font-bold text-blue-500 pr-3 underline'>Ans 1: </span>
                    <span>
                        I improve the performance of a React Application flowing:
                        <ul className="list-disc lg:ml-16 p-3">
                            <li>Keeping component state local where necessary</li>
                            <li>Memoizing React components to prevent unnecessary re-renders</li>
                            <li>Code-splitting in React using dynamic import()</li>
                            <li>Windowing or list virtualization in React</li>
                            <li>Avoid Large loading images in React</li>
                        </ul>
                    </span>
                </h3>
            </div>

        </div>
    );
};

export default Blogs;