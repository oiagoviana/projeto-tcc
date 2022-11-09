import './index.scss'
import CabecalhoChat from '../../../components/cabecalhoChat'
import ChatCard from '../../../components/chatCard'
import { useState } from 'react';
import storage from 'local-storage'
import { SendMessageP, SendMessageU } from '../../../api/chatApi';


export default function Chat() {
    const [mensagem, setMensagem] = useState('');
    const [mensagens, setMensagens] = useState([]);

    async function submitMessage() {
        if (storage('usuario-logado')) {
            const resposta = await SendMessageU(mensagem);
            setMensagem(resposta);
        } else if (storage('psi-logado')) {
            const resposta = await SendMessageP(mensagem);
            setMensagem(resposta);
        }
    }

    


    return (
        <main className='page-chat'>
            <div>
                <CabecalhoChat />
            </div>

            <div className='div-principal'>
                <ChatCard />

                <div className='container-conversa'>
                    <div className='mensagens'>
                        <div className='usuario-esquerda'>
                            <span className='inicial-nome'>B</span>
                            <p className='caixa-mensagem'>..................................................................................................................................................</p>
                        </div>

                        <div className='usuario-direita'>
                            <p className='caixa-mensagem2'>..................................................................................................................................................</p>
                        </div>

                    </div>

                    <div className='div-campomsg'>
                        
                        <input
                            className='mensagem-bar'
                            placeholder='Digite sua mensagem...'
                            type='text'
                            value={mensagem}
                            onChange={e => setMensagem(e.target.value)}
                        />

                    {storage('usuario-logado') &&
                        <img src='/assets/images/enviar-mensagem.png' onClick={submitMessage} alt='' />

                    }

                    {storage('psi-logado') &&
                        <img src='/assets/images/enviar-mensagem.png' onClick={submitMessage} alt='' />

                    }
                    </div>

                </div>
            </div>
        </main>
    )


}