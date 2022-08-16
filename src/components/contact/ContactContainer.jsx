import React, {useState} from 'react'
import {ContactForm, ContactImage, FormSuccess} from './contact'
import style from './ContactContainer.module.css';

const ContactContainer = () => {
  const[isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = ()=>{
    setIsSubmitted(true);
  }

  return (
    <article className={style.form_container}>
      <div className={style.form_content_left}>
        <ContactImage />
      </div>
      <div className={style.form_content_right}>
        <ContactForm submitForm={submitForm} />
      </div>
    </article>
  );
}

{
  /* {isSubmitted ? (
          <FormSuccess />
        ) : (
          <ContactForm submitForm={submitForm} />
        )} */
}

export default ContactContainer