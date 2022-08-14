import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { links, social } from '../utils/navbarData';
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;
  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainerRef.current.style.height = '10px';
  //   }
  // }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-logo'>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      isActive ? 'links active' : 'link'
                    }>
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
