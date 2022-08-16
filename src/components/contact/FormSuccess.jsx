import React from 'react';
import style from './FormSuccess.module.css';
import successImage from '../../images/success_image.svg';

const FormSuccess = () => {
  return (
    <div>
      <h1 className={style.form_success}>We have received your request!</h1>
      <img
        className={style.form_img_success}
        src={successImage}
        alt='success-image'
      />
    </div>
  );
};

export default FormSuccess;
