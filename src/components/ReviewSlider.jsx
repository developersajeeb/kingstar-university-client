import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const ReviewSlider = () => {
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
                <SwiperSlide>
                    <div className='text-center bg-gray-50 grid gap-4 p-8 rounded-lg border'>
                        <figure>
                            <div className='border-2 border-[#3DB166] p-1 inline-block rounded-full'><img className='w-24 mx-auto rounded-full object-cover' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80" alt="" /></div>
                            <p className='mt-2 font-semibold color-one'>Sajeeb Dev</p>
                        </figure>
                        <div>
                            <h3 className='font-semibold mb-2'>West Valley College</h3>
                            <p className='text-gray-600'>Theres not much to say about YETI stainless steel tumblers that hasnt been said. Theres a reason theyre so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.</p>
                        </div>
                        <div>
                            <p className='font-semibold text-gray-600'>12.09.2019</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center bg-gray-50 grid gap-4 p-8 rounded-lg border'>
                        <figure>
                            <div className='border-2 border-[#3DB166] p-1 inline-block rounded-full'><img className='w-24 mx-auto rounded-full object-cover' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80" alt="" /></div>
                            <p className='mt-2 font-semibold color-one'>Sajeeb Dev</p>
                        </figure>
                        <div>
                            <h3 className='font-semibold mb-2'>West Valley College</h3>
                            <p className='text-gray-600'>Theres not much to say about YETI stainless steel tumblers that hasnt been said. Theres a reason theyre so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.</p>
                        </div>
                        <div>
                            <p className='font-semibold text-gray-600'>12.09.2019</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center bg-gray-50 grid gap-4 p-8 rounded-lg border'>
                        <figure>
                            <div className='border-2 border-[#3DB166] p-1 inline-block rounded-full'><img className='w-24 mx-auto rounded-full object-cover' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80" alt="" /></div>
                            <p className='mt-2 font-semibold color-one'>Sajeeb Dev</p>
                        </figure>
                        <div>
                            <h3 className='font-semibold mb-2'>West Valley College</h3>
                            <p className='text-gray-600'>Theres not much to say about YETI stainless steel tumblers that hasnt been said. Theres a reason theyre so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.</p>
                        </div>
                        <div>
                            <p className='font-semibold text-gray-600'>12.09.2019</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center bg-gray-50 grid gap-4 p-8 rounded-lg border'>
                        <figure>
                            <div className='border-2 border-[#3DB166] p-1 inline-block rounded-full'><img className='w-24 mx-auto rounded-full object-cover' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80" alt="" /></div>
                            <p className='mt-2 font-semibold color-one'>Sajeeb Dev</p>
                        </figure>
                        <div>
                            <h3 className='font-semibold mb-2'>West Valley College</h3>
                            <p className='text-gray-600'>Theres not much to say about YETI stainless steel tumblers that hasnt been said. Theres a reason theyre so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.</p>
                        </div>
                        <div>
                            <p className='font-semibold text-gray-600'>12.09.2019</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center bg-gray-50 grid gap-4 p-8 rounded-lg border'>
                        <figure>
                            <div className='border-2 border-[#3DB166] p-1 inline-block rounded-full'><img className='w-24 mx-auto rounded-full object-cover' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80" alt="" /></div>
                            <p className='mt-2 font-semibold color-one'>Sajeeb Dev</p>
                        </figure>
                        <div>
                            <h3 className='font-semibold mb-2'>West Valley College</h3>
                            <p className='text-gray-600'>Theres not much to say about YETI stainless steel tumblers that hasnt been said. Theres a reason theyre so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.</p>
                        </div>
                        <div>
                            <p className='font-semibold text-gray-600'>12.09.2019</p>
                        </div>
                    </div>
                </SwiperSlide>

                <div className='mt-10 border border-white'></div>
            </Swiper>
        </>
    );
};

export default ReviewSlider;