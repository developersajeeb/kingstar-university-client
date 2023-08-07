/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

const ReviewSlider = ({ feedbacks }) => {

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },

                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    feedbacks.map(feedback => <SwiperSlide key={feedback._id}>
                        <div className='text-center bg-gray-50 grid gap-4 p-8 rounded-lg border'>
                            <figure>
                                <div className='border-2 border-[#3DB166] p-1 inline-block rounded-full'><img className='w-24 mx-auto rounded-full object-cover' src={feedback.userPhoto} alt="" /></div>
                                <p className='mt-2 font-semibold color-one'>{feedback.userName}</p>
                            </figure>
                            <div>
                                <h3 className='font-semibold mb-2'>{feedback.name}</h3>
                                <p className='text-gray-600'>{feedback.feedback}</p>
                            </div>
                            <div className='flex justify-center'>
                                <Rating
                                    style={{ maxWidth: 140 }}
                                    value={feedback.rating}
                                    readOnly
                                />
                            </div>
                        </div>
                    </SwiperSlide>)
                }


                <div className='mt-10 border border-white'></div>
            </Swiper>
        </>
    );
};

export default ReviewSlider;