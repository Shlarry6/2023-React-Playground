import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

const Layout = (props) => {
    return (
        <>
            <Header />
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default Layout;