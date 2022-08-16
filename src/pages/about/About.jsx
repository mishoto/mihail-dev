import React from 'react';
import Resume from '../../components/resume/Resume';
import style from './About.module.css';
import resumePdf from '../../assets/mihail_cv.pdf';
import {FaDownload} from 'react-icons/fa';


const About = () => {
  return (
    <main className={style.resume_container}>
      <section className={style.resume}>
        <Resume />
      </section>
      
        <button className={style.btn_download}>
          <a href={resumePdf} className={style.icon}>
            <FaDownload />
          </a>
        </button>
      
    </main>
  );
};

export default About;
