import './index.scss'
import MenuUsuario from '../../../components/menuusuario'
import { useEffect, useState } from 'react'
import storage from 'local-storage'
import { solicitacoesPsi, listarPsi, listarPublicacaoPsi } from '../../../api/psicologoApi'
import { aceitarChat, deletarChat } from '../../../api/chatApi'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify'
import { deletarPublicacao } from '../../../api/publicacaoApi'

export default function PerfilPsi() {
    const [borda, setBorda] = useState('mensagens');
    const [publicacoes, setPublicacoes] = useState([]);
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [infoPsi, setInfoPsi] = useState({nome: '',telefone: '', email: '', nascimento: '', cpf: '', crp: ''});
    const navigate = useNavigate();

    // Falta finalizar!

    function verificarBorda(aba) {
        setBorda(aba);
    }

    async function listarPublicacoes() {
        const idpsi = storage('psi-logado').id;
        const chamada = await listarPublicacaoPsi(idpsi);
        const psiSolicitacoes = await solicitacoesPsi(idpsi);
        setPublicacoes(chamada);
        setSolicitacoes(psiSolicitacoes);
    }
    console.log(publicacoes);

    async function listarInformacoes() {
        const idpsi = storage('psi-logado').id;

        const informacoes = await listarPsi(idpsi);
        setInfoPsi({nome: informacoes.nome,telefone: informacoes.telefone, email: informacoes.email, nascimento: informacoes.data, cpf: informacoes.cpf, crp: informacoes.crp});
    }

    async function atualizarSitChat(id) {
        await aceitarChat(id);

        setTimeout(() => {
                    navigate('/psi/chat');
                }, 2000)
    }

    async function excluirChat(id, nome) {
        confirmAlert({
            title: "Remover Solicitação",
            message: `Deseja remover a solicitação de ${nome}`,
            buttons: [{
                label: 'Sim',
                onClick: async () => {
                    await deletarChat(id);
                    listarInformacoes();
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

    useEffect(() => {
        listarPublicacoes();
        listarInformacoes();
    }, [])

    return (
        <main className='page-perfil-psicologo'>
            <div>
                <MenuUsuario pagina='perfil' />
            </div>
            <div className='container-principal-direito'>
                <div className='container-header'>
                    <div className='container-bola'>
                        <p>{infoPsi.nome[0]}</p>
                    </div>
                    <div className='container-email'>
                        <h3>{infoPsi.nome}</h3>
                        <p>{infoPsi.email}</p>
                    </div>
                </div>
                <div className='container-meio'>
                    <div className='container-credenciais'>
                        <p><img src='/assets/images/telefone.svg' alt='img-telefone' />{infoPsi.telefone}</p>
                        <p><img src='/assets/images/email.svg' alt='img-telefone' />{infoPsi.email}</p>
                        <p><img src='/assets/images/agenda.svg' alt='img-telefone' />{infoPsi.nascimento}</p>
                        <p><img src='/assets/images/cardeneta.svg' alt='img-telefone' />{infoPsi.cpf}</p>
                        <p><img src='/assets/images/cardeneta.svg' alt='img-telefone' />{infoPsi.crp}</p>
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

                                    {solicitacoes.map(item =>

                                        <tr className='corpo-teste'>
                                            <td className='nome-solicitante'>{item.nome}</td>
                                            <td className='telefone-solicitante'>{item.telefone}</td>
                                            <td className='analise-solicitante'>
                                                <img onClick={() => {excluirChat(item.idchat, item.nome)}} src='/assets/images/NAO-analisar.svg' alt='img-NAO' />
                                                <img onClick={() => {atualizarSitChat(item.idchat)}} src='/assets/images/SIM-analisar.svg' alt='img-SIM' /></td>
                                        </tr>

                                    )}


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
        </main>
    )
}
