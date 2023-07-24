import Hamburger from "hamburger-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from '../assets/university-logo.png'
import { AuthContext } from "../providers/AuthProviders";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'LogOut!',
                    'We look forward to your return.',
                    'success'
                )
            })
    }

    return (
        <nav>
            <div className="hidden md:block ">
                <div className="flex items-center justify-between bg-one container px-16 lg:px-40 py-3">
                    <ul className="flex gap-2 text-gray-400">
                        <li><FaLinkedinIn /></li>
                        <li><FaFacebookF /></li>
                        <li><FaTwitter /></li>
                    </ul>
                    <ul className="flex gap-8 text-gray-400 text-xs">
                        <li className="flex items-center gap-2">
                            <FaEnvelope />
                            info@developersajeeb.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt />
                            +8801743370840
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hidden md:block shadow-md">
                <div className="px-16 lg:px-40 py-7 flex justify-between items-center">
                    <NavLink to='/'><img className="w-72" src={logo} alt="" /></NavLink>
                    <ul className="flex gap-5 font-medium text-gray-600">
                        <NavLink className={({ isActive }) => isActive ? 'color-one' : 'text-gray-900'} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'color-one' : 'text-gray-900'} to='/colleges'>Colleges</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'color-one' : 'text-gray-900'} to='/about-us'>About Us</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'color-one' : 'text-gray-900'} to='/contact'>Contact</NavLink>
                        {
                            user ?
                                <>
                                    <NavLink className={({ isActive }) => isActive ? 'color-one' : 'text-gray-900'} to='/my-college'>My College</NavLink>
                                    <NavLink className='color-one hover:underline duration-300' to='/my-profile'>{user?.displayName?.slice(0,6)}...</NavLink>
                                    <NavLink onClick={handleLogOut} className={({ isActive }) => isActive ? 'color-one' : 'text-gray-900'}><FaSignOutAlt size={24} /></NavLink>
                                </>
                                :
                                <NavLink className={({ isActive }) => isActive ? 'color-one' : 'text-gray-900'} to='/login'>Login</NavLink>
                        }
                    </ul>
                </div>
            </div>
            <div className="p-4 md:hidden shadow-md">
                <div className="flex justify-between items-center">
                    <NavLink to='/'><img className="w-60" src={logo} alt="" /></NavLink>
                    <span className="rounded-md" onClick={() => { setOpen(!isOpen) }}><Hamburger size={25}></Hamburger></span>
                </div>
                <ul className={`grid font-medium text-gray-600 bg-gray-100 px-5 pb-5 text-center rounded-lg absolute w-48 duration-300 border ${isOpen ? 'right-2 top-20' : '-top-96 right-2'}`}>
                    <NavLink className={({ isActive }) => isActive ? 'color-one border-b border-gray-300 py-4' : 'border-b border-gray-300 py-4 text-gray-900'} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-one border-b border-gray-300 py-4 ' : ' border-b border-gray-300 py-4 text-gray-900'} to='/colleges'>Colleges</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-one border-b border-gray-300 py-4 ' : ' border-b border-gray-300 py-4 text-gray-900'} to='/about-us'>About Us</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-one border-b border-gray-300 py-4 ' : ' border-b border-gray-300 py-4 text-gray-900'} to='/contact'>Contact</NavLink>
                    {
                        user ?
                            <>
                                <NavLink className={({ isActive }) => isActive ? 'color-one border-b border-gray-300 py-4 ' : ' border-b border-gray-300 py-4 text-gray-900'} to='/my-college'>My College</NavLink>
                                <NavLink className='color-one hover:underline duration-300 border-b border-gray-300 py-4' to='/my-profile'>{user?.displayName?.slice(0,6)}...</NavLink>
                                <NavLink onClick={handleLogOut} className={({ isActive }) => isActive ? 'color-one pt-4 mx-auto' : 'text-gray-900 pt-4 mx-auto'}><FaSignOutAlt size={24} /></NavLink>
                            </>
                            :
                            <NavLink className={({ isActive }) => isActive ? 'color-one pt-4' : 'text-gray-900 pt-4'} to='/login'>Login</NavLink>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;