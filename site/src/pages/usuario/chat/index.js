import './index.scss'
import CabecalhoChat from '../../../components/cabecalhoChat'
import ChatCard from '../../../components/chatCard'


export default function Chat() {



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
                        
                        <input type='text' placeholder='Digite sua mensagem...' className='mensagem-bar' />
                        
                        <img src='/assets/images/enviar-mensagem.png' alt='' />
                    </div>

                </div>
            </div>
        </main>
    )


}