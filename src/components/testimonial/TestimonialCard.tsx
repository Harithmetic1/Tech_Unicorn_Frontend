import React from 'react'

interface TestimonialCardProps {

}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ }) => {
    return (
        <>
            <div className="testimonial-container">
                <div className="testimonial">
                    <div className="circle"></div>
                    <p className='testimonial-content'>
                        Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company
                    </p>
                    <h4 className='testimonial-name'>
                        Shalima Hayden
                    </h4>
                    <p className="testimonial-title">
                        Product Designer
                    </p>
                </div>
            </div>
        </>
    );
}