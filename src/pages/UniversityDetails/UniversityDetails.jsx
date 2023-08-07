import { useLoaderData } from "react-router-dom";
import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Toaster, toast } from "react-hot-toast";

const UniversityDetails = () => {
    const { photo, name, about, facilities, admissionStartDate, admissionLastDate, location } = useLoaderData();
    const { user } = useAuth();
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(2);

    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const feedbackDetails = { userName: user.displayName, userPhoto: user.photoURL, name, feedback, rating, userEmail: user.email, status: 'pending' }

        fetch('https://collage-bookign-server.vercel.app/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedbackDetails)
        })
            .then(result => result.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success('Feedback successfully sent!');
                } else {
                    toast.error("Error, Please try again!")
                }
                form.reset()
            })
    }

    const handleChange = (event) => {
        const { value } = event.target;
        if (value.length <= 250) {
            setFeedback(value);
        }
    };

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <header style={{ backgroundImage: `url(${photo})` }} className='text-white text-center bg-no-repeat bg-cover bg-center bg-fixed'>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 py-36 md:py-48 px-4 bg-gradient-to-t from-slate-900">{name}</h1>
            </header>
            <main className="px-5 py-20 md:px-40 md:py-32">
                <section className="grid md:grid-cols-3 gap-8">
                    <section className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-700">Review</h2>
                        <p className="mt-4 text-gray-700">{about}</p>
                        <h2 className="text-3xl font-bold text-gray-700 mt-10">Facilities</h2>
                        <p className="mt-4 text-gray-700">{facilities}</p>
                    </section>
                    <section>
                        <div className="bg-white shadow p-5 rounded-xl">
                            <h4 className="text-lg font-semibold mb-2">Admission Date:</h4>
                            <p className="flex gap-2 items-center text-sm text-gray-500"><FaRegCalendarDays size={20} />{admissionStartDate} <span className="font-bold">TO</span> {admissionLastDate}</p>
                            <h4 className="text-lg font-semibold mt-6 mb-2">University Location:</h4>
                            <p className="flex items-center gap-2 text-sm text-gray-500"><FaLocationDot size={20} /> {location}</p>
                        </div>
                    </section>
                </section>

                <form className="w-full grid md:grid-cols-3 mt-16" onSubmit={handleFeedback}>
                    <div className="md:col-span-2">
                        <label className='block text-gray-700 font-semibold text-2xl mb-3' htmlFor="feedback">Your Feedback</label>
                        <Rating
                            style={{ maxWidth: 140 }}
                            value={rating}
                            onChange={setRating}
                        />
                        <div className="relative">
                            <textarea className="border-2 border-gray-300 rounded-md w-full py-3 px-5 mt-2 focus:border-2"
                                name="feedback" id="feedback"
                                cols="20" rows="6"
                                placeholder="Give your feedback within 250 characters"
                                value={feedback}
                                onChange={handleChange}
                                required></textarea>
                            <p className="absolute right-4 bottom-4 text-sm font-medium text-gray-500">{250 - feedback.length}</p>
                        </div>
                        <p className="text-sm text-gray-500">Please follow these <span className="color-one cursor-pointer">criteria</span> to show your feedback.</p>
                        <button className="mt-4 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-200 rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-two absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Submit</span>
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
};

export default UniversityDetails;