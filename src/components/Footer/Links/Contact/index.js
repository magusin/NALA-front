/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import CarmenAvatar from 'src/assets/carmen.png';
import EmmanuelAvatar from 'src/assets/emmanuel.png';
import MelissaAvatar from 'src/assets/mélissa.png';
import QuentinAvatar from 'src/assets/quentin.png';
import HugoAvatar from 'src/assets/hugo.png';

import './contact.scss';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const sendMSG = (serviceId, templateId, variables) => {
    window.emailjs.send(
      serviceId, templateId, variables,
    ).then((response) => {
      console.log('Message bien transmis !', response);
    }).catch((error) => console.error('Il y a eu une erreur. Voici quelques détails sur l\'erreur qui s\'est produite :', error));
  };

  const onSubmit = (data, result) => {
    alert(`Votre message a bien été envoyeé ${data.name}`);
    const templateId = 'template_xj3myti';
    const serviceId = 'service_fzvwdl5';
    sendMSG(serviceId, templateId,
      {
        from_name: data.name,
        message_html: data.comment,
        reply_to: data.email,
        subject_title: data.subject,
      });
    result.target.reset();
  };

  return (
    <div className="contact">
      <div className="contact__left">
        <h1 className="contact__title">Nous contacter</h1>
        <div className="contact__form">
          {/* CONTACT FORM */}
          <form
            className="contact_form"
            onSubmit={handleSubmit(onSubmit)}
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
                name="name"
                id="name"
                placeholder="Prénom"
                {...register('name', {
                  required: true,
                })}
              />
            </div>
            <div
              className="contact__form-items"
            >
              <input
                className="contact__form-input"
                type="email"
                name="email"
                id="mail"
                placeholder="E-mail"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
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
                {...register('subject', {
                  required: true,
                })}
              />
            </div>
            <div
              className="contact__form-items"
            >
              <textarea
                className="contact__form-textarea"
                name="comment"
                id="comment"
                placeholder="Votre message"
                cols="30"
                rows="5"
                {...register('comment', {
                  required: true,
                })}
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
};

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
