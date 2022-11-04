import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialCard } from './TestimonialCard';

import 'swiper/css';
import './testimonial.scss';


interface TestimonialProps {

}

const testimonialCards: (number)[] = [
    0, 1, 2, 3
]

export const Testimonial: React.FC<TestimonialProps> = ({ }) => {
    return (
        <>
            <Swiper
                spaceBetween={5}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    testimonialCards.map(testimony => {
                        return (
                            <SwiperSlide>
                                <TestimonialCard />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}