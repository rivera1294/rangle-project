import React from "react";
import { render } from "react-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


render(<App />, document.getElementById("root"));



registerServiceWorker();
