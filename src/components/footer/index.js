import React from 'react';
import Link from "../link";
import styles from './index.module.css';
import logo from '../../images/blue-origami-bird-flipped.png';
import getNavigation from '../../utils/navigation';


const Footer = () => {
    const links = getNavigation();
    return (
        <footer className={styles.footer}>
            <div>
                {
                    links.map(navElement => {
                        return (
                            <Link
                                key={navElement.title}
                                href={navElement.link}
                                title={navElement.title}
                                type="header"
                            />
                        )
                    })
                }
                <img className={styles.logo} src={logo} alt="" />
                <p className={styles.university}>Software University @ 2020</p>
            </div>
        </footer>
    );
};

export default Footer;