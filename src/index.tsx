import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
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

const rootApp = document.getElementById('root');

if (rootApp) {
  ReactModal.setAppElement(rootApp);
}

reportWebVitals();
