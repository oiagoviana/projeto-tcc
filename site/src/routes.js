import {BrowserRouter, Route, Routes} from 'react-router-dom'

//Admin



import LoginAdm from './pages/admin/LoginAdm' 
import HomeAdm from './pages/admin/Home'

import Indicacoes from './pages/admin/indicacao'
import IndicacoesCard from './pages/admin/indicacaoCard'
import Psicologo from './pages/admin/psi'
import PsicologoCard from './pages/admin/psiCard'
import Publicacao from './pages/admin/publi'
import PublicacaoCard from './pages/admin/publiCard'

//Usuário
import Landing from './pages/landingpage'
import Login from './pages/usuario/login'
import Indicacao from './pages/usuario/indicacao'
import Cadastro from './pages/usuario/cadastro'

import MenuUsuario from './components/menuusuario'


import PublicacaoCompleta from './pages/usuario/publicompleta'


import PerfilUser from './pages/usuario/perfil'




import PublicacaoUsuario from './pages/usuario/publicacao'




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

                <Route path='/usuario/perfil' element={<PerfilUser />} />

                <Route path='/usuario/publicacao' element={<PublicacaoUsuario/>}/>

                <Route path='/usuario/indicacao' element={<Indicacao />} />





                <Route path='/admin/home' element={<HomeAdm/>}/>
                <Route path='/admin/login' element={<LoginAdm />}/>
                <Route path='/admin/indicacao' element={< Indicacoes/>}/>
                <Route path='/admin/indicacao/:idParam' element={< Indicacoes/>}/>
                <Route path='/admin/indicacaoCard' element={< IndicacoesCard />} />
                <Route path='/admin/psicologo/:idParam' element={<Psicologo/>}/>
                <Route path='/admin/psicologoCard' element={<PsicologoCard />} />
                <Route path='/admin/publicacaoCard' element={<PublicacaoCard />} />
                <Route path='/admin/publicacao/:idParam' element={<Publicacao />} />

                <Route path='/publicacaocompleta' element={<PublicacaoCompleta />} />

                




            
           
        
                <Route path='/indicacao' element={<Indicacao/>}/>
                <Route path='/indicacao/:id' element={<Indicacao/>}/>



                <Route path='/psi/login' element={<LoginPsi/>}/>
                <Route path='/psi/formulario' element={<Formulario/>}/>

                <Route path='/componente/menuusuario' element={<MenuUsuario/>}/>


            </Routes>
        </BrowserRouter>
    )
} 