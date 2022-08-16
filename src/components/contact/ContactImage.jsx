import React from 'react'
import style from './ContactImage.module.css'
import email_image from '../../images/email_image.png'

const ContactImage = () => {
  return (
    <div className={style.form_img}>
      <img src={email_image} alt='email' />
    </div>
  );
}

export default ContactImage