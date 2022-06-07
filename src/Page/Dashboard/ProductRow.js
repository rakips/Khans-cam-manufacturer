import React from 'react';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    // const { name, img } = product;

    const { _id, name, img, details, minimumQnt, availableQnt, unitPrice, email } = product;

    const availableQuality = <span className='font-semibold'>{availableQnt}</span>
    const minimumQuality = <span className='font-semibold'>{minimumQnt}</span>



    return (
        <tr>
            <th>{index + 1}</th>
            <td> <div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>
                <span title={name}> {name.slice(0, 30)}</span>
            </td>
            <td>
                <span className=" text-md font-bold text-green-900 ">Minimum: </span>{minimumQuality}
                <hr />
                <span className=" text-md font-bold text-green-900 ">Available: </span>{availableQuality}
            </td>

            <td>{unitPrice} $</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-error btn-xs">Delete</label>
            </td>
            <td>{email}</td>
        </tr>
    );
};

export default ProductRow;