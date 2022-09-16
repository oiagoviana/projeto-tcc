import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Componente from './components/menuadm'

//Admin
import Indicações from './pages/admin/indicacao'
import LoginAdm from './pages/admin/LoginAdm'

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
                <Route path='/admin/indicacoes' element={< Indicações/>}/>
            </Routes>
        </BrowserRouter>
    )
} 