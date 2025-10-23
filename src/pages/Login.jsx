import { use, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../proviider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { loginWithGoogle, user, loading, setLoading, loginWithEmail } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(false);
    }, [setLoading]);
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = e.target;

        const email = formData.email.value;
        const password = formData.password.value;

        try {
            const res = await loginWithEmail(email, password)
            if (res.user) {
                toast.success("Login Successful !")
                navigate(location.state ? location.state : "/")
                setLoading(false)
            }
        } catch (error) {
            toast.error(error.message.split("/")[1].split(")")[0])
            setLoading(false)
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true)
        try {
            const res = await loginWithGoogle()
            if (res.user) {
                toast.success("Login Successful !")
                navigate(location.state ? location.state : "/")
                setLoading(false)
            }
        }
        catch (error) {
            toast.error(error.message.split("/")[1].split(")")[0])
            setLoading(false)
        }
    }
    return (
        <div className="lg:min-h-[calc(100vh-120px)] flex fle-col items-center justify-center p-6">
            <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold text-slate-900 leading-tight!">
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
                        <div className="flex flex-wrap items-center justify-end gap-4">
                            <div className="text-sm">
                                <a href="jajvascript:void(0);" className="text-blue-600 hover:text-blue-500 font-medium">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12!">
                        {
                            loading ? <button type="submit" disabled className="w-full disabled:cursor-not-allowed shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                Loading....
                            </button> :
                                <button type="submit" disabled={user} className="w-full disabled:cursor-not-allowed shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                    Log in
                                </button>
                        }
                    </div>

                    <div className="my-6 flex items-center gap-4">
                        <hr className="w-full border-slate-300" />
                        <p className="text-sm text-slate-900 text-center">or</p>
                        <hr className="w-full border-slate-300" />
                    </div>

                    <div className="space-x-6 flex justify-center">
                        <button type="button"
                            disabled={loading || user}
                            onClick={handleGoogleLogin}
                            className="border disabled:cursor-not-allowed outline-0 cursor-pointer flex items-center gap-4 w-full justify-center p-3 rounded hover:shadow-xl">
                            <FcGoogle size={24} />
                            Login With Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;