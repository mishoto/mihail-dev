import React from 'react'
import style from './Resume.module.css'
import resumeImg from '../../assets/mihail_resume.png'


const Resume = () => {
  return (
    
      
      <article className={style.resume_container}>
        <img className={style.resume_img} src={resumeImg} alt='resume' />
        
      </article>
    
  );
}

export default Resume