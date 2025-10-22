import { use, useState } from 'react';
import { FaEyeSlash, FaGithub, FaRegEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoIosPersonAdd } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../proviider/AuthContext';
import { toast } from 'react-toastify';

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const { updateUser, createUser, setLoading, loading } = use(AuthContext)
    const navigate = useNavigate()

    const handleRegistration = async e => {
        setLoading(true)
        e.preventDefault();

        const formFields = e.target;

        const name = formFields.name.value;
        const email = formFields.email.value;
        const password = formFields.password.value;
        const confirmPassword = formFields.confirm_password.value;
        const isChecked = formFields.termAndCondition.checked;
        const profile = formFields.profilePicture.files[0]

        if(password < 6){
             toast.warning("Password must be 6 character long!")
            return
        }

        if (!isChecked) {
            toast.warning("Please accept the terms and condition!")
            return
        }

        if (password !== confirmPassword) {
            toast.warning("Password and confirm password must match!")
            return
        }

        const formData = new FormData();
        formData.append("file", profile);
        formData.append("upload_preset", "my_preset");

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dwduymu1l/image/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            console.log("Uploaded Image URL:", data.secure_url);
            const updateProfile = {
                displayName: name,
                photoURL: data.secure_url
            }

            if (data.secure_url) {
                const userRes = await createUser(email, password)
                if (userRes.user) {
                    await updateUser(updateProfile)
                    setLoading(false)
                    toast.success("Account created successfully please login now!")
                    navigate("/login")
                }
            }
        } catch (error) {
            console.error("Upload failed:", error);
            setLoading(false)
        }

    }
    return (
        <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center p-4">
            <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                <div className="md:max-w-md w-full px-4 py-4">
                    <form onSubmit={handleRegistration}>
                        <div className="mb-12">
                            <h1 className="text-slate-900 text-3xl font-bold">Sign Up</h1>
                            <p className="text-[15px] mt-6 text-slate-600">Already have an account <Link to="/login" className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">Login</Link></p>
                        </div>

                        <div>
                            <label className="text-slate-900 text-[13px] font-medium block mb-2">Name</label>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter name" />
                                <IoIosPersonAdd size={24} className="absolute right-2 cursor-pointer text-gray-400" />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <label className="text-slate-900 text-[13px] font-medium block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />
                                <MdEmail size={24} className="absolute right-2 cursor-pointer text-gray-400" />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <label className="text-slate-900 text-[13px] font-medium block mb-2">Profile Picture</label>
                            <div className="relative flex items-center">
                                <input name="profilePicture" type="file" required className="w-full text-slate-900 text-sm border rounded border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" />
                            </div>
                        </div>
                        <div className="mt-8">
                            <label className="text-slate-900 text-[13px] font-medium block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type={showPassword ? "text" : "password"} required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
                                {
                                    showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} size={24} className="absolute right-2 cursor-pointer text-gray-400" /> : <FaRegEye onClick={() => setShowPassword(!showPassword)} size={24} className="absolute right-2 cursor-pointer text-gray-400" />
                                }


                            </div>
                        </div>
                        <div className="mt-8">
                            <label className="text-slate-900 text-[13px] font-medium block mb-2">Confirm Password</label>
                            <div className="relative flex items-center">
                                <input name="confirm_password" type={showConfirmPassword ? "text" : "password"} required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
                                {
                                    showConfirmPassword ? <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} size={24} className="absolute right-2 cursor-pointer text-gray-400" /> : <FaRegEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} size={24} className="absolute right-2 cursor-pointer text-gray-400" />
                                }


                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
                            <div className="flex items-center">
                                <input id="termAndCondition" name="termAndCondition" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" required />
                                <label htmlFor="termAndCondition" className="ml-3 block text-sm text-slate-900">
                                    Accept Term and Condition
                                </label>
                            </div>
                        </div>

                        <div className="mt-12">
                            {
                                loading ? <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                    Loading....
                                </button> :

                                    <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                        Sign Up
                                    </button>
                            }
                        </div>

                        <div className="my-6 flex items-center gap-4">
                            <hr className="w-full border-slate-300" />
                            <p className="text-sm text-slate-900 text-center">or</p>
                            <hr className="w-full border-slate-300" />
                        </div>

                        <div className="space-x-8 flex justify-center">
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 inline" fill="#007bff" viewBox="0 0 167.657 167.657">
                                    <path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z" data-original="#010002"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full h-full flex items-center bg-[#000842] rounded-xl p-8">
                    <img src="https://readymadeui.com/signin-image.webp" className="w-full object-contain" alt="login-image" />
                </div>
            </div>
        </div>
    );
};

export default Registration;