import React from 'react'

import '../Assets/styles/main.scss'
import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}