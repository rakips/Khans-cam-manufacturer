import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Products/Product/Product';


const Products = () => {
    const [products, setProducts] = useProducts()

    return (
        <div>
            <h2 className='text-5xl text-center text-primary mt-10 font-semibold mb-8'>Choose Your Products</h2>
            <hr />


            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 mb-14 gap-4'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}

                    ></Product>)
                }

            </div>

        </div>
    );
};

export default Products;