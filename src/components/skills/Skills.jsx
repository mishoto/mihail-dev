import React, { useState } from 'react';
import skillsIcons from './skillsIcons.js';
import style from './Skills.module.css';

const Skills = () => {
  const icons = skillsIcons.map((item) => {
    return (
      <ul key={item.id} >
        <li className={style.icons}>{item.icon}</li>
      </ul>
    );
  });

  return <article className={style.icons_conteiner}>{icons}</article>;
};

export default Skills;
