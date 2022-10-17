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
import Cadastro from './pages/usuario/cadastro'
import Publicacao from './pages/usuario/publicacao'

import ComentUser from './components/comentarioUsuario'


//Psi
import Formulario from './pages/psicologo/formulario'
import LoginPsi from './pages/psicologo/loginPsi'



export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/usuario/cadastro' element={<Cadastro />} />
                <Route path='/usuario/login' element={<Login />} />
                <Route path='/usuario/publicacao' element={<Publicacao/>}/>
                <Route path='/usuario/comentario' element={<ComentUser/>}/>




                <Route path='/admin/login' element={<LoginAdm />}/>
                <Route path='/admin/indicacao' element={< Indicacoes/>}/>
                <Route path='/admin/indicacao/:idParam' element={< Indicacoes/>}/>
                <Route path='/admin/indicacaoCard' element={< IndicacoesCard />} />
                
                
                <Route path='/admin/psicologoCard' element={<PsicologoCard/>}/>


                <Route path='/indicacao' element={<Indicacao/>}/>
                <Route path='/indicacao/:id' element={<Indicacao/>}/>


               
                <Route path='/psi/login' element={<LoginPsi/>}/>
                <Route path='/psi/formulario' element={<Formulario/>}/>

            </Routes>
        </BrowserRouter>
    )
} 