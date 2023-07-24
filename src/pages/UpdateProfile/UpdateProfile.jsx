import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Toaster, toast } from "react-hot-toast";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [singleUser, setSingleUser] = useState()

    // useEffect(() => {
    //     fetch(`http://localhost:5000/user/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setSingleUser(data))
    // }, [user])

    const handleUpdateDetails = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;
        const bio = form.bio.value;
        const personalData = { name, photo, email, university, address, bio }

        // fetch(`http://localhost:5000/class/${_id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(personalData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             toast.success('Saved!');
        //         } else {
        //             toast.error("Error, Please try again!")
        //         }
        //     })
    }

    return (
        <section>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h2 className="mt-6 md:mt-0 mb-6 text-2xl font-semibold text-gray-700 text-center md:text-start">Update Your Details</h2>
            <form onSubmit={handleUpdateDetails}>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className='block text-gray-600' htmlFor="name">Your Name</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="name" id="" required placeholder="Your name" defaultValue={user.displayName} />
                    </div>
                    <div>
                        <label className='block text-gray-600' htmlFor="photo">Your Photo URL</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="url" name="photo" id="" required placeholder="Your Photo URL" defaultValue={user.photoURL} />
                    </div>
                </div>
                <div className="my-6">
                    <label className='block text-gray-600' htmlFor="email">Your Email</label>
                    <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="email" name="email" id="" defaultValue={user.email} placeholder="Your Email" />
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
    );
};

export default UpdateProfile;