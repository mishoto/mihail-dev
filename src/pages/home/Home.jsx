import React from 'react'
import ProjectReview from '../../components/projectReview/ProjectReview';
import style from './Home.module.css'

const Home = () => {
  return (
    <main className={style.home}>
      <section className={style.hero}>
        <p>hero section</p>
      </section>
      <section className={style.skills}>
        <p>skills section</p>
      </section>
      <section className={style.projects}>
        <ProjectReview/>
      </section>
      <section className={style.contact}>
        <p>contact section</p>
      </section>
    </main>
  );
}

export default Home