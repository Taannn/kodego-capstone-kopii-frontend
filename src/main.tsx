import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import './assets/css/styles.css'
import './assets/css/hover.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
axios.defaults.baseURL = 'https://kopii-mp2.onrender.com/kopii';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
