import './index.scss'
import { listarConversasP, listarConversasU } from '../../api/chatApi';
import { useEffect, useState } from 'react';
import storage from 'local-storage';

export default function ChatCard() {
    const [conversasU, setConversasU] = useState([]);
    const [conversasP, setConversasP] = useState([]);

    async function listaConversasU() {
        const id = storage('usuario-logado').id;
        const r = await listarConversasU(id);
        setConversasU(r);
    }

    async function listaConversasP() {
        const id = storage('psi-logado').id;
        const r = await listarConversasP(id);
        setConversasP(r);
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
                    <div className='card'>
                        {conversasU.map(item =>
                            <div className='chatCard'>
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