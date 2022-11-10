import './index.scss'
import { listarPorNome } from '../../api/chatApi';
import { useEffect, useState } from 'react';
import storage from 'local-storage';

export default function CabecalhoChat() {
    const [conversa, setConversa] = useState({});

    async function listaConversas() {
        const r = await listarPorNome(1);
        console.log(r);
        setConversa(r);
    }

    useEffect(() => {
        listaConversas();
    }, [])


    return (
        <main className='page-cabecalhoChat'>
            <div className='itens-cabecalho'>

                <img src="/assets/images/setaVoltar.svg" className='imagem-seta' />


                <div className='div-nome'>
                    <span className='nome'>{conversa.nome}  </span>
                    <div className='subdiv-nome'>
                        <p className='nomedr'>{conversa.nomePsi} </p>
                        <p className='disp'>Disponível</p>
                    </div>
                </div>


            </div>
        </main>
    );
}