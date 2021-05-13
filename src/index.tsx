import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppStateProvider } from './context/state';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById('root')
);

reportWebVitals();
