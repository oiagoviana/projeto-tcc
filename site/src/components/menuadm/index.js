import './index.scss'
import '../../common/common.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

export default function MenuAdm({pagina}){
    const navigate = useNavigate();


    function sairClick(){
        storage.remove('usuario-logado');
        navigate('/');
    }

    

    return(
        <main className="comp-menu">
            <div className="card-menu">
                <div className='div-header'>
                    <img className= "logo" src='/assets/images/logo-mae.png' alt='' />
                </div>

                <div className="botoes">
                    <a href='/admin/home' className={pagina === 'home' ? 'selected' : ''}>Home</a>
                    <a href='/admin/publicacaoCard' className={pagina === 'publicacao' ? 'selected' : ''}>Publicações</a>
                    <a href='/admin/psicologoCard' className={pagina === 'profissionais' ? 'selected' : ''}>Profissionais</a>
                    <a href='/admin/indicacaoCard' className={pagina === 'indicacao' ? 'selected' : ''}>Indicações</a>
                </div>

                <div className="botao-final">
                    <img className="bo-final"src='/assets/images/sair.png' alt='' />
                    <a href='#' onClick={sairClick} className="b-final">Sair</a>
                </div>


                </div>
        </main>
    );
}