import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header />
          <AppRouter />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
