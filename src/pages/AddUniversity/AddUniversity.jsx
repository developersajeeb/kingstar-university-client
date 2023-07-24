import { Toaster, toast } from "react-hot-toast";


const AddUniversity = () => {

    const handleAddUniversity = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const admissionDate = form.admissionDate.value;
        const rating = form.rating.value;
        const events = form.events.value;
        const research = form.research.value;
        const sports = form.sports.value;
        const universityDetails = { name, photo, admissionDate, rating, events, research, sports }

        fetch('http://localhost:5000/university', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(universityDetails)
        })
            .then(result => result.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Added University!');
                } else {
                    toast.error("Error, Please try again!")
                }
                // navigate('/');
            })
    }
    return (
        <main>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h2 className="mt-6 md:mt-0 mb-6 text-2xl font-semibold text-gray-700 text-center md:text-start">Add University</h2>
            <form onSubmit={handleAddUniversity}>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className='block text-gray-600' htmlFor="photo">University Photo URL</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="url" name="photo" id="" required placeholder="University Photo URL" />
                    </div>
                    <div>
                        <label className='block text-gray-600' htmlFor="name">University Name</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="name" id="" required placeholder="University Name" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className='block text-gray-600' htmlFor="admissionDate">Admission Last Dates</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="date" name="admissionDate" id="" placeholder="Admission Date" />
                    </div>
                    <div>
                        <label className='block text-gray-600' htmlFor="rating">University Rating</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="number" name="rating" id="" required placeholder="University Rating" />
                    </div>
                </div>
                <div className="my-6">
                    <label className='block text-gray-600' htmlFor="events">Events</label>
                    <textarea className="border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm" name="events" id="events" cols="20" rows="4" placeholder="Events"></textarea>
                </div>
                <div>
                    <label className='block text-gray-600' htmlFor="Research">Research History</label>
                    <textarea className="border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm" name="research" id="research" cols="20" rows="4" placeholder="Research History"></textarea>
                </div>
                <div className="mt-6">
                    <label className='block text-gray-600' htmlFor="sports">Sports</label>
                    <textarea className="border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm" name="sports" id="sports" cols="20" rows="4" placeholder="sports"></textarea>
                </div>

                <button className="mt-6 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-200 rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-two absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Save</span>
                </button>
            </form>
        </main>
    );
};

export default AddUniversity;