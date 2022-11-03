import './index.scss'
import MenuUsuario from '../../../components/menuusuario'
import { useState } from 'react'

export default function PerfilPsi() {
    const [borda, setBorda] = useState('mensagens');

    function verificarBorda(aba) {
        setBorda(aba);
    }

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
                        <p><img src='/assets/images/telefone.svg' alt='img-telefone' />(11) 95765-8653</p>
                        <p><img src='/assets/images/email.svg' alt='img-telefone' />admin@admin.com</p>
                        <p><img src='/assets/images/agenda.svg' alt='img-telefone' />01/01/2001</p>
                        <p><img src='/assets/images/cardeneta.svg' alt='img-telefone' />000000000-0</p>
                        <p><img src='/assets/images/cardeneta.svg' alt='img-telefone' />número crp</p>
                    </div>
                    <div className='container-verificacoes'>

                        <div className='container-botoes-mensagens'>
                            <div className={borda == 'mensagens' ? 'botao-mensagens' : 'botao-mensagens2'} onClick={() => verificarBorda('mensagens')}>
                                <p>Mensagens Pendentes</p>
                            </div>
                            <div className={borda == 'publicacoes' ? 'botao-publicacoes' : 'botao-publicacoes2'} onClick={() => verificarBorda('publicacoes')}>
                                <p>Minhas Publicações</p>
                            </div>
                        </div>

                        {borda === 'mensagens' &&

                            <table>
                                <thead>
                                    <td>
                                        <th className='container-nome'>Nome:</th>
                                        <th className='container-telefone'>Telefone:</th>
                                        <th className='container-analise'>Analisar:</th>
                                    </td>
                                </thead>

                                <tbody>
                                    <tr className='corpo-teste'>
                                        <td className='nome-solicitante'>Admin</td>
                                        <td className='telefone-solicitante'>(11)97656-5332</td>
                                        <td className='analise-solicitante'><img src='/assets/images/NAO-analisar.svg' alt='img-NAO' /> <img src='/assets/images/SIM-analisar.svg' alt='img-SIM' /></td>
                                    </tr>
                                    <tr className='corpo-teste'>
                                        <td className='nome-solicitante'>Admin</td>
                                        <td className='telefone-solicitante'>(11)97656-5332</td>
                                        <td className='analise-solicitante'><img src='/assets/images/NAO-analisar.svg' alt='img-NAO' /> <img src='/assets/images/SIM-analisar.svg' alt='img-SIM' /></td>
                                    </tr>
                                    <tr className='corpo-teste'>
                                        <td className='nome-solicitante'>Admin</td>
                                        <td className='telefone-solicitante'>(11)97656-5332</td>
                                        <td className='analise-solicitante'><img src='/assets/images/NAO-analisar.svg' alt='img-NAO' /> <img src='/assets/images/SIM-analisar.svg' alt='img-SIM' /></td>
                                    </tr>
                                    <tr className='corpo-teste'>
                                        <td className='nome-solicitante'>Admin</td>
                                        <td className='telefone-solicitante'>(11)97656-5332</td>
                                        <td className='analise-solicitante'><img src='/assets/images/NAO-analisar.svg' alt='img-NAO' /> <img src='/assets/images/SIM-analisar.svg' alt='img-SIM' /></td>
                                    </tr>
                                    <tr className='corpo-teste'>
                                        <td className='nome-solicitante'>Admin</td>
                                        <td className='telefone-solicitante'>(11)97656-5332</td>
                                        <td className='analise-solicitante'><img src='/assets/images/NAO-analisar.svg' alt='img-NAO' /> <img src='/assets/images/SIM-analisar.svg' alt='img-SIM' /></td>
                                    </tr>
                                    <tr className='corpo-teste'>
                                        <td className='nome-solicitante'>Admin</td>
                                        <td className='telefone-solicitante'>(11)97656-5332</td>
                                        <td className='analise-solicitante'><img src='/assets/images/NAO-analisar.svg' alt='img-NAO' /> <img src='/assets/images/SIM-analisar.svg' alt='img-SIM' /></td>
                                    </tr>


                                </tbody>
                            </table>
                        }

                        {borda === 'publicacoes' &&

                            <table>
                                <thead>
                                    <td>
                                        <th className='titulo-nome'>Nome:</th>
                                        <th className='titulo-data'>Data:</th>
                                        <th className='titulo-situacao'>Situação:</th>
                                    </td>
                                </thead>

                                <tbody>
                                    <tr className='corpo-teste'>
                                        <td className='nome-publicacao'>Admin admin admin</td>
                                        <td className='data-publicacao'>01/01/2006</td>
                                        <td className='titulo-resultado-situacao'>Aprovado</td>
                                        <td className='img-lapis'><img src='/assets/images/lapis-alterar.svg' alt='img-lapis' /></td>
                                        <td className='img-lixo-publicacoes'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                    </tr>


                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
