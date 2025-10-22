import React, { useState } from 'react';
import { FaEyeSlash, FaGithub, FaRegEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoIosPersonAdd } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router';

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div class="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center p-4">
            <div class="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                <div class="md:max-w-md w-full px-4 py-4">
                    <form>
                        <div class="mb-12">
                            <h1 class="text-slate-900 text-3xl font-bold">Sign Up</h1>
                            <p class="text-[15px] mt-6 text-slate-600">Already have an account <Link to="/login" class="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">Login</Link></p>
                        </div>

                        <div>
                            <label class="text-slate-900 text-[13px] font-medium block mb-2">Name</label>
                            <div class="relative flex items-center">
                                <input name="email" type="text" required class="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter name" />
                                <IoIosPersonAdd size={24} class="absolute right-2 cursor-pointer text-gray-400" />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <label class="text-slate-900 text-[13px] font-medium block mb-2">Email</label>
                            <div class="relative flex items-center">
                                <input name="email" type="text" required class="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />
                                <MdEmail size={24} class="absolute right-2 cursor-pointer text-gray-400" />
                            </div>
                        </div>
                        <div class="mt-8">
                            <label class="text-slate-900 text-[13px] font-medium block mb-2">Password</label>
                            <div class="relative flex items-center">
                                <input name="password" type={showPassword ? "text" : "password"} required class="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
                                {
                                    showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} size={24} class="absolute right-2 cursor-pointer text-gray-400" /> : <FaRegEye onClick={() => setShowPassword(!showPassword)} size={24} class="absolute right-2 cursor-pointer text-gray-400" />
                                }
                                
                                
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-4 mt-8">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded-sm" />
                                <label for="remember-me" class="ml-3 block text-sm text-slate-900">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div class="mt-12">
                            <button type="button" class="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                Sign Up
                            </button>
                        </div>

                        <div class="my-6 flex items-center gap-4">
                            <hr class="w-full border-slate-300" />
                            <p class="text-sm text-slate-900 text-center">or</p>
                            <hr class="w-full border-slate-300" />
                        </div>

                        <div class="space-x-8 flex justify-center">
                            <button type="button"
                                class="border-0 outline-0 cursor-pointer">
                                <FcGoogle size={36} />
                            </button>
                            <button type="button"
                                class="border-0 outline-0 cursor-pointer">
                                <FaGithub size={36} />
                            </button>
                            <button type="button"
                                class="border-0 outline-0 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 inline" fill="#007bff" viewBox="0 0 167.657 167.657">
                                    <path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z" data-original="#010002"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div class="w-full h-full flex items-center bg-[#000842] rounded-xl p-8">
                    <img src="https://readymadeui.com/signin-image.webp" class="w-full aspect-[12/12] object-contain" alt="login-image" />
                </div>
            </div>
        </div>
    );
};

export default Registration;