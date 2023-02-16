import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './mainInputArea';
import reportWebVitals from './reportWebVitals';
import {Topbar} from './ui/topbar';
import { Mainbox } from './ui/mainbox';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Topbar></Topbar>
    
    <App></App>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
