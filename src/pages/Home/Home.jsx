import bannerImg from '../../assets/Banner/pexels-pixabay-256455.jpg'
import { FaSearch } from "react-icons/fa";
import SectionTitle from '../../components/SectionTitle';
import ImageGallery from '../../components/ImageGallery';
import ReviewSlider from '../../components/ReviewSlider';
import { FaStar } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <header style={{ backgroundImage: `url(${bannerImg})` }} className='bg-cover bg-center bg-no-repeat'>
                <section className='bg-gradient-to-r from-[#192F59] px-5 py-40 text-white md:px-40 md:py-48'>
                    <h2 className='text-xl md:text-4xl'>The Best College Of The State</h2>
                    <h1 className='text-4xl md:text-8xl font-light mt-4 mb-8'><span className='font-semibold'>Kingster</span> University</h1>
                    <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-two absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Take A Tour</span>
                    </button>
                </section>
            </header>
            <main className='px-5 py-36 md:p-40'>
                <section className='-mt-52 md:-mt-56'>
                    <form className='bg-white shadow-lg p-8 md:py-10 md:px-14 relative rounded-lg'>
                        <input className='p-3 w-full border-2 border-gray-300 rounded-md' type="text" name="search" id="search" placeholder='Search College' />
                        <button type='submit' className='absolute right-10 top-10 md:right-16 md:top-12 text-white bg-two p-2 rounded-md'>
                            <FaSearch size={20} />
                        </button>
                    </form>
                </section>

                <section className='my-28'>
                    <SectionTitle heading={'Top Collages'} subHeading={'Nurturing Minds, Cultivating Futures'}></SectionTitle>
                    <div className='grid md:grid-cols-3 gap-8 mt-16'>
                        <div className='bg-gray-50 rounded-md'>
                            <div className='relative'>
                                <img src="https://www.westvalley.edu/_resources/images/homepage/transfer-grad.jpg" alt="" className='w-full h-64 object-cover rounded-md shadow-lg' />
                                <div className='flex items-center gap-1 bg-yellow-500 absolute right-0 bottom-3 p-1 rounded-s-full text-white font-semibold'><FaStar /> 4.8</div>
                            </div>
                            <div className='m-4'>
                                <h2 className='color-one text-xl font-bold'>West Valley College</h2>
                                <p className='mt-3'>Dynamic MERN Developer is skilled in React.js, MongoDB, Node.js, Next.js, and Express. Proficient in frontend technologies like HTML, CSS, Tailwind, Bootstrap, and Material UI.</p>
                                <div className='flex items-end justify-between'>
                                    <p className='text-gray-600 font-semibold'>Admission Date: <br /><span className='font-normal'>7-22-2023 - 8-22-2023</span></p>
                                    <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-200 rounded hover:bg-white group mt-6">
                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-two absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Details</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <SectionTitle heading={'Our Gallery'} subHeading={'Explore Captivating Moments'}></SectionTitle>
                    <div className='mt-16'>
                        <ImageGallery></ImageGallery>
                    </div>
                </section>

                <section className='my-28'>
                    <SectionTitle heading={'Some Research Paper'} subHeading={'Genetic Basis of Neurodegenerative Diseases'}></SectionTitle>
                    <div className='grid md:grid-cols-3 gap-6 mt-16'>
                        <div className='p-6 bg-gray-100 rounded-lg grid gap-4'>
                            <h2 className='text-xl font-semibold text-gray-700'>Advancements in Artificial Intelligence and Machine Learning: A Review</h2>
                            <p className='color-one font-medium'>Authors <span className='font-normal text-gray-700'>John Doe, Mary Smith</span></p>
                            <p>This comprehensive review paper discusses the latest advancements in artificial intelligence and machine learning algorithms, their applications across various industries, and potential future developments.</p>
                            <a className='underline color-one font-semibold cursor-pointer'>Link</a>
                        </div>
                        <div className='p-6 bg-gray-100 rounded-lg grid gap-4'>
                            <h2 className='text-xl font-semibold text-gray-700'>Climate Change Impacts on Biodiversity and Ecosystems: A Global Analysis</h2>
                            <p className='color-one font-medium'>Authors <span className='font-normal text-gray-700'> Emily Johnson, David Lee, et al.</span></p>
                            <p>This study examines the effects of climate change on biodiversity and ecosystems worldwide, highlighting vulnerable regions and species facing the greatest threats.</p>
                            <a className='underline color-one font-semibold cursor-pointer'>Link</a>
                        </div>
                        <div className='p-6 bg-gray-100 rounded-lg grid gap-4'>
                            <h2 className='text-xl font-semibold text-gray-700'>The Influence of Social Media on Mental Health: A Comparative Study of Different Age Groups</h2>
                            <p className='color-one font-medium'>Authors <span className='font-normal text-gray-700'>Sarah Williams, James Anderson</span></p>
                            <p> Investigating the relationship between social media usage and mental health, this research paper presents findings from a survey conducted among individuals of various age groups.</p>
                            <p className='underline color-one font-semibold cursor-pointer'>Link</p>
                        </div>
                        <div className='p-6 bg-gray-100 rounded-lg grid gap-4'>
                            <h2 className='text-xl font-semibold text-gray-700'>Urbanization and Its Impact on Air Quality: A Case Study of Metropolitan Cities</h2>
                            <p className='color-one font-medium'>Authors <span className='font-normal text-gray-700'>Alex Johnson, Samantha Lee</span></p>
                            <p>Focusing on metropolitan areas, this paper explores the effects of rapid urbanization on air quality, identifying key pollutants and proposing potential mitigation strategies.</p>
                            <p className='underline color-one font-semibold cursor-pointer'>Link</p>
                        </div>
                        <div className='p-6 bg-gray-100 rounded-lg grid gap-4'>
                            <h2 className='text-xl font-semibold text-gray-700'>Understanding the Role of Microplastics in Marine Environments</h2>
                            <p className='color-one font-medium'>Authors <span className='font-normal text-gray-700'>Michael Adams, Emily Chen</span></p>
                            <p>This study investigates the sources, distribution, and ecological implications of microplastics in marine ecosystems, shedding light on their potential impact on marine life.</p>
                            <p className='underline color-one font-semibold cursor-pointer'>Link</p>
                        </div>
                        <div className='p-6 bg-gray-100 rounded-lg grid gap-4'>
                            <h2 className='text-xl font-semibold text-gray-700'>The Changing Dynamics of International Trade: An Analysis of Recent Trade Agreements</h2>
                            <p className='color-one font-medium'>Authors <span className='font-normal text-gray-700'>Robert Brown, Laura Martinez, et al.</span></p>
                            <p>This research paper examines the evolving landscape of international trade, focusing on recent trade agreements and their implications for global economies.</p>
                            <p className='underline color-one font-semibold cursor-pointer'>Link</p>
                        </div>
                    </div>
                </section>

                <section>
                    <SectionTitle heading={'Student Feedback'} subHeading={'Importance of Gathering Student Feedback'}></SectionTitle>
                    <div className='mt-16'>
                        <ReviewSlider></ReviewSlider>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;