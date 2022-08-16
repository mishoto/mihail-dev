import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_mihail_dev',
        'mihail_dev_form_id',
        form.current,
        '2iEUPOK-0DmNHXjcx',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.form}>
      <h3>Contact me</h3>
      <div className={style.form_inputs}>
        <label className={style.form_label}>name</label>
        <input className={style.form_input} type='text' name='name' />
      </div>
      <div className={style.form_inputs}>
        <label className={style.form_label}>email</label>
        <input className={style.form_input} type='email' name='email' />
      </div>
      <div className={style.form_inputs}>
        <label className={style.form_label}>message</label>
        <textarea rows='5' cols='57' name='message'></textarea>
      </div>

      <button className={style.form_input_btn} type='submit'>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
