import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import AppClassComp from "./AppClassComp";
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <AppClassComp />
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
