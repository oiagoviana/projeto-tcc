import './index.scss'
import MenuUsuario from '../../../components/menuusuario'

export default function PerfilPsi() {
    return (
        <main className='page-perfil-psicologo'>
            <div>
                <MenuUsuario pagina='perfil' />
            </div>
            <div className='container-principal-direito'>
                <div className='container-header'>
                    <div className='container-bola'>
                        <p>P</p>
                    </div>
                    <div className='container-email'>
                        <h3>Psi</h3>
                        <p>Psi@psi.com.br</p>
                    </div>
                </div>
                <div className='container-meio'>
                    <div className='container-credenciais'>
                        <p>(11) 95765-8653</p>
                        <p>admin@admin.com</p>
                        <p>01/01/2001</p>
                        <p>000000000-0</p>
                        <p>número crp</p>
                    </div>
                    <div className='container-verificacoes'>

                        <div className='container-botoes-mensagens'>
                            <div className='botao-mensagens'>
                                <p>Mensagens Pendentes</p>
                            </div>
                            <div className='botao-publicacoes'>
                                <p>Minhas Publicações</p>
                            </div>
                        </div>

                        <table>
                            <thead>
                                <td>
                                    <th className='container-nome'>Nome:</th>
                                    <th className='container-telefone'>Telefone:</th>
                                    <th className='container-analise'>Analisar:<img src='/assets/images/lixo-limpar-tudo.svg' alt='img-lixo' /></th>
                                </td>
                            </thead>

                            <tbody>
                                <tr className='corpo-teste'>
                                    <td className='nome-solicitante'>Admin</td>
                                    <td className='telefone-solicitante'>(11)97656-5332</td>
                                    <td className='analise-solicitante'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                </tr>
                                <tr className='corpo-teste'>
                                    <td className='nome-solicitante'>Admin</td>
                                    <td className='telefone-solicitante'>(11)97656-5332</td>
                                    <td className='analise-solicitante'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                </tr>
                                <tr className='corpo-teste'>
                                    <td className='nome-solicitante'>Admin</td>
                                    <td className='telefone-solicitante'>(11)97656-5332</td>
                                    <td className='analise-solicitante'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                </tr>
                                <tr className='corpo-teste'>
                                    <td className='nome-solicitante'>Admin</td>
                                    <td className='telefone-solicitante'>(11)97656-5332</td>
                                    <td className='analise-solicitante'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                </tr>
                                <tr className='corpo-teste'>
                                    <td className='nome-solicitante'>Admin</td>
                                    <td className='telefone-solicitante'>(11)97656-5332</td>
                                    <td className='analise-solicitante'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                </tr>
                                <tr className='corpo-teste'>
                                    <td className='nome-solicitante'>Admin</td>
                                    <td className='telefone-solicitante'>(11)97656-5332</td>
                                    <td className='analise-solicitante'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </main>
    )
}
