import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { links, social } from '../../utils/navbarData';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.svg';
import styles from './Navbar.module.css'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '10px';
    }
  }, [showLinks]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_center}>
        <div className={styles.nav_logo}>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <button
            className={styles.nav_toggle}
            onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className={styles.links_container} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      isActive ? `${styles.links} ${styles.active}` : `${styles.links}`
                    }>
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={styles.social_icons}>
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li className={styles.social_icons_li} key={id}>
                <a className={styles.social_icons_a} href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
