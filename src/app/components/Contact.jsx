"use client"
import React, {useState} from 'react'
import "./contact.css"

const Contact = () => {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState ({
      name : "",
      email : "",
      tel : "",
      subject : "",
      message : "",
  });

  const [isSuccess, setIsSucces] = useState(false)

  const closeSend = (e) => {
    setIsSucces(false)
  }

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      console.log(formData);
  
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log("Message envoyé avec succès !");
          setIsSucces(true)
          setFormData({
            name: "",
            email : "",
            subject: "",
            tel: "",
            message: "",
          });
        } else {
          console.error(
            "Une erreur s'est produite lors de l'envoi du formulaire :",
            response.status, 
            response.statusText         
            );
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de l'envoi du formulaire :",
          error
        );
      } finally {
        setIsSubmitting(false);
      }
    };
  return (
    <section className="contact_page_container">
        <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.561064199369!2d3.0105951767892947!3d49.587168149144524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e873301b0e4265%3A0xa0cde58d7a37fc3f!2sac%20noyonnais!5e0!3m2!1sfr!2sfr!4v1728565325172!5m2!1sfr!2sfr"></iframe>
        <h1>Besoin d'une information ou un renseignement, contactez-nous</h1>
      <section className='contact_section'>
      <aside className='aside_form'>
      <div className='info_contact'>
      <img alt='icon maison' src='./house-solid.svg'></img>
      <p>ADRESSE : Rue du Chanoine Levasseur, 60400 Noyon </p>
      </div>
      <div className='info_contact'>
      <img alt='icon envelope' src='./envelope-solid.svg'></img>
      <p>EMAIL : ac.noyonnais@gmail.com </p>
      </div>
      <div className='info_contact'>
      <img alt='icon telephone' src='./phone-solid.svg'></img>
      <p>TEL : 06.81.95.31.66</p>
      </div>
      </aside>
      <section className='container_form'>
      <section className='forms'>
      <form className='form_content' onSubmit={handleSubmit}>
      <div className='name'>
      <label htmlFor='name'></label>
      <input id='name' type='text' name='name' value={formData.name} placeholder='Nom / Prénom' required onChange={handleChange}></input>
    </div>
    <div className='email'>
          <label htmlFor='email'></label>
          <input autoComplete="email" id='email' type='email' name='email' value={formData.email} placeholder='Email' required onChange={handleChange}></input>
        </div>
    <div className='tel'>
      <div className='tel'>
        <label htmlFor='tel'></label>
        <input id='tel' type='text' name='tel' value={formData.tel} placeholder='Téléphone' required onChange={handleChange}></input>
      </div>
    </div>
        <div className='subject'>
        <label htmlFor="subject"></label>
        <input type="text" id="subject" name="subject" value={formData.subject} placeholder="Objet" onChange={handleChange}></input>
        </div>
        <div className='message'>
          <label htmlFor='message'></label>
          <textarea id='message' rows="10" name='message' value={formData.message} placeholder='Message' maxLength={1000} onChange={handleChange}></textarea>
        </div>
        <button type='submit' className='form_button'>{isSubmitting ? <>En cours...</> : "Envoyer"}</button>
        </form>
      </section>
      </section>
      </section>
    </section>
  )
}

export default Contact