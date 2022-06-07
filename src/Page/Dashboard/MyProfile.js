import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    console.log(user);
    return (
        <div className='lg:px-18'>
            <hr />
            <h2 className='text-3xl mt-5 mb-4 text-center mt-3'>User Profile</h2>
            <hr />
            <div class="card card-side bg-base-100 p-5 shadow-xl">
                <figure>
                    <div class=" avatar online w-28 placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div> </figure>
                <div class="card-body font-semibold">
                    <h2 class="card-title">{user?.displayName}</h2>
                    <p>Email: {user?.email}.</p>
                    <p>Phone Number: {user?.phoneNumber}.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;