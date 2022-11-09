import './index.scss'
import CabecalhoChat from '../cabecalhoChat'


export default function ChatCard() {


    return (
        <main className='page-chatCard'>

            <div className='div-principal'>
                <div>
                    <p className='chats'>Chats</p>
                </div>

                <div className='card'>

                    <div className='chatCard'>
                        <div className='div-nome'>
                            <span className='letra'>B</span>
                            <span className='nome'>Dr.Bruna</span>
                        </div>

                        <span className='hora'>3:15</span>
                    </div>

                </div>

            </div>
        </main>
    );
}