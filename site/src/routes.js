import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Componente from './components/menuadm'

//Admin

import LoginAdm from './pages/admin/loginAdm'

//Usuário
import Landing from './pages/landingpage'
import Login from './pages/usuario/login'


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='/admin/login' element={<LoginAdm />}/>
                <Route path='/componente' element={< Componente/>}/>
            </Routes>
        </BrowserRouter>
    )
} 