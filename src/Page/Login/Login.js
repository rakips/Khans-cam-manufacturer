import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js';
//react hook from
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken.js';

const Login = () => {
    //google signing
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    //react hook from
    const { register, formState: { errors }, handleSubmit } = useForm();

    // email password login
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // jwt token
    const [token] = useToken(user || gUser);

    // for reset password
    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');

    // for error
    let signInError;

    //for redirect location page
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            // console.log(user || gUser);
        }
    }, [token, from, navigate])

    //ifLoading 
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-600'><small>{error?.message || gError?.message}</small></p>
    }



    //handle submit form
    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    // for password send
    const handlePassReset = async (e) => {
        const email = emailRef.current.value;
        // console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send Reset Link');
        }
        else {
            toast('Please enter Your Email')
        }
    }

    return (
        <div className='flex justify-center items-center pb-14'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <hr />

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* email field ------------------------------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>

                            {/* email field ------------------------------- */}
                            <input
                                ref={emailRef}
                                type="email"
                                placeholder="Your Email Address"
                                className="input input-bordered w-full max-w-xs"

                                // verification 
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        // email validating regular expression
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email Address'
                                    }
                                })}
                            />
                            <label className="label">
                                {/* if get error */}
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
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

                                // verification 
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        // Password validating regular expression
                                        value: 6,
                                        message: 'Password Must Be 6 character or larger'
                                    }
                                })}
                            />
                            <label className="label">
                                {/* if get error */}
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>

                        {/* form hook ------------ */}

                        {/* error message show  */}
                        {signInError}

                        {/* submit btn ------------- */}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>

                    {/* reset password  */}
                    <p onClick={handlePassReset} style={{ margin: '3px' }} className='btn btn-xs text-sm glass text-small'>
                        <span className='text-orange-500'> Forgat Password  </span>
                    </p>

                    {/* link registration  */}
                    <p><small>New to Pixel Camera's <Link className='text-primary' to="/registration">Create New Account</Link></small></p>

                    {/* google login  */}
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;