import './index.scss'
import '../../common/common.scss'
import { useNavigate  } from 'react-router-dom'
import storage from 'local-storage'


export default function MenuUsuario ({pagina}){
    const navigate = useNavigate ();


    function sairClick (){
        Storage.remove ('usuario-logado');
        navigate ('/')
    }


    return (
        <main className='componente-menu'>
            <div className='menu'>
                
                <div>
                    <img className='logo' src='/assets/images/logo-mae.png' alt=''/>
                </div>

                <div className='botoes'>
                  <a href='/home' className={pagina === 'home' ? 'selected' : ''}>Home</a>
                  <a href='/publicacao' className={pagina === 'publicacao' ? 'selected' : ''}>Publicações</a>
                  <a href='/publicacao' className={pagina === 'publicacao' ? 'selected' : ''}>Quero Publicar</a>
                  <a href='/indicacao' className={pagina === 'indicacao' ? 'selected' : ''}>Indicações</a>
                  <a href='/chat' className={pagina === 'chat' ? 'selected' : ''}>Chat com Psi</a>
                </div>



                <div className="botao-final">
                    <img className="bo-final"src='/assets/images/sair.png' alt='' />
                    <a href='#' onClick={sairClick} className="b-final">Voltar</a>
                </div>

                
            </div>

        </main>
    )
}
