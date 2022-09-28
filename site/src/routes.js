import {BrowserRouter, Route, Routes} from 'react-router-dom'

//Admin

import LoginAdm from './pages/admin/LoginAdm' 
import Indicacoes from './pages/admin/indicacao'
import IndicacoesCard from './pages/admin/indicacaoCard'



//Usuário
import Landing from './pages/landingpage'
import Login from './pages/usuario/login'
import Indicacao from './pages/usuario/indicacao'




export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/login' element={<Login />} />



                <Route path='/admin/login' element={<LoginAdm />}/>
                <Route path='/admin/indicacao' element={< Indicacoes/>}/>
                <Route path='/admin/indicacaoCard' element={< IndicacoesCard/>}/>



                <Route path='/indicacao' element={<Indicacao/>}/>
            </Routes>
        </BrowserRouter>
    )
} 