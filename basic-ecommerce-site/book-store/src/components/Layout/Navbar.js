import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    let activeStyle = {
        float: "right",
        backgroundColor: "04aa6d"
    };

    return (
        <div className={styles.main}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={styles.link} to="/books">Books</NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.link} to="/checkout">Checkout</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;