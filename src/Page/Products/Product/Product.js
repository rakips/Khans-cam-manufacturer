import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    // console.log(product)
    const { _id, name, img, details, minimumQnt, availableQnt, unitPrice, email } = product;

    let navigate = useNavigate();

    // for update stock page
    const handleBuyItem = (id) => {
        // console.log(id);
        navigate(`/purchase/${id}`);
    }


    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-center">
                <h2 className="justify-center card-title">{name}</h2>

                <p className='left-text' title={details}>
                    <span className='font-bold text-orange-600 pb-3'  >Details: </span>
                    {
                        details.slice(0, 100)
                    }
                </p>
                <p className='left-text' ><span className='font-bold text-orange-600 pb-3' >Available Quantity: </span> {availableQnt} pice</p>
                <p className='left-text' >
                    <span className='font-bold text-orange-600 pb-3'  >Minimum Order Quantity: </span>
                    {minimumQnt} pice</p>
                <p className='left-text' >
                    <span className='font-bold text-orange-600 pb-3'  >Price: </span>
                    {unitPrice} $ <span className=' text-green-700 font-semibold text-sm'>(par pice)</span></p>


                <div className="card-actions justify-center pt-6 ">
                    <button onClick={() => handleBuyItem(_id)} className="btn hover:btn-info btn-primary">
                        Buy Now </button>
                </div>
            </div>
        </div>
    );
};

export default Product;