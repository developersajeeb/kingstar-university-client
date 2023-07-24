import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <main className="px-5 py-16 md:px-32">
            <section className="">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Sidebar</label>
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full text-base-content text-center">
                            {/* Sidebar content here */}
                            <figure>
                                <img className="w-36 h-36 rounded-full object-cover mx-auto border-4 border-[#3DB166]" src={user.photoURL} alt="" />
                            </figure>
                            <h4 className="font-semibold mt-4 text-xl">{user.displayName}</h4>
                            <p className="text-gray-500 mb-10">{user.email}</p>
                            <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to='/my-profile'>Dashboard</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to={`/my-profile/update-profile`}>Update Profile</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'color-one font-medium' : 'text-gray-900 font-medium'} to='/my-profile/add-university'>Add University</NavLink></li>
                        </ul>

                    </div>
                </div> 
            </section>
        </main>
    );
};

export default MyProfile;