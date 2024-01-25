import React from "react";
import ReactDOM from "react-dom";
import 'grapesjs/dist/css/grapes.min.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './styles/main.scss'

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
