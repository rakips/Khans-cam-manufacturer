import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, refetch, setDeletingDoctor: setDeletingProduct }) => {

    const { _id, name, img, details, minimumQnt, availableQnt, unitPrice, email } = deletingProduct;


    const handleDelete = (id) => {
        fetch(`https://safe-fjord-32249.herokuapp.com/product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete

                        <br /><span>{name}</span>!</h3>
                    <p className="py-4">Your selected Product was delete. If you change your Mind , then say
                        <span className='font-bold'> Cancel </span>. Thinking.......  </p>

                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs btn-error bg-zinc-900 text-yellow-50 hover:text-black">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;