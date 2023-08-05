import { useLoaderData } from "react-router-dom";
import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";

const UniversityDetails = () => {
    const { photo, name, about, facilities, admissionStartDate, admissionLastDate, location } = useLoaderData();

    return (
        <>
            <header style={{ backgroundImage: `url(${photo})` }} className='text-white text-center bg-no-repeat bg-cover bg-center bg-fixed'>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 py-36 md:py-48 px-4 bg-gradient-to-t from-slate-900">{name}</h1>
            </header>
            <main className="px-5 py-20 md:px-40 md:py-32 grid md:grid-cols-3 gap-8">
                <section className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-gray-700">Review</h2>
                    <p className="mt-4 text-gray-700">{about}</p>
                    <h2 className="text-3xl font-bold text-gray-700 mt-10">Facilities</h2>
                    <p className="mt-4 text-gray-700">{facilities}</p>
                </section>
                <section>
                    <div className="bg-white shadow p-5 rounded-xl">
                        <h4 className="text-lg font-semibold mb-2">Admission Date:</h4>
                        <p className="flex gap-2 items-center text-sm text-gray-500"><FaRegCalendarDays size={20}/>{admissionStartDate} <span className="font-bold">TO</span> {admissionLastDate}</p>
                        <h4 className="text-lg font-semibold mt-6 mb-2">University Location:</h4>
                        <p className="flex items-center gap-2 text-sm text-gray-500"><FaLocationDot size={20}/> {location}</p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default UniversityDetails;