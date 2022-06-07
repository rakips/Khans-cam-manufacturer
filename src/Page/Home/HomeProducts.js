import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Products/Product/Product';

const HomeProducts = () => {
    const [products, setProducts] = useProducts()

    return (
        <section className='mt-8 mb-8'>
            <h2 className='text-5xl text-center text-primary mt-10 font-semibold mb-8'> Buy Best for Your Camera</h2>

            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 gap-4'>
                {
                    products.slice(0, 3).map(product => <Product
                        key={product._id}
                        product={product}

                    ></Product>)
                }

            </div>
        </section>
    );
};

export default HomeProducts;