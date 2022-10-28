import './index.scss'
import MenuUsuario from '../../../components/menuusuario'

export default function PerfilUser() {
    return (
        <main className='page-perfil-user'>
            <div>
                <MenuUsuario pagina='perfil' />
            </div>

            <div className='container-meio'>
                <div className='container-perfil'>
                    <div className='circulo-inicial'>
                        <p>N</p>
                    </div>
                    <div className='container-square'>
                        <div className='container-credenciais'>
                            <h3>Nome do Usuário</h3>
                            <p>usuario@usuario.com</p>
                        </div>

                        <div className='container-solicitacoes'>
                            <div className='container-botoes-mensagens'>
                                <div className='container-mensagens'>
                                    <p>Mensagens Pendentes</p>
                                </div>
                                <div className='container-publicacoes'>
                                    <p>Minhas Publicações</p>
                                </div>
                            </div>
                            <div>{/*psicologo solicitado*/}</div>
                            <div>{/*cards em análise*/}</div>
                        </div>
                    </div>
                </div>
            </div>

            <img className='image-logo' src='/assets/images/logo-mae.png' alt='img-logo' />
        </main>
    )
}