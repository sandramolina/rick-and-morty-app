import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
// eslint-disable-next-line react/jsx-filename-extension
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
