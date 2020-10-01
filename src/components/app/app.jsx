import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import LoginScreen from "../login-screen/login-screen";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";
import WinScreen from "../win-screen/win-screen";
import LoseScreen from "../lose-screen/lose-screen";

const App = (props) => {
  const {errorsCount, artists, tracksCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtistScreen artists={artists} />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenreScreen tracksCount={tracksCount} />
        </Route>
        <Route exact path="/win">
          <WinScreen />
        </Route>
        <Route exact path="/lose">
          <LoseScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  tracksCount: PropTypes.number.isRequired
};

export default App;
