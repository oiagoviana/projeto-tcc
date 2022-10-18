import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Routes from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Routes/>
  </React.StrictMode>
);


