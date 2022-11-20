import './index.scss'
import MenuAdm from '../../../components/menuadm';
import { listarInfo } from '../../../api/admApi';
import { useEffect, useState } from 'react';


export default function HomeAdm() {
    const [info, setInfo] = useState({ contasCriadas: [], psiCriados: [], publiFeitas: [] })

    async function listarInformacoes() {
        const resposta = await listarInfo();
        setInfo(resposta);
        

    }

    useEffect(() => {
        listarInformacoes();
    }, [])

    return (
        <main className='page-homeAdm'>
            <div>
                <MenuAdm pagina='home' />
            </div>


            <div className='div-direita'>

                <div className='div-informacoes-esquerda'>

                    <div className='div-informacoes'>
                        <h3 className='h3-textos'>Contas Criadas: <span className='qtd-resposta1'> {info.contasCriadas} </span></h3>
                    </div>



                    <div className='div-informacoes'>
                        <h3 className='h3-textos'>Publicações Feitas: <span className='qtd-resposta1'> {info.publiFeitas} </span> </h3>
                    </div>

                    <div className='div-informacoes'>
                        <h3 className='h3-textos'>Contas Profissionais Criadas: <span className='qtd-resposta1'> {info.psiCriados} </span> </h3>
                    </div>
                </div>
            </div>



        </main>
    );
}