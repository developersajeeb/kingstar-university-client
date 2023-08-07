import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import { FaThLarge, FaHome, FaUserEdit, FaUniversity, FaArrowLeft, FaUserAlt, FaStar } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import { FaClipboardList } from "react-icons/fa";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin()

    return (
        <main className="px-5 py-16 md:px-32">
            <section className="">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="mt-6 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-200 rounded hover:bg-white group drawer-button lg:hidden">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-two absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white flex items-center gap-2"><FaArrowLeft /> Side Menu</span>
                        </label>
                        <main className="lg:ml-12 mt-8 lg:mt-0">
                            <Outlet></Outlet>
                        </main>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu px-4 py-8 lg:py-0 h-full text-base-content text-center bg-white">
                            {/* Sidebar content here */}
                            <figure className="flex items-center gap-2 mb-10">
                                <img className="w-16 h-16 rounded-full object-cover mx-auto border-4 border-[#7db891]" src={user.photoURL} alt="" />
                                <div>
                                    <h4 className="font-semibold text-xl text-start">{user.displayName}</h4>
                                    <p className="text-gray-500 text-start">{user.email}</p>
                                </div>
                            </figure>
                            <li><Link to='/' className="text-gray-900 font-medium"><FaHome />Main Home</Link></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to={`/my-profile/dashboard/${user?.email}`}><FaThLarge /> Dashboard</NavLink></li>
                            {
                                isAdmin ?
                                    <>
                                        <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to='/my-profile/add-university'><FaUniversity /> Add University</NavLink></li>
                                        <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to='/my-profile/all-university'><FaClipboardList /> All University</NavLink></li>
                                        <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to='/my-profile/all-users'><FaUserAlt /> All Users</NavLink></li>
                                        <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to='/my-profile/feedbacks'><FaStar /> Feedbacks</NavLink></li>
                                    </>
                                    :
                                    <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to={`/my-profile/my-university`}><FaUniversity /> My University</NavLink></li>
                            }
                            <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to={`/my-profile/update-profile/${user?.email}`}><FaUserEdit /> Update Profile</NavLink></li>
                        </ul>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default MyProfile;