import React from 'react';
import './Layout.css';

const Layout = (props) => {
    return (
        <>
            <div className='layout'>Layout</div>
            <main>{props.children}</main>
        </>
    );
};

export default Layout;