/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import CarmenAvatar from 'src/assets/carmen.png';
import EmmanuelAvatar from 'src/assets/emmanuel.png';
import MelissaAvatar from 'src/assets/mélissa.png';
import QuentinAvatar from 'src/assets/quentin.png';
import HugoAvatar from 'src/assets/hugo.png';

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
            evt.preventDefault();
          }}
        >
          <div
            className="contact__form-items"
          >
            <label
              htmlFor="firstname"
            />
            <input
              className="contact__form-input"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Prénom"
              value={newFirstName}
              onChange={(evt) => setNewFirstName(evt.target.value)}
              required
            />
          </div>
          <div
            className="contact__form-items"
          >
            <input
              className="contact__form-input"
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
            className="contact__form-items"
          >
            <input
              className="contact__form-input"
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
            className="contact__form-items"
          >
            <textarea
              className="contact__form-textarea"
              name="message"
              id="message"
              placeholder="Votre message"
              cols="30"
              rows="5"
              value={newMessage}
              onChange={(evt) => setNewMessage(evt.target.value)}
              required
            />
          </div>
          <div className="contact__form-container">
            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="contact__form-button"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* TEAM CARD */}
    <div className="contact__right">
      <h2 className="contact__title">L'équipe</h2>
      <div className="contact__team">

        <div className="contact__team-items">
          <img src={CarmenAvatar} alt="carmen" className="contact__team-avatar carmen" />
          <h4 className="contact__team-name">Carmen</h4>
          <p className="contact__team-text">Product Owner & Git Master</p>
        </div>

        <div className="contact__team-items">
          <img src={EmmanuelAvatar} alt="emmanuel" className="contact__team-avatar emmanuel" />
          <h4 className="contact__team-name">Emmanuel</h4>
          <p className="contact__team-text">Lead-Dev Back</p>
        </div>

        <div className="contact__team-items">
          <img src={MelissaAvatar} alt="melissa" className="contact__team-avatar melissa" />
          <h4 className="contact__team-name ">Mélissa</h4>
          <p className="contact__team-text">Git Master</p>
        </div>

        <div className="contact__team-items">
          <img src={QuentinAvatar} alt="quentin" className="contact__team-avatar quentin" />
          <h4 className="contact__team-name">Quentin</h4>
          <p className="contact__team-text">Lead-Dev Front</p>
        </div>

        <div className="contact__team-items">
          <img src={HugoAvatar} alt="hugo" className="contact__team-avatar hugo" />
          <h4 className="contact__team-name">Hugo</h4>
          <p className="contact__team-text">Scrum Master</p>
        </div>
      </div>
    </div>
  </div>
);

Contact.propTypes = {
  newFirstName: PropTypes.string.isRequired,
  setNewFirstName: PropTypes.func.isRequired,
  newEmail: PropTypes.string.isRequired,
  setNewEmail: PropTypes.func.isRequired,
  newSubject: PropTypes.string.isRequired,
  setNewSubject: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  setNewMessage: PropTypes.func.isRequired,
};

export default Contact;
