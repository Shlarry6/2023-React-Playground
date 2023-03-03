import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link style={{color: 'white', textDecoration: 'none'}} to="/" exact>BOOK STORE</Link>
        </div>
    );
};

export default Header;