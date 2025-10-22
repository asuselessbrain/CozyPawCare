import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = e.target;

        const email = formData.email.value;
        const password = formData.password.value;
        const termAndCondition = formData.termAndCondition.checked;

        console.log(email,password, termAndCondition)
    }
    return (
        <div className="lg:min-h-[calc(100vh-120px)] flex fle-col items-center justify-center p-6">
            <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold text-slate-900 !leading-tight">
                        Seamless Login for Exclusive Access
                    </h1>
                    <p className="text-[15px] mt-6 text-slate-600 leading-relaxed">
                        Log in to stay connected with <span className="font-semibold text-green-600">CozyPawCare</span> —
                        your winter companion for keeping pets warm, happy, and healthy.
                    </p>
                    <p className="text-[15px] mt-6 lg:mt-12 text-slate-600">Don't have an account <Link to="/registration" className="text-blue-600 font-medium hover:underline ml-1">Register here</Link></p>
                </div>

                <form className="max-w-md lg:ml-auto w-full" onSubmit={handleSubmit}>
                    <h2 className="text-slate-900 text-3xl font-semibold mb-8">
                        Sign in
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <label className='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
                            <input name="email" type="email" required className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent" placeholder="Enter Email" />
                        </div>
                        <div>
                            <label className='text-sm text-slate-900 font-medium mb-2 block'>Password</label>
                            <input name="password" type="password" required className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent" placeholder="Enter Password" />
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center">
                                <input id="remember-me" name="termAndCondition" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"  required />
                                <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                                    Accept Term and Condition
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="jajvascript:void(0);" className="text-blue-600 hover:text-blue-500 font-medium">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                            Log in
                        </button>
                    </div>

                    <div className="my-6 flex items-center gap-4">
                        <hr className="w-full border-slate-300" />
                        <p className="text-sm text-slate-900 text-center">or</p>
                        <hr className="w-full border-slate-300" />
                    </div>

                    <div className="space-x-6 flex justify-center">
                        <button type="button"
                            className="border-0 outline-0 cursor-pointer">
                            <FcGoogle size={36} />
                        </button>
                        <button type="button"
                            className="border-0 outline-0 cursor-pointer">
                            <FaGithub size={36} />
                        </button>
                        <button type="button"
                            className="border-0 outline-0 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 22.773 22.773">
                                <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" data-original="#000000"></path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;