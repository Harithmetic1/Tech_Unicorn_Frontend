import React from 'react'

import longArrowLeft from '../../Assets/images/longArrowLeft.svg';

import './catalogue.scss';

interface CatalogueProps {

}

export const Catalogue: React.FC<CatalogueProps> = ({ }) => {
    return (
        <>
            <div className="catalogue-container">
                <div className="catalogue">
                    <div className="catalogue-title">
                        <h2>
                            Dresses
                        </h2>
                    </div>
                    <div className="catalogue-caption">
                        <p>
                            Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry.
                        </p>
                    </div>
                    <button>
                        <img src={longArrowLeft} alt="Arrow" />
                    </button>
                </div>
            </div>
        </>
    );
}