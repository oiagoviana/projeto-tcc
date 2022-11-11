import './index.scss'
import { listarConversasP, listarConversasU } from '../../api/chatApi';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function ChatCard() {
    const [conversasU, setConversasU] = useState([]);
    const [conversasP, setConversasP] = useState([]);
    const navigate = useNavigate();

    async function listaConversasU() {
        if (storage('usuario-logado')) {
            const id = storage('usuario-logado').id;
            const r = await listarConversasU(id);
            setConversasU(r);
        }
    }

    async function listaConversasP() {
        if (storage('psi-logado')) {
            const id = storage('psi-logado').id;
            const r = await listarConversasP(id);
            setConversasP(r);
        }
    }

    function entrarChat(id) {
        navigate(`/usuario/chat/${id}`)
    }

    useEffect(() => {
        listaConversasU();
        listaConversasP();
    }, [])


    return (
        <main className='page-chatCard'>

            <div className='div-principal'>
                <div>
                    <p className='chats'>Chats</p>
                </div>
                {storage('usuario-logado') &&
                    <div className='card' >
                        {conversasU.map(item =>
                            <div className='chatCard' onClick={() => entrarChat(item.id)}>
                                <div className='div-nome'>
                                    <span className='letra'>{item.nomePsi[0].toUpperCase()}</span>
                                    <span className='nome'>{item.nomePsi}</span>
                                </div>
                            </div>
                        )}

                    </div>
                }

                {storage('psi-logado') &&
                    <div className='card'>
                        {conversasP.map(item =>
                            <div className='chatCard'>
                                <div className='div-nome'>
                                    <span className='letra'>{item.nome[0].toUpperCase()}</span>
                                    <span className='nome'>{item.nome}</span>
                                </div>

                            </div>
                        )}

                    </div>}
            </div>
        </main>
    );
}