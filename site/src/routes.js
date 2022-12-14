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
import PublicacaoCompleta from './pages/usuario/publicompleta'
import PerfilUser from './pages/usuario/perfil'
import PublicacaoUsuario from './pages/usuario/publicacao'
import Chat from './pages/usuario/chat'
import EnviarSolicitacao from './pages/usuario/enviarSolicitacao'
import FeedPublicacao from './pages/usuario/feedPublicacao'

//Psi
import Formulario from './pages/psicologo/formulario'
import LoginPsi from './pages/psicologo/loginPsi'
import ChatPsi from './pages/psicologo/chat'
import PerfilPsi from './pages/psicologo/perfil'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/usuario/cadastro' element={<Cadastro />} />
                <Route path='/usuario/login' element={<Login />} />
                <Route path='/usuario/perfil' element={<PerfilUser />} />
                <Route path='/usuario/publicacao' element={<PublicacaoUsuario/>}/>
                <Route path='/usuario/publicacao/:idParam' element={<PublicacaoUsuario/>}/>
                <Route path='/usuario/indicacao' element={<Indicacao />} />
                <Route path='/usuario/publicacaocompleta/:idParam' element={<PublicacaoCompleta />} />
                <Route path='/usuario/indicacao' element={<Indicacao />} />
                <Route path='/usuario/indicacao/:id' element={<Indicacao/>}/>
                <Route path='/usuario/chat' element={<Chat />} />
                <Route path='/usuario/enviarsolicitacao' element={<EnviarSolicitacao />} />
                <Route path='/usuario/feedpublicacao' element={<FeedPublicacao />} />



                <Route path='/psi/login' element={<LoginPsi/>}/>
                <Route path='/psi/formulario' element={<Formulario />} />
                <Route path='/psi/chat' element={<ChatPsi />} />
                <Route path='/psi/perfil' element={<PerfilPsi />} />



                <Route path='/admin/home' element={<HomeAdm/>}/>
                <Route path='/admin/login' element={<LoginAdm />}/>
                <Route path='/admin/indicacao' element={< Indicacoes/>}/>
                <Route path='/admin/indicacao/:idParam' element={< Indicacoes/>}/>
                <Route path='/admin/indicacaoCard' element={< IndicacoesCard />} />
                <Route path='/admin/psicologo/:idParam' element={<Psicologo/>}/>
                <Route path='/admin/psicologoCard' element={<PsicologoCard />} />
                <Route path='/admin/publicacaoCard' element={<PublicacaoCard />} />
                <Route path='/admin/publicacao/:idParam' element={<Publicacao />} />
                
            
    
                

            </Routes>
        </BrowserRouter>
    )
} 