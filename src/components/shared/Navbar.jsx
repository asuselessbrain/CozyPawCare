import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { use } from 'react';
import { AuthContext } from '../../proviider/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logout } = use(AuthContext)

    const handleLogout = async() => {
        try{
            await logout()
            toast.success("Logout Successfully!")
        }catch(error){
            toast.error(error.message.split("/")[1].split(")")[0])
        }
    }
    const links = [
        {
            name: "Home", links: "/",
        },
        {
            name: "Services", links: "/services",
        },
        {
            name: "My Profile", links: "/profile"
        }
    ]
    return (
        <nav className="bg-base-100 shadow-sm">
            <div className='max-w-[1440px] navbar mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links.map(link => <li key={link.name}><NavLink to={link.links}>{link.name}</NavLink></li>)
                            }
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} alt="CozyPawCare" className='h-20 w-32' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links.map(link => <li key={link.name}><NavLink to={link.links}>{link.name}</NavLink></li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogout} className="btn cursor-pointer bg-red-500 text-white hover:bg-red-600">LogOut</button>
                            : <Link to="/login" className="btn bg-green-500 cursor-pointer text-white hover:bg-green-600">Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;