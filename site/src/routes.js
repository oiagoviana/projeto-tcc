import {BrowserRouter, Route, Routes} from 'react-router-dom'

//Admin

import LoginAdm from './pages/admin/LoginAdm' 
import Indicacoes from './pages/admin/indicacao'
import IndicacoesCard from './pages/admin/indicacaoCard'
import PsicologoCard from './pages/admin/psiCard'



//Usuário
import Landing from './pages/landingpage'
import Login from './pages/usuario/login'
import Indicacao from './pages/usuario/indicacao'


//Psi
import Formulario from './pages/psicologo/formulario'



export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/login' element={<Login />} />



                <Route path='/admin/login' element={<LoginAdm />}/>
                <Route path='/admin/indicacao' element={< Indicacoes/>}/>
                <Route path='/admin/indicacaoCard' element={< IndicacoesCard />} />
                
                
                <Route path='/admin/psicologoCard' element={<PsicologoCard/>}/>


                <Route path='/indicacao' element={<Indicacao/>}/>

                <Route path='/psi/formulario' element={<Formulario/>}/>

            </Routes>
        </BrowserRouter>
    )
} 