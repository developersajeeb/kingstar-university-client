import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    const handleUpdateDetails = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;
        const bio = form.bio.value;
        console.log(name, email, university, address, bio);
    }

    return (
        <main className="px-5 py-16 md:p-32 grid md:grid-cols-4">
            <section className="md:col-span-1 text-center md:mr-10">
                <figure className="border-4 inline-block rounded-full p-1 border-[#3DB166]">
                    <img className="w-36 h-36 rounded-full object-cover mx-auto" src={user.photoURL} alt="" />
                </figure>
                <h4 className="font-semibold mt-4 text-xl">{user.displayName}</h4>
                <p className="text-gray-500">{user.email}</p>

                <h4 className="font-bold mt-8">Bio</h4>
                <p className="">Dynamic MERN Developer is skilled in React.js, MongoDB, Node.js, Next.js, and Express. Proficient in frontend technologies like HTML, CSS, Tailwind, Bootstrap, and Material UI.</p>

                <h4 className="font-semibold mt-8">University</h4>
                <p className="text-gray-500">Feni Polytechnic Institute</p>

                <ul className="mt-8">
                    <li className="font-semibold">Address:</li>
                    <li className="text-gray-600">Shahrasti, Chandpur</li>
                </ul>
            </section>
            <section className="border-t md:border-t-0 md:border-l border-[#bac9e4] md:col-span-3 md:pl-10 mt-8">
                <h2 className="mt-6 md:mt-0 mb-6 text-2xl font-semibold text-gray-700 text-center md:text-start">Update Your Details</h2>
                <form onSubmit={handleUpdateDetails}>
                    <div>
                        <label className='block text-gray-600' htmlFor="name">Your Name</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="name" id="" required placeholder="Your name" defaultValue={user.displayName} />
                    </div>
                    <div className="my-6">
                        <label className='block text-gray-600' htmlFor="email">Your Email</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="email" name="email" id="" defaultValue={user.email} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className='block text-gray-600' htmlFor="university">Your University</label>
                            <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="university" id="" placeholder="Your University" />
                        </div>

                        <div>
                            <label className='block text-gray-600' htmlFor="address">Address</label>
                            <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="address" id="" placeholder="Address" />
                        </div>
                    </div>
                    <div>
                        <label className='block text-gray-600' htmlFor="bio">Bio</label>
                        <textarea className="border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm" name="bio" id="bio" cols="30" rows="10" placeholder="About yourself"></textarea>
                    </div>

                    <button className="mt-6 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-200 rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-two absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Save</span>
                    </button>
                </form>
            </section>
        </main>
    );
};

export default MyProfile;