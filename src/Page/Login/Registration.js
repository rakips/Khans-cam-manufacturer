import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
//react hook from
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Registration = () => {
    //google signing
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    //react hook from
    const { register, formState: { errors }, handleSubmit } = useForm();

    // email password login
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // update profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // for JWT
    const [token] = useToken(user || gUser);

    // for navigation
    const navigate = useNavigate();

    let signInError;

    //ifLoading

    useEffect(() => {
        if (token) {
            // console.log(user || gUser);
            navigate('/home');
        }
    }, [token, navigate])

    if (loading || gLoading || updating) {

        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError.message}</small></p>
    }


    //handle submit form
    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // console.log("update done");
        // navigate('/home');
    }


    return (
        <div className='flex  justify-center items-center  pb-14'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Registration</h2>
                    <hr />

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* daisy ui ----------------- */}


                        {/* name field ------------------------------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>

                            {/* name field ------------------------------- */}
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs"

                                // Name verification 
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {/* if get error */}
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>

                        {/* email field ------------------------------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>

                            {/* email field ------------------------------- */}
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="input input-bordered w-full max-w-xs"

                                // email verification 
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        // email validating regular expression
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {/* if get error */}
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/* Password field ------------------------------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>

                            {/* Password field ------------------------------- */}
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"

                                // password verification 
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password Required'
                                    },
                                    minLength: {
                                        // Password validating regular expression
                                        value: 6,
                                        message: 'Password Must be 6 character or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {/* if get error */}
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>


                        {/* form hook ------------ */}

                        {/* error message show  */}
                        {signInError}

                        {/* submit btn ------------- */}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Registration" />
                    </form>
                    {/* link registration  */}
                    <p><small>Already have an Account <Link className='text-primary' to="/login">Please Login</Link></small></p>

                    {/* google login  */}
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >CONTINUE with GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;