import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { FaStar } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import banner from '../../assets/pageheader.jpg'


const Universitys = () => {
    const allUniversity = useLoaderData();
    const navigate = useNavigate()
    const { user } = useAuth()

    const handleView = () => {
        if (user) {
            const from = location.state?.from?.pathname;
            navigate(from);
        } else {
            navigate('/login');
            Swal.fire(
                'Login First',
                'Please log in to view details.',
                'warning'
            )
        }
    }

    return (
        <>
            <PageHeader banner={banner} heading={'All Listed University'} subHeading={'Here is a list of all the university currently listed'} />
            <main className="px-5 py-20 md:px-40 md:py-36">
                <section className='grid md:grid-cols-3 gap-8'>
                    {
                        allUniversity?.map(university => <div key={university?._id} className='bg-gray-50 rounded-md'>
                            <div className='relative'>
                                <img src={university?.photo} alt="" className='w-full h-64 object-cover rounded-md shadow-lg' />
                                <div className='flex items-center gap-1 bg-yellow-500 absolute right-0 bottom-3 p-1 rounded-s-full text-white font-semibold'><FaStar /> {university?.rating || 'N/A'}</div>
                            </div>
                            <div className='m-4 relative'>
                                <div>
                                    <h2 className='color-one text-xl font-bold'>{university?.name}</h2>
                                    <p className='mt-3'>{university?.about.slice(0, 110)}...</p>
                                </div>
                                <div className='flex items-end justify-between'>
                                    <p className='text-gray-600 font-semibold'>Admission Date: <br /><span className='font-normal'>{university?.admissionStartDate} - {university.admissionLastDate}</span></p>
                                    <Link onClick={handleView} to={`/university/${university._id}`}>
                                        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-200 rounded hover:bg-white group mt-6">
                                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-two absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Details</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </section>
            </main>
        </>
    );
};

export default Universitys;