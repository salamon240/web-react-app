import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import enTranslation from './language/en.json';
import heTranslation from './language/he.json';
import { DataContext, DataProvider } from './context/Datacontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',  // default language
  resources: {
    en: {
      translation: enTranslation,
    },
    he: {
      translation: heTranslation,
    },
  },
});

root.render(
  <React.StrictMode>
    <DataProvider>

    <I18nextProvider i18n={i18next}>

    <App />
    </I18nextProvider>
    </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
