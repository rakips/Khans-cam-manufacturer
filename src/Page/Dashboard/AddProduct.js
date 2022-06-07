import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddProduct = () => {


    const [user] = useAuthState(auth)

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = async (data) => {
        console.log(data);
        const url = `https://safe-fjord-32249.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Product Add successfully');
                reset();
            })
    };

    // const { _id, name, img, details, minimumQnt, availableQnt, unitPrice, email } = product;



    return (
        <div className=' w-full lg:p-5 flex justify-center lg:flex-col'>
            <h2 className='text-5xl mb-4 text-center mt-3'>Add a Product</h2>
            <hr style={{ color: 'goldenrod', border: '2px solid goldenrod' }} />

            <form className='flex flex-col mb-5' onSubmit={handleSubmit(onSubmit)}>

                <label className='text-lg p-3 font-semibold' htmlFor="name">Product Name</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='name' placeholder='Product Name' {...register("name", { required: true, maxLength: 30 })} />

                <label className='text-lg p-3 font-semibold' htmlFor="details">Product Details</label>
                <textarea className='input input-bordered input-primary w-full mb-4 ' id='details' placeholder='Product Details' {...register("details", { required: true })} />

                <label className='text-lg p-3 font-semibold' htmlFor="unitPrice">Product par Unit Price</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='unitPrice' placeholder=' Product Price $' type="number" {...register("unitPrice", { required: true })} />

                <label className='text-lg p-3 font-semibold' htmlFor="minimumQnt">Minimum quantity for Order</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='minimumQnt' type="number" placeholder='Minimum quantity for Order' {...register("minimumQnt", { required: true })} />

                <label className='text-lg p-3 font-semibold' htmlFor="availableQnt">Available quantity for Order</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='availableQnt' type="number" placeholder='Available quantity for Order' {...register("availableQnt", { required: true })} />

                <label className='text-lg p-3 font-semibold' htmlFor="email">Supplier Email</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='email' placeholder='Supplier Email' readOnly value={user.email} type="email" {...register("email", { required: true })} />

                <label className='text-lg p-3 font-semibold' htmlFor="img">Product Image</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='img' placeholder='Product Photo URL' type="Text" {...register("img", { required: true })} />

                <input className='btn  btn-info hover:btn-ghost w-1/2 mx-auto mt-2 mb-16' type='submit' value="Add Item" />

            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;