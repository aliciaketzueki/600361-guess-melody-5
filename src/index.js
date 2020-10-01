import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  ERRORS_COUNT: 3,
};

const artists = [`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`];
const tracksCount = 4;

ReactDOM.render(
    <App errorsCount={Settings.ERRORS_COUNT} artists={artists} tracksCount={tracksCount} />,
    document.querySelector(`#root`)
);
