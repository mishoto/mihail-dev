import React from 'react'
import {Hero, Skills, ProjectReview, ContactContainer} from '../../components/components';
import style from './Home.module.css'

const Home = () => {
  return (
    <main className={style.home}>
      <section className={style.hero}>
        <Hero/>
      </section>
      <section className={style.skills}>
        <Skills/>
      </section>
      <section className={style.projects}>
        <ProjectReview/>
      </section>
      <section className={style.contact}>
        <ContactContainer/>
      </section>
    </main>
  );
}

export default Home