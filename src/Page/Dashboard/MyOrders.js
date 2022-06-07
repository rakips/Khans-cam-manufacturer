import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';



const MyOrders = () => {
    const [order, setOrder] = useState([]);

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://safe-fjord-32249.herokuapp.com/order?product=${user.email}`, {
                method: 'GET',
                headers: {
                    //send jwt token
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        // for remove jwt
                        localStorage.removeItem('accessToken');
                        //when status is 401 & 403
                        navigate('/');

                    }
                    return res.json()
                })
                .then(data => {
                    setOrder(data)
                });
        }
    }, [user])

    return (
        <div>
            <h2 className='font-semibold p-5 '>My Order : {order.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Minimum quantity
                                <hr className='bg-dark !container' /><br />
                                Available quantity </th>
                            <th>Product Price $</th>


                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}


                        {
                            order.map((a, index) => <tr
                                key={a._id}
                            >
                                {console.log(a)}

                                <th>{index + 1}</th>
                                <td> <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={a.img} alt={a.name} />
                                    </div>
                                </div></td>
                                <td>
                                    <span title={a.name}> {a.name.slice(0, 30)}</span>
                                </td>
                                <td>
                                    <span className=" text-md font-bold text-green-900 ">Minimum: </span>{a.minimumQnt}
                                    <hr />
                                    <span className=" text-md font-bold text-green-900 ">Available: </span>{a.availableQnt}
                                </td>

                                <td>{a.unitPrice} $</td>


                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MyOrders;