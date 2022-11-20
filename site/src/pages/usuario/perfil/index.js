import './index.scss'
import MenuUsuario from '../../../components/menuusuario'
import { useEffect, useState } from 'react'
import { solicitacoesUser, letraUser } from '../../../api/usuarioApi';
import { deletarPublicacao, listarPublicacaoUsu } from '../../../api/publicacaoApi';
import storage from 'local-storage'
import { deletarChat } from '../../../api/chatApi';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';

export default function PerfilUser() {
    const [botoesCliques, setBotoesCliques] = useState('mensagens');
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [publicacoes, setPublicacoes] = useState([]);
    const [nomePsicologo, setNomePsicologo] = useState({ nome: '', email: '' });
    const navigate = useNavigate();
    // const [publicacoes, setPublicacoes] = useState([]);
    {/* transformando formatações para a borda 
        const [bordaInferior, setBordaInferior] = useState('container-mensagens container-mensagens-borda'); */}

    async function pegarLetraUser() {
        const iduser = storage('usuario-logado').id;
        const chamada = await letraUser(iduser);
        setNomePsicologo({nome: chamada.nome, email: chamada.email})
    }

    function cliqueAbas(aba) {
        setBotoesCliques(aba);
    }

    async function listarSolicitacoes() {
        const iduser = storage('usuario-logado').id;
        const chamada = await solicitacoesUser(iduser);
        setSolicitacoes(chamada);
    }

    async function listarPublicacoes() {
        const resposta = storage('usuario-logado').id;

        const listamento = await listarPublicacaoUsu(resposta);
        setPublicacoes(listamento);
    }

    async function excluirChat(id) {
        confirmAlert({
            title: "Remover Solicitação",
            message: `Deseja remover a solicitação?`,
            buttons: [{
                label: 'Sim',
                onClick: async () => {
                    await deletarChat(id);
                    listarSolicitacoes();
                    toast.dark('Solicitação removida!')
                }
            },
            {
                label: 'Não'
            }
            ]
        }
        )
    }

    async function excluirPublicacao(id) {
        confirmAlert({
            title: "Remover Publicação",
            message: `Deseja mesmo remover está publicação?`,
            buttons: [{
                label: 'Sim',
                onClick: async () => {
                    await deletarPublicacao(id);
                    listarPublicacoes();
                    toast.dark('Publicação removida!')
                }
            },
            {
                label: 'Não'
            }
            ]
        }
        )
    }

    async function editarPublicacao(id) {
        navigate(`/usuario/publicacao/${id}`)
    }

    function redirecionamentoChat() {
        setTimeout(() => {
            navigate('/usuario/chat');
        }, 700)
    }

    useEffect(() => {
        listarSolicitacoes();
        listarPublicacoes();
        pegarLetraUser();
    }, [])

    return (
        <main className='page-perfil-user'>
            <div>
                <MenuUsuario pagina='perfil' />
            </div>

            <div className='container-meio'>
                <div className='container-perfil'>
                    <div className='circulo-inicial'>
                        <p>{nomePsicologo.nome[0]}</p>
                    </div>
                    <div className='container-square'>
                        <div className='container-credenciais'>
                            <h3>{nomePsicologo.nome}</h3>
                            <p>{nomePsicologo.email}</p>
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
                                                <td className='titulo-resultado-situacao'>{item.autorizado == 0 ? 'Em análise' : 'Aprovado'}</td>
                                                <td className='img-lixo-black'><img onClick={() => excluirChat(item.idchat)} src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                                <td className='img-msg-chat'><img onClick={redirecionamentoChat} src='/assets/images/msg-chat.svg' alt='img-lixo' /></td>
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

                                        {publicacoes.map(item =>

                                            <tr className='corpo-teste'>
                                                <td className='nome-publicacao'>{item.nome}</td>
                                                <td className='data-publicacao'>{item.data}</td>
                                                <td className='titulo-resultado-situacao'>{item.aprovado == 0 ? 'Em análise' : 'Aprovado'}</td>
                                                <td className='img-lapis'><img onClick={() => editarPublicacao(item.id)} src='/assets/images/lapis-alterar.svg' alt='img-lapis' /></td>
                                                <td className='img-lixo-publicacoes'><img onClick={() => excluirPublicacao(item.id)} src='/assets/images/lixo-limpar-black.svg' alt='img-lixo' /></td>
                                            </tr>


                                        )}


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