import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import containers
import Home from 'src/containers/Home';
import Connexion from 'src/containers/Connexion';
import Picture from 'src/containers/Picture';
import Categories from 'src/containers/Categories';
import TopLove from 'src/containers/TopLove';

// == Import components
import Contact from 'src/containers/Contact';
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import CGU from 'src/components/Footer/Links/CGU';
import LegaleMentions from 'src/components/Footer/Links/LegalesMentions';
import AnimalDefense from 'src/components/Footer/Links/AnimalDefense';
import Profil from 'src/containers/Profil';
import Aime from 'src/components/Aime';
import Notification from 'src/components/Notification';
import Category from 'src/containers/Categories/Category';

// == Import asset and css
import './app.scss';

// == Composant
const App = ({
  submitToken,
  isLogged,
  darkMode,
}) => {
  useEffect(
    () => {
      // Local Storage
      const screenMode = localStorage.getItem('darkMode');
      const token = localStorage.getItem('myToken');
      const nickname = localStorage.getItem('nickname');
      const id = localStorage.getItem('id');
      const email = localStorage.getItem('email');
      const firstname = localStorage.getItem('firstname');
      const lastname = localStorage.getItem('lastname');
      const password = localStorage.getItem('password');
      submitToken(token, nickname, id, email, firstname, lastname, password, screenMode);
    }, [],
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/categories/:id" component={Category} />
        <Route path="/toplove" component={TopLove} />
        <Route path="/connexion" component={Connexion} />
        {isLogged && <Route path="/profil" component={Profil} />}
        {isLogged && <Route path="/notifications" component={Notification} />}
        {isLogged && <Route path="/tags" component={Aime} />}
        <Route path="/post/:id" component={Picture} />
        <Route path="/protection-animale" component={AnimalDefense} />
        <Route path="/contact" component={Contact} />
        <Route path="/mentions-legales" component={LegaleMentions} />
        <Route path="/cgu" exact component={CGU} />
        <Route path="/protection-animale" component={AnimalDefense} />
        <Route component={Error} />
      </Switch>
      <Footer />

    </div>
  );
};

App.propTypes = {
  submitToken: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
