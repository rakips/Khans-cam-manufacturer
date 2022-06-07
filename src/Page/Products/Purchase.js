import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetails from '../../hooks/useProductDetails';
import { toast } from 'react-toastify';

const Purchase = () => {

    const { itemId } = useParams();
    const [product] = useProductDetails(itemId)
    const { _id, name, img, details, minimumQnt, availableQnt, unitPrice, email } = product;

    const [quantity, setQuantity] = useState(0);

    const [user] = useAuthState(auth);
    let navigate = useNavigate();
    // console.log(user)
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);


    // console.log(product);
    let quantityError;
    let buttonDisable;

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
        // const minQnt = parseInt(minimumQnt);
    }


    // restock item quantity------------------
    const handleOrder = event => {
        const bEmail = user.email;
        // console.log(bEmail);
        const order = { ...product, bEmail }

        const id = _id;
        // const currentUser = order;
        // console.log(order);
        // console.log(currentUser);

        /*        fetch(`https://safe-fjord-32249.herokuapp.com/order/${id}`, {
                   method: 'POST',
                   headers: {
                       'content-type': 'application/json'
                   },
                   body: JSON.stringify(currentUser)
               })
                   .then(res => res.json())
                   .then(data => {
                       console.log('data inside use token', data);
                   })
        */
        // -------------------
        const url = `https://safe-fjord-32249.herokuapp.com/order`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                toast('Product Add successfully');
                navigate('/home');
            })

    }



    if (quantity >= minimumQnt && quantity <= availableQnt) {

        buttonDisable = <button onClick={handleOrder} className="btn btn-primary w-3/5">Purchase</button>
        // console.log('ok');
    }
    else {
        buttonDisable = <button disabled className="btn btn-primary w-3/5">Purchase</button>

        if (quantity >= minimumQnt) {
            quantityError = <span className='text-red-700 p-2 pb-5 font-bold'> Please input Minimum Quantity or Larger then Minimum Quantity </span>
        }
        if (quantity >= availableQnt) {
            quantityError = <span className='text-red-700 p-2 pb-5 font-bold'> Please input Available Quantity or Low then Available Quantity </span>
        }
        else {
            quantityError = <span className='text-red-700 p-2 pb-5 font-bold'> Please input Any Quantity of Product</span>
        }


        // console.log('not ok');
    }



    // console.log(typeof (minimumQnt));

    return (
        <div>
            <hr />
            <h2 className='text-5xl text-center text-orange-500 mt-5 font-semibold mb-8'>Purchase Your Product</h2>

            <div>
                <div className="hero rounded-md bg-base-200 py-5 lg:px-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} alt={name} className="max-w-sm  sm:w-80% !container rounded-lg shadow-2xl" />
                        <div className=''>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className='left-text text-xl text-justify py-6' title={details}>
                                <span className='font-bold text-orange-600 pb-3'>Details: </span>
                                <span>{details}</span>
                            </p>

                            <p className='left-text text-xl font-bold pb-2' >
                                <span className='text-orange-600 pb-3'  >Price: </span>
                                {unitPrice} $ <span className=' text-green-700 font-semibold text-sm'>(par pice)</span></p>

                            <p className='left-text text-xl font-bold pb-2' >
                                <span className=' text-orange-600 pb-3' >Available Quantity: </span> {availableQnt} pice</p>

                            <p className='left-text text-xl font-bold pb-3' >
                                <span className=' text-orange-600 pb-3' >Minimum Order Quantity: </span>
                                {minimumQnt} pice</p>

                            <div className="pb-4">
                                <label className="input-group-lg">
                                    <span className='font-bold pr-3'>User Email :</span>
                                    <input type="text" placeholder="email" value={user?.email} className="text-xl bg-slate-200 input input-bordered w-full max-w-xs" />
                                </label>
                            </div>

                            <div className="pb-4">
                                <label className="input-group-lg">
                                    <span className='font-bold pr-3'>Purchase Qnt :</span>
                                    <input type="number" onChange={handleQuantity} name='purchaseQnt' placeholder={`Purchase Quantity ${minimumQnt}`} className="text-xl bg-slate-200 input input-bordered w-full max-w-xs" />
                                </label>

                            </div>
                            <p className='pb-2'>{quantityError}</p>

                            {buttonDisable}
                        </div>
                    </div>
                </div>
            </div>


            {/*  
                      


                <div className="card-actions justify-center pt-6 ">
                    <button onClick={() => handleBuyItem(_id)} className="btn hover:btn-info btn-primary">
                        Buy Now </button>
                </div>
            </div>
            */}

        </div >
    );
};

export default Purchase;