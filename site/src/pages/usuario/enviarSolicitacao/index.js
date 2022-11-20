import './index.scss'
import storage from 'local-storage'
import { createChat, verificarChat } from '../../../api/chatApi';
import { useNavigate } from 'react-router-dom'
import { listarPsicologoAprovados } from '../../../api/psicologoApi';
import { useEffect, useState } from 'react';

export default function EnviarSolicitacao() {
    const user = storage('usuario-logado');
    const [idChat, setIdChat] = useState(-1);
    const [chat, setChat] = useState([]);
    const [solicitacaoIndividual, setSolicitacaoIndividual] = useState([{psiId: 0, nome: '', idade: '', telefone: ''}]);
    const [searchChat, setSearchChat] = useState([]);
    const [botao, setBotao] = useState('N-enviado');
    const [data, setData] = useState('');

    const navigate = useNavigate();

    async function listarPsicologos() {
        const resposta = await listarPsicologoAprovados();
        setChat(resposta);
    }

    async function criarChat(psiId) {
        const resposta = await createChat(user.id, psiId);

        setTimeout(() => {
            navigate('/usuario/perfil')
        }, 3000)
    }

    function dataNascimento(data) {
        const ano = data.slice(6);
        const calculoIdade = new Date().getFullYear() - ano;

        setData(calculoIdade);
        
    }

    async function vericacaoChat(psiId) {
        const r = await verificarChat(psiId, user.id);
        setSearchChat(r);
    }

    useEffect(() => {
        listarPsicologos();
    }, [])


    return (
        <main className='page-envio-solicitacoes'>
            <div className='page-cabecalhoChat'>
                <div className='itens-cabecalho'>
                    <img src="/assets/images/setaVoltar.svg" className='imagem-seta' />

                </div>
            </div> {/* Só a parte do fundo background */}

            <div className='div-principal'>
                <div className='div-principal2'>
                    <div>
                        <p className='chats'>Chats</p>
                    </div>
                    <div className='card'>
                        {chat.map((item) => (
                            <div onClick={() => {
                                dataNascimento(item.data);
                                setSolicitacaoIndividual([{psiId: item.id, nome: item.nome, idade: item.data, telefone: item.telefone}]);
                                vericacaoChat(item.id);
                                setIdChat(item.id);
                                setBotao('N-enviado');
                            }}> {/* Sem essa parte de listar as mensagens de conversa */}

                                <div className='chatCard'>
                                    <div className='div-nome'>
                                        <span className='letra'>{item.nome[0].toUpperCase()}</span>
                                        <span className='nomeCard'>{item.nome}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='container-envio-solicitacao'>

                    {idChat != -1 && (
                        <div>
                            {solicitacaoIndividual.map(item =>
                                <div className='container-solicitacao'>
                                    <div className='container-informacoes'>
                                        <div className='bola-letra'><h2>{item.nome[0].toUpperCase()}</h2></div>

                                        <div className='container-square'>
                                            <h1>Dr. {item.nome}</h1>

                                            <div className='container-credenciais'>
                                                <p className='idade'>{data} anos</p>

                                                <p className='telefone'>{item.telefone}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={() => { criarChat(item.psiId); setBotao('Enviado') }}>
                                        {searchChat == [] && (
                                            <p>Enviar Solicitacao</p>
                                        )}

                                        {searchChat != [] && (
                                            <p>Solicitacao enviada</p>
                                        )}
                                    </button>
                                </div>
                            )}

                        </div>
                    )}

                </div>
            </div>
        </main>
    )
}