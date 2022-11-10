import './index.scss'
import MenuUsuario from '../../../components/menuusuario'
import { useEffect, useState } from 'react'
import { solicitacoesUser } from '../../../api/usuarioApi';
import storage from 'local-storage'

export default function PerfilUser() {
    const [botoesCliques, setBotoesCliques] = useState('mensagens');
    const [solicitacoes, setSolicitacoes] = useState([]);
    // const [publicacoes, setPublicacoes] = useState([]);
    {/* transformando formatações para a borda 
        const [bordaInferior, setBordaInferior] = useState('container-mensagens container-mensagens-borda'); */}

    function cliqueAbas(aba) {
        setBotoesCliques(aba);
    }

    async function listarSolicitacoes() {
        const resposta = storage('usuario-logado').id;
        console.log(resposta);
        const chamada = await solicitacoesUser(resposta);
        setSolicitacoes(chamada);
    }

    useEffect(() => {
        listarSolicitacoes();
    }, [])

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
                                <div className={botoesCliques == 'mensagens' ? 'container-mensagens' : 'container-mensagens2'} onClick={() => cliqueAbas('mensagens')}>
                                    <p>Mensagens Pendentes</p>
                                </div>
                                <div className={botoesCliques == 'pendentes' ? 'container-publicacoes' : 'container-publicacoes2'} onClick={() => cliqueAbas('pendentes')}>
                                    <p>Minhas Publicações</p>
                                </div>
                            </div>

                            {botoesCliques == 'mensagens' &&

                                <table>
                                    <thead>
                                        <td>
                                            <th className='titulo-psicologo'>Psicologo solicitado:</th>
                                            <th className='titulo-situacao'>Situação:</th>
                                            <th className='botao-limpar'>Limpar tudo <img src='/assets/images/lixo-limpar-tudo.svg' alt='img-lixo' /></th>
                                        </td>
                                    </thead>

                                    <tbody>

                                        {solicitacoes.map(item =>

                                            <tr className='corpo-teste'>
                                                <td className='titulo-doutores'>{item.nome}</td>
                                                <td className='titulo-resultado-situacao'>{item.autorizado}</td>
                                                <td className='img-lixo-black'><img src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                            </tr>

                                        )}

                                    </tbody>
                                </table>
                            }

                            {botoesCliques == 'pendentes' &&
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
            </div>
        </main>
    )
}