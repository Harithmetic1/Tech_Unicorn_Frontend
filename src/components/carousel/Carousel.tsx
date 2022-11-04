import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselCard } from './CarouselCard';

import 'swiper/css';
import './carousel.scss';

interface CarouselProps {

}

const carouselCards: (number)[] = [1, 2, 3, 4, 5, 6, 7];

export const Carousel: React.FC<CarouselProps> = ({ }) => {
    return (
        <>
            <Swiper
                spaceBetween={5}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    carouselCards.map(carousel => {
                        return (
                            <SwiperSlide>
                                <CarouselCard />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}