import React from 'react'

import leftArrow from '../../Assets/images/left-arrow-secondary.svg';

import './discountCard.scss';

interface DiscountCardProps {

}

export const DiscountCard: React.FC<DiscountCardProps> = ({ }) => {
    return (
        <>
            <div className="discount-container">
                <div className="discount-title">
                    <p>
                        March Discount
                    </p>
                </div>
                <div className="discount-amount">
                    <h2>
                        Up to 70% off
                    </h2>
                </div>
                <button>
                    Got it <span><img src={leftArrow} alt="left arrow" /></span>
                </button>
            </div>
        </>
    );
}