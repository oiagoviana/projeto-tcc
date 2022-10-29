import './index.scss'
import MenuAdm from '../../../components/menuadm'
import { useEffect, useState } from 'react'
import { mostrarPublicacaoId } from '../../../api/publicacaoApi';
import { useParams } from 'react-router-dom';


export default function Publicacao() {
    const [publicacao, setPublicacao] = useState({});
    const { idParam } = useParams();      

    async function carregarPagina() {
        const resposta = await mostrarPublicacaoId(idParam);
        setPublicacao(resposta);
        
    } 

    useEffect(() => {
        if (idParam)
            carregarPagina();
    }, [])

    return (
        <main className='page-publicacao'>
            <div>
                <MenuAdm pagina='publicacao'/>
            </div>


            <div className='div-direita'>
                <div className='card-principal'>
                    <div className='sub1-card'>
                        <div className='sub2-card'>
                            <div className='sub2-cima'>
                                <h4 className='cima-info'>Nome: <span> {publicacao.nome} {publicacao.nomePsi} </span> </h4>
                                <h4 className='cima-info'>Data: <span>{publicacao.data ? publicacao.data.substr(0, 10) : ''}</span> </h4>
                            </div>                        

                            <div className='sub2-baixo'>
                                <h4 className='baixo-info'>E-mail: <span>{publicacao.emailPsi} {publicacao.email} </span> </h4>
                                <h4 className='baixo-info'>Titulo: <span>{publicacao.titulo}</span>      </h4>
                            </div>
                                

                            <div className='sub3-card'>
                                <div className='sub3-div'>
                                    <h4>Descrição:</h4>
                                </div>
                                <p className='sub3-desc'> {publicacao.descricao}</p>
                            
                                <img src='/assets/images/maepubli.png' alt='' />
                            </div>

                        </div>

                        <div className='div-button'>
                            <button className='button'>Autorizar</button>
                        </div>

                    </div>
                </div>
            </div>
            
            
        </main>
    )
}