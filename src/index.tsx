import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/quicksand/Quicksand_Book.otf';
import './assets/fonts/comfortaa/comfortaa.ttf';
import './assets/fonts/comfortaa/comfortaa_bold.ttf';
import './assets/fonts/louis_george_caf/louis_george.ttf';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
