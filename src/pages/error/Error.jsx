import React from 'react';
import { Error404 } from '../../components/components';
import style from './Error.module.css';

const Error = () => {
  return (
  <section className={style.error_section}>
    <Error404/>
    </section>
  )
};

export default Error;
