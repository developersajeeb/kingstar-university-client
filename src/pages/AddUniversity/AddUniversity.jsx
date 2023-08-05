import { Toaster, toast } from "react-hot-toast";


const AddUniversity = () => {

    const handleAddUniversity = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const admissionStartDate = form.admissionStartDate.value;
        const admissionLastDate = form.admissionLastDate.value;
        const location = form.location.value;
        const about = form.about.value;
        const facilities = form.facilities.value;
        const universityDetails = { name, photo, admissionStartDate, admissionLastDate, location, about, facilities }

        fetch('http://localhost:5000/university', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(universityDetails)
        })
            .then(result => result.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success('Added University!');
                } else {
                    toast.error("Error, Please try again!")
                }
                form.reset()
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
                        <label className='block text-gray-600' htmlFor="admissionStartDate">Admission Starting Dates</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="date" name="admissionStartDate" id="" />
                    </div>
                    <div>
                        <label className='block text-gray-600' htmlFor="admissionLastDate">Admission Last Dates</label>
                        <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="date" name="admissionLastDate" id="" />
                    </div>
                </div>
                <div>
                    <label className='block text-gray-600' htmlFor="location">University Location</label>
                    <input className='border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="location" id="" required placeholder="University Location" />
                </div>
                <div className="my-6">
                    <label className='block text-gray-600' htmlFor="about">About University</label>
                    <textarea className="border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm" name="about" id="about" cols="20" rows="4" placeholder="About University"></textarea>
                </div>
                <div>
                    <label className='block text-gray-600' htmlFor="facilities">Facilities</label>
                    <textarea className="border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2 text-sm" name="facilities" id="facilities" cols="20" rows="4" placeholder="Facilities"></textarea>
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