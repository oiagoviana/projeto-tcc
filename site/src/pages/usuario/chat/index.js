import './index.scss'
import CabecalhoChat from '../../../components/cabecalhoChat'
import ChatCard from '../../../components/chatCard'


export default function Chat() {
    


    return (
        <main className='page-chat'>
            <div>
                <CabecalhoChat/>
            </div>

            <div className='div-principal'>
                <ChatCard />
                
                <div className='container-conversa'>

                    


                </div>
            </div>
        </main>
    )


}