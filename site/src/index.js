import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Routes from './routes';
import Login from './pages/usuario/login'
import Cadastro from './pages/usuario/cadastro'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Routes></Routes>
  </React.StrictMode>
);


