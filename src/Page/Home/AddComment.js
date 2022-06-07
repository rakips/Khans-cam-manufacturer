import React from 'react';
import { useForm } from 'react-hook-form';

const AddComment = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Tell About Us!</h1>
                        <p className="py-6">Please give Your kind feedback. WE always respect your feedback. We are the best Manufacturer & we also make best Products  .</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" />
                                <br />
                                <input {...register("comment")} type="text" placeholder="Your comment" className="input input-bordered" />
                                <br />
                                <input {...register("email")} type="text" placeholder="Email" className="input input-bordered" />
                                <br />
                                <input className=' btn btn-accent hover:btn-ghost' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddComment;