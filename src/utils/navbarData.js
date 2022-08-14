import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
];

const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/mihail-mihailov-101/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/mishoto',
    icon: <GoMarkGithub />,
  },
];

export { links, social };
