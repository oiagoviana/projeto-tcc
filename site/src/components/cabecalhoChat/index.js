import './index.scss'
import { listarConversasP2, listarConversasU2 } from '../../api/chatApi';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { useParams } from 'react-router-dom';

export default function CabecalhoChat() {
    const [conversaU, setConversaU] = useState({ nomePsi:'' });
    const [conversaP, setConversaP] = useState({ nome:'' });
    const { idParam } = useParams();


    async function listaConversasU() {
        if (storage('psi-logado')) {
            const id = storage('psi-logado').id;
            const r = await listarConversasP2(id);
            setConversaP(r);

        } else if (storage('usuario-logado')){
            const id = storage('usuario-logado').id;
            const r = await listarConversasU2(id);
            setConversaU(r);
        }

    }

    useEffect(() => {
        listaConversasU();
    }, [])


    return (
        <main className='page-cabecalhoChat'>
            <div className='itens-cabecalho'>

                <img src="/assets/images/setaVoltar.svg" className='imagem-seta' />

                {storage('usuario-logado') &&
                    <div className='div-nome'>
                        <span className='nome'> 
                                                {conversaU.nomePsi.charAt(0)}
                         </span>
                        <div className='subdiv-nome'>
                            <p className='nomedr'> {conversaU.nomePsi} </p>
                            <p className='disp'>Disponível</p>
                        </div>
                    </div>
                }

                {storage('psi-logado') &&
                    <div className='div-nome'>
                        <span className='nome'> {conversaP.nome.charAt(0)} </span>
                        <div className='subdiv-nome'>
                            <p className='nomedr'> {conversaP.nome} </p>
                            <p className='disp'>Disponível</p>
                        </div>
                    </div>

                }


            </div>
        </main>
    );
}