import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fontawesome/css/fontawesome.css';
import './styles/fontawesome/css/solid.css';
import './styles/fontawesome/css/brands.css';
import './index.scss';

import './locales/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
