import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import projects from './projectReviewData.js';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import style from './ProjectReview.module.css'

const ProjectReview = () => {
  const [index, setIndex] = useState(0);
  const { name, techs, image, code ,text } = projects[index];

  const checkNumber = (number) => {
    if (number > projects.length - 1) {
      return 0;
    }
    if (number < 0) {
      return projects.length - 1;
    }
    return number;
  };
  const nextProject = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevProject = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * projects.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className={style.review}>
      <div className={style.img_container}>
        <img src={image} alt={name} className={style.project_img} />
      </div>
      <h4 className={style.project}>{name}</h4>
      <p className={style.techs}>{techs}</p>
      <p className={style.info}>{text}</p>
      <div className={style.button_container}>
        <button className={style.prev_btn} onClick={prevProject}>
          <FaChevronLeft />
        </button>
        <NavLink to='/projects'>
          <button className={style.random_btn}>more</button>
        </NavLink>
        <button className={style.random_btn}>
          <a href={code}>
            <GoMarkGithub />
          </a>
        </button>
        <button className={style.random_btn} onClick={randomPerson}>
          live demo
        </button>
        <button className={style.next_btn} onClick={nextProject}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default ProjectReview;
