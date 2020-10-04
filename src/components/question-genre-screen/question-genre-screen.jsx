import React from "react";
import PropTypes from "prop-types";

const QuestionGenreScreen = (props) => {
  const {tracksCount} = props;

  const getTracksContent = (count) => {
    let tracks = [];
    let className = `track__button`;

    for (let i = 0; i < count; i++) {
      tracks.push(
          <div className="track" key={`tracks-${i + 1}`}>
            <button className={i === 2 ? `${className} ${className}--pause` : `${className} ${className}--play`} type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i + 1}`} id={`answer-${i + 1}`} />
              <label className="game__check" htmlFor={`answer-${i + 1}`}>Отметить</label>
            </div>
          </div>
      );
    }

    return tracks;
  };

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks">
          {getTracksContent(tracksCount)}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

QuestionGenreScreen.propTypes = {
  tracksCount: PropTypes.number.isRequired
};

export default QuestionGenreScreen;
