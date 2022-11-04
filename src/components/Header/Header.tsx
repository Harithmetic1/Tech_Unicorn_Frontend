import React from 'react'

// Styles import
import './header.scss';


interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <>
            <div className="header-container">
                <div className="lhs">
                    <div className="breadcrumbs">
                        Home &gt; Shop
                    </div>
                    <div className="page-title">
                        <h1>Shop</h1>
                    </div>
                </div>
                <div className="rhs">
                    <div className="rect"></div>
                </div>
            </div>
        </>
    );
}