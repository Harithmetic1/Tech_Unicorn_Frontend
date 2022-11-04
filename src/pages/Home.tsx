import React from 'react'
import { Layout } from '../Layout/Layout';

import leftArrow from '../Assets/images/left-arrow.svg'

import '../Assets/styles/home.scss';
import { Catalogue } from '../components/catalogue/Catalogue';
import { Carousel } from '../components/carousel/Carousel';
import { DiscountCard } from '../components/discount/DiscountCard';
import { CarouselCard } from '../components/carousel/CarouselCard';
import { Testimonial } from '../components/testimonial/Testimonial';


const catalogueArray: (object)[] = [
    { key: 0, catalogueName: "Dresses", catalogueCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { key: 1, catalogueName: "Dresses", catalogueCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { key: 2, catalogueName: "Dresses", catalogueCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { key: 3, catalogueName: "Dresses", catalogueCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { key: 4, catalogueName: "Dresses", catalogueCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { key: 5, catalogueName: "Dresses", catalogueCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
]

const bestSeller: (number)[] = [
    0, 1, 2, 3
]


export const Home: React.FC = () => {


    return (
        <>
            <Layout>
                <div className="home-container">
                    <div className="lhs">
                        <h1>
                            Sort out Your Spring Look
                        </h1>
                        <p>
                            We will help to develop every smallest thing into a big one for your company.
                        </p>
                        <button>
                            Shop <span><img src={leftArrow} alt="left arrow" /></span>
                        </button>
                    </div>
                    <div className="rhs">
                        <div className="rect"></div>
                        <div className="rect"></div>
                    </div>
                </div>
                <section className='second-section'>
                    {
                        catalogueArray.map(catalogue => {
                            return (
                                <Catalogue {...catalogue} />
                            )
                        })
                    }
                </section>
                <section className="third-section">
                    <div className="new-arrival-container">
                        <div className="new-arrival-title">
                            <h1>
                                New Arrival
                            </h1>
                            <span>
                                See All
                            </span>
                        </div>
                        <Carousel />
                    </div>
                </section>
                <section className='fourth-section'>
                    <DiscountCard />
                </section>
                <section className='fifth-section'>
                    <div className="section-header">
                        <h2>
                            Best Seller
                        </h2>
                    </div>
                    <div className="best-seller-container">
                        {
                            bestSeller.map(seller => {
                                return (
                                    <CarouselCard />
                                )
                            })
                        }
                    </div>
                </section>
                <section className='sixth-section'>
                    <div className="title">
                        <h2>
                            What Our Customer Says
                        </h2>
                    </div>
                    <Testimonial />
                </section>
            </Layout>
        </>
    );
}