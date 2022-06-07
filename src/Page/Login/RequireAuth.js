import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
// import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    // for user and loading
    const [user, loading] = useAuthState(auth);

    //for location
    const location = useLocation();

    //disable for assignment 12
    /* 
    // for send email verification for confirm user--
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
     */

    // loading 
    // if (loading || sending) {
    if (loading) {
        return <Loading></Loading>
    }


    // have not any use
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    //disable for assignment 12
    /* 
        const imgUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Antu_dialog-warning.svg/512px-Antu_dialog-warning.svg.png?20160706101740`;
    
        // if user no verify email
        if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
            return <div className='p-2 text-center require-auth-style mt-5 mb-5'>
                <img src={imgUrl} alt="" />
                <h3 className=' text-danger mb-2'> Your Email is Not Verified....!</h3>
                <h5 className=' text-success mb-3'> Please Verify Your Email Address First </h5>
    
                <button
                    className='btn btn-primary mb-5 verify-btn'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Verify Email Send');
                    }}
                >
                    Sent Verification email Again
                </button>
    
    
            </div>
        }
     */

    return children;
};

export default RequireAuth;