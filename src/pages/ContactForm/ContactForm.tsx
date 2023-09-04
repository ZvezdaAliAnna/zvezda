import React, {useRef} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Button, TextField} from "@mui/material";
import emailjs from '@emailjs/browser';


const CSSContactForm = styled.div`
  background: url("/images/bg/bg-contactjpg.jpg") center no-repeat;
  background-size: cover;
  height: 100%;
  color: var(--white);
  padding: 200px 0 100px;

  h1 {
    color: #FFF;
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 14px;
  }
  
  .subtitle {
    color: #FFF;
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 225px;
    margin: 0 auto 20px;
  }

  form {
    max-width: 265px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-direction: column;
    
    * {
      color: #ffffff!important;
      border-color: #ffffff!important;
    } 
    button {
      margin: 30px auto 0;
      padding: 13px 40px;
    }
  }
`

const CSSContactFormInner = styled.div`
  border-radius: 30px;
  border: 3px solid #FFDA19;
  background: rgba(0, 0, 0, 0.70);
  padding: 25px 70px 80px;
  max-width: 500px;
  margin: 0 auto;
  
  @media only screen and (max-width: 800px) {
    padding: 25px ;

  }
`




const ContactForm = () => {
    const {t, i18n} = useTranslation();
    const form = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();
        // @ts-ignore
        console.log(form.current);

        // @ts-ignore
        emailjs.sendForm('service_k5i6le8', 'template_3usb7y4', form.current, 'F9iGpNxzz-ryr0t-U')
            .then((result) => {
                // @ts-ignore
                form.current.reset()
                alert("Letter send")
            }, (error) => {
                alert(error.text)
            });
    };

    return (
        <CSSContactForm>
            <div className="container">
                <CSSContactFormInner>
                    <h1>{t('contacts.h1')}</h1>
                    <div className="subtitle">{t('contacts.subtitle')}</div>
                    {/* @ts-ignore*/}
                    <form ref={form} onSubmit={sendEmail}>
                        <TextField name="name" label={t('contacts.name')} variant="outlined" fullWidth={true} required />
                        <TextField name="firm" label={t('contacts.firm')} variant="outlined" fullWidth={true} required />
                        <TextField name="phone" label={t('contacts.phone')} variant="outlined" fullWidth={true} inputProps={{pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"}} required />
                        <TextField name="email" label="E-mail" variant="outlined" fullWidth={true} type="email" required />
                        <TextField name="request" label={t('contacts.request')} variant="outlined" fullWidth={true} required/>
                        <Button variant="outlined" type="submit">{t('contacts.send')}</Button>
                    </form>
                </CSSContactFormInner>
            </div>
        </CSSContactForm>
    );
};

export default ContactForm;