import './index.scss'
import MenuUsuario from '../../../components/menuusuario'
import { useState } from 'react'

export default function PerfilUser() {
    const [botoesCliques, setBotoesCliques] = useState('mensagens');
    {/* transformando formatações para a borda 
        const [bordaInferior, setBordaInferior] = useState('container-mensagens container-mensagens-borda'); */}

    function cliqueAbas(aba) {
        setBotoesCliques(aba);
    }

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
                                <div className='container-mensagens container-mensagens-borda' onClick={() => cliqueAbas('mensagens')}>
                                    <a href='#'>Mensagens Pendentes</a>
                                </div>
                                <div className='container-publicacoes' onClick={() => cliqueAbas('pendentes')}>
                                    <a href='#'>Minhas Publicações</a>
                                </div>
                            </div>

                            {botoesCliques == 'mensagens' &&

                                <table>
                                    <thead className='cabecalho'>
                                        <td>
                                            <th className='titulo-psicologo'>Psicologo solicitado:</th>
                                            <th className='titulo-situacao'>Situação:</th>
                                            <th className='botao-limpar'>Limpar tudo <img src='/assets/images/lixo-limpar-tudo.svg' alt='img-lixo' /></th>
                                        </td>
                                    </thead>

                                    <tbody>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>
                                        <tr className='corpo-teste'>
                                            <td className='titulo-doutores'>Dr. Bruna Santos</td>
                                            <td className='titulo-resultado-situacao'>Aprovado</td>
                                            <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                        </tr>


                                    </tbody>
                                </table>
                            }

                            {botoesCliques == 'pendentes' && 
                                'ola'
                            }
                        </div>
                    </div>
                </div>
            </div>

            <img className='image-logo' src='/assets/images/logo-mae.png' alt='img-logo' />
        </main>
    )
}