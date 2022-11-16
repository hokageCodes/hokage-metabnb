import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function PageWrapper({ children }) {
    return (
        <div className="m-0 w-full">
            <Navbar />
            <div className="w-full min-h-[calc(100vh-195px)] overflow-auto pt-2 sm:pt-10 ">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageWrapper;
