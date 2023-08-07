import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Toaster, toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const userData = useLoaderData();

    const handleUpdateDetails = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const university = form.university.value;
        const country = form.country.value;
        const city = form.city.value;
        const postal = form.postal.value;
        const bio = form.bio.value;
        const personalData = { name, email, phone, university, country, city, postal, bio }

        fetch(`https://collage-bookign-server.vercel.app/user/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(personalData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Saved!');
                } else {
                    toast.error("Error, Please try again!")
                }
            })
    }

    return (
        <section>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h2 className="mt-6 md:mt-0 mb-6 text-2xl font-semibold text-gray-700 text-center md:text-start">Update Your Details</h2>
            <form onSubmit={handleUpdateDetails}>
                <div className="mb-6">
                    <div>
                        <label className='block text-gray-600' htmlFor="name">Your Name</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="name" id="" placeholder="Your name" defaultValue={userData.name} />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className='block text-gray-600' htmlFor="email">Your Email</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="email" name="email" id="" placeholder="Your Email" defaultValue={userData.email} />
                    </div>
                    <div>
                        <label className='block text-gray-600' htmlFor="phone">Your Phone</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="number" name="phone" id="" placeholder="Your phone" defaultValue={userData.phone}/>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className='block text-gray-600' htmlFor="university">Your University</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="university" id="" placeholder="Your University" defaultValue={userData.university}/>
                    </div>

                    <div>
                        <label className='block text-gray-600' htmlFor="country">Country</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="country" id="" placeholder="Country" defaultValue={userData.country}/>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className='block text-gray-600' htmlFor="city">City/State</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="city" id="" placeholder="City or State" defaultValue={userData.city}/>
                    </div>

                    <div>
                        <label className='block text-gray-600' htmlFor="postal">Postal Code</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="number" name="postal" id="" placeholder="Postal code" defaultValue={userData.postal}/>
                    </div>
                </div>
                <div>
                    <label className='block text-gray-600' htmlFor="bio">Bio</label>
                    <textarea className="border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm" name="bio" id="bio" cols="30" rows="5" placeholder="About yourself" defaultValue={userData.bio}></textarea>
                </div>

                <button className="mt-6 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-200 rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-two absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Save</span>
                </button>
            </form>
        </section>
    );
};

export default UpdateProfile;