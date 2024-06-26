import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import Heading from '../Heading';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = ({ testimonials }) => {
    return (
        <>
            <div id='Testimonials' className="bg-gray-50 px-2 lg:px-20 py-10">
                <div>
                    <div className='px-5'>

                        {/* Heading */}
                        <Heading title="Testimonials" />
                        <Swiper
                            modules={[Pagination, FreeMode, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={3}
                            autoplay={true}
                            pagination={{ clickable: true }}
                            freeMode={true}
                            loop={true}
                            className="testimonials-slider swiper-container"
                            breakpoints={{
                                // when window width is >= 0px
                                0: {
                                    slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 1,
                                },
                                // when window width is >= 1280px
                                1280: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {testimonials && testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                    <div className="testimonial-item bg-white drop-shadow-md px-5 lg:px-10 mt-3 mb-10 lg:mb-14 h-[500px] flex" data-aos="fade-up" data-aos-delay="100">
                                        <div className='my-auto'>
                                            <img src={testimonial.image.url} className="testimonial-img rounded-full h-24 mx-auto shadow-lg" alt="" />
                                            <h3 className='text-center mt-3 font-bold text-lg text-gray-500'>{testimonial.name}</h3>
                                            <h4 className='text-center text-salad-100 text-red-400 font-bold'>{testimonial.position}</h4>
                                            <p className='text-center mt-3 text-base'>
                                                {testimonial.review}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials