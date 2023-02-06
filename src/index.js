import React from 'react';
import ReactDOM from 'react-dom/client';

import MainPage from './pages/MainPage';

import reportWebVitals from './reportWebVitals';

import './assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainPage />
);

reportWebVitals();