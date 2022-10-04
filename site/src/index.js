import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Routes from './routes';
import Login from './pages/usuario/login'
import Cadastro from './pages/usuario/cadastro'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Formulario from './pages/psicologo/formulario';
import LoginPsi from './pages/psicologo/loginPsi';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
<<<<<<< HEAD
    <Formulario/>
=======
    <Routes></Routes>
>>>>>>> bc7f29b8b6e76a32f3b5682aabda179a5a479098
  </React.StrictMode>
);


