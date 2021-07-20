import React from 'react';
import PropTypes from 'prop-types';

import './contact.scss';

const Contact = ({
  newFirstName,
  setNewFirstName,
  newEmail,
  setNewEmail,
  newSubject,
  setNewSubject,
  newMessage,
  setNewMessage,
  }) => (
    <div className="contact">
      <div className="contact__left">
        <h1 className="contact__title">Nous contacter</h1>
        <div className="contact__form">
        {/* CONTACT FORM */}
          <form 
            className="contact_form"
            onSubmit={(evt) => {
            evt.preventDefault();}}
          >
            <div 
              className="contact__form-items">
              <label 
                htmlFor="firstname"></label>
              <input 
                type="text" 
                name="firstname"
                id="firstanme"
                placeholder="Prénom"
                value={newFirstName}
                onChange={(evt) => setNewFirstName(evt.target.value)} 
                required  
              />
            </div>
            <div
              className="contact__form-items">
              <input
                type="mail" 
                name="mail"
                id="mail"
                placeholder="E-mail"
                value={newEmail}
                onChange={(evt) => setNewEmail(evt.target.value)} 
                required
              />
            </div>
            <div
              className="contact__form-items">
              <input
                type="subject"
                name="subject"
                id="subject"
                placeholder="Sujet"
                value={newSubject}
                onChange={(evt) => setNewSubject(evt.target.value)} 
                required
              />
            </div>
            <div 
              className="contact__form-items">
              <textarea
                name="message"
                id="message"
                placeholder="Votre message"
                cols="30" rows="5"
                value={newMessage}
                onChange={(evt) => setNewMessage(evt.target.value)}
                required>
              </textarea>
            </div>
            <div className="contact__form-container">
        {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="contact__form-button">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
        {/* TEAM CARD */}
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

Contact.propTypes ={
  newFirstName: PropTypes.string.isRequired,
  setNewFirstName: PropTypes.func.isRequired,
  newEmail: PropTypes.string.isRequired,
  setNewEmail: PropTypes.func.isRequired,
  newSubject: PropTypes.string.isRequired,
  setNewSubject: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  setNewMessage: PropTypes.func.isRequired,
}

export default Contact;
