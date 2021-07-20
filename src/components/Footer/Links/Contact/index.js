import React from 'react';

import './contact.scss';

const Contact = () => (
  <div className="contact">
    <div className="contact__left">
      <h1 className="contact__title">Nous contacter</h1>
      <div className="contact__form">
        <form action="get" className="contact_form">
          <div className="contact__form-items">
            <label htmlFor="firstname"></label>
            <input type="text" name="firstname" id="firstanme" placeholder="Prénom" required/>
          </div>
          <div  className="contact__form-items">
            <input type="mail" name="mail" id="mail" placeholder="E-mail" required />
          </div>
          <div  className="contact__form-items">
            <input type="subject" name="subject" id="subject" placeholder="Sujet" required/>
          </div>
          <div  className="contact__form-items">
            <textarea name="message" id="message" placeholder="Votre message" cols="30" rows="5" required></textarea>
          </div>
          <div className="contact__form-container">
            <button type="button" className="contact__form-button">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
      <div className="contact__right">
        <h3 className="contact__title">L'équipe</h3>
          <div className="contact__team">
            <div className="contact__team-items">
              <i className="bi bi-person-circle"></i>
              <h4>Carmen</h4>
              <p>Product Owner & Git Master</p>
            </div>
            <div className="contact__team-items">
              <i className="bi bi-person-circle"></i>
              <h4>Emmanuel</h4>
              <p>Lead-Dev Back</p>
            </div>
        
            <div className="contact__team-items">
              <i className="bi bi-person-circle" ></i>
              <h4>Mélissa</h4>
              <p>Git Master</p>
            </div>
            <div className="contact__team-items">
              <i className="bi bi-person-circle"></i>
              <h4>Quentin</h4>
              <p>Lead-Dev Front</p>
            </div>
            <div className="contact__team-items">
              <i className="bi bi-person-circle"></i>
              <h4>Hugo</h4>
              <p>Scrum Master</p>
            </div>
          </div>
      </div>
  </div>
);

export default Contact;
