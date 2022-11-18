import './index.scss'
import storage from 'local-storage'
import { createChat } from '../../../api/chatApi';
import { listarPsicologo } from '../../../api/psicologoApi';
import { useEffect, useState } from 'react';

export default function EnviarSolicitacao() {
    const user = storage('usuario-logado');
    const [idChat, setIdChat] = useState(-1);
    const [chat, setChat] = useState([]);
    const [solicitacaoIndividual, setSolicitacaoIndividual] = useState([{idPsi: 0, nome: '', idade: '', telefone: ''}]);
    const [botao, setBotao] = useState('N-enviado');
    const [data, setData] = useState('');

    {/*async function pesquisaById(id) {
        const r = await getChatInfoById(id);
        setPsiInfo(r);
    }

    async function listUserChat() {
        const r = await listarConversa(null, user.id)
        setChat(r);
    } */}

    async function listarPsicologos() {
        const resposta = await listarPsicologo();
        setChat(resposta);
    }

    async function criarChat(idPsi) {
        const resposta = await createChat(user.id, idPsi);

        console.log(resposta);
    }

    {/*  async function solicitarPsi() {
        const resposta = await listarPsi(solicitacaoIndividual.idPsi);
        setSolicitacaoIndividual(resposta);
    } */}

    {/* async function testeHora() {
        const a = new Date();

        var dia = String(a.getDate()).padStart(2, '0');
        var mes = String(a.getMonth() + 1).padStart(2, '0');
        var ano = a.getFullYear();
        var dataAtual = dia + '/' + mes + '/' + ano;
        setData(dataAtual);
    } */}

    useEffect(() => {
        listarPsicologos();
        {/* testeHora(); */}
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
                                {/*setIdChat(item.idChat);
                            pesquisaById(item.idChat); */}
                                setSolicitacaoIndividual([{idPsi: item.id, nome: item.nome, idade: item.data, telefone: item.telefone}])
                                setIdChat(item.id);
                                console.log(item.id);
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
                                            <h1>{item.nome}</h1>

                                            <div className='container-credenciais'>
                                                <p className='idade'>{item.idade}</p>

                                                <p className='telefone'>{item.telefone}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={() => { criarChat(item.idPsi); setBotao('Enviado') }}>
                                        {botao == 'N-enviado' ? 'Enviar Solicitação' : 'Solicitação enviada!'}
                                    </button>
                                </div>
                            )}
                            {data}

                        </div>
                    )}

                </div>
            </div>
        </main>
    )
}