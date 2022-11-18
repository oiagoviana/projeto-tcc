import './index.scss'
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import io from 'socket.io-client'
import { listarConversa, getChatInfoById } from '../../../api/chatApi';
import { useNavigate } from 'react-router-dom';

const socket = io.connect('http://localhost:5000');

export default function Chat() {
    const psi = storage('psi-logado');
    const [mensagem, setMensagem] = useState('');
    const [mensagens, setMensagens] = useState([]);
    const [idChat, setIdChat] = useState(-1);
    const [chat, setChat] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const navigate = useNavigate();

    async function listUserChat() {
        const r = await listarConversa(psi.id, null)
        setChat(r);
    }


    async function pesquisaById(id) {
        const r = await getChatInfoById(id);
        setUserInfo(r);
    }

    async function enviarMessage() {
        socket.emit("enviar_mensagem", {
            idChat: idChat,
            mensagem: mensagem,
            tipo: 2,
        });
        socket.emit("listar_mensagem", {
            idChat: idChat,
        });
        setMensagem("");
    }


    function mensagemLado(tipo) {
        if (tipo == 2) {
            return 'usuario-direita';
        } else {
            return 'usuario-esquerda';
        }
    }


    socket.on("listar_mensagem", (data) => {
        setMensagens(data);
    })


    useEffect(() => {
        listUserChat();
    }, [])

    function sairChat() {
        navigate('/usuario/feedpublicacao')
    }


    return (
        <main className='page-chat'>
            <div className='page-cabecalhoChat'>
                <div className='itens-cabecalho'>
                    <img src="/assets/images/setaVoltar.svg" className='imagem-seta' onClick={sairChat} />
                    {userInfo.map((item) => (
                        <div className='div-nome'>
                            <span className='nome'> {item.userName[0].toUpperCase()} </span>
                            <div className='subdiv-nome'>
                                <p className='nomedr'> {item.userName}</p>
                                <p className='disp'>Disponível</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='div-principal'>
                <div className='div-principal2'>
                    <div>
                        <p className='chats'>Chats</p>
                    </div>
                    <div className='card'>
                        {chat.map((item) => (
                            <div onClick={() => {
                                setIdChat(item.idChat);
                                pesquisaById(item.idChat);
                                socket.emit("listar_mensagem", {
                                    idChat: idChat
                                })
                            }}>
                                <div className='chatCard'>
                                    <div className='div-nome'>
                                        <span className='letra'>{item.userName[0].toUpperCase()}</span>
                                        <span className='nomeCard'>{item.userName}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className='container-conversa'>
                    <div className='mensagens'>
                        {mensagens &&
                            mensagens.map(item =>
                                <div className={mensagemLado(item.tipo)}>
                                    <p className='caixa-mensagem'>{item.mensagem}</p>
                                </div>
                            )
                        }
                    </div>
                    {idChat != -1 && (
                        <div className='div-campomsg'>
                            <input
                                className='mensagem-bar'
                                placeholder='Digite sua mensagem...'
                                type='text'
                                value={mensagem}
                                onChange={e => setMensagem(e.target.value)}
                            />

                            {storage('psi-logado') &&
                                <img
                                    onClick={() => enviarMessage()}
                                    src='/assets/images/enviar-mensagem.png'
                                    alt='' />
                            }
                        </div>
                    )}
                </div>
            </div>
        </main >
    );
}