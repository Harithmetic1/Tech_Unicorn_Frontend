import React from 'react'

import './carousel.scss';

import like from '../../Assets/images/Like.svg';

interface CarouselCardProps {
    id?: number,
    title?: string,
    price?: string,
    category?: string,
    description?: string,
    image?: string
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
    id, title = "Queen’s Summer", price = "1000", category = "Bags", description = "Medium Shoulder Bag", image
}) => {
    return (
        <>
            <div className="carousel-card-container">
                <div className="carousel-card" style={{ backgroundImage: `url(${image})`, objectFit: "contain", backgroundPosition: "center center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    <div className="like">
                        <img src={like} alt="Add to likes" />
                    </div>
                </div>
                <div className="carousel-card-description">
                    <p className="category">
                        {category}
                    </p>
                    <h2 className='product-name'>
                        {title}
                    </h2>
                    <p className="product-desc">
                        {description}
                    </p>
                    <p className="price">
                        {"$" + price}
                    </p>
                </div>
            </div>
        </>
    );
}