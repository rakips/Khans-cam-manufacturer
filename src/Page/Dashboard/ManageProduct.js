import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {

    //modal
    const [deletingProduct, setDeletingProduct] = useState('');

    //react query 
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://safe-fjord-32249.herokuapp.com/product', {
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    // console.log(deletingProduct)
    return (
        <div className='container text-center  pt-4'>


            <hr />
            <h2 className='text-5xl mb-4 text-center mt-3'>Manage Products</h2>

            <h2 className="text-2xl">Total Products is: {products.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead className='font-semibold'>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Minimum quantity
                                <hr className='bg-dark !container' /><br />
                                Available quantity </th>
                            <th>Product Price $</th>
                            <th>Action</th>
                            <th>Supplier Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._key}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            > </ProductRow>)
                        }
                    </tbody>

                </table>
            </div>
            {deletingProduct && <DeleteConfirmModal
                key={deletingProduct?._id}
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingDoctor={setDeletingProduct}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProduct;