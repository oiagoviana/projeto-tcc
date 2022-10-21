import './index.scss'
import MenuAdm from '../../../components/menuadm'
import { useEffect, useState } from 'react'
import { amostrarPublicacao, listarPublicacao } from '../../../api/publicacaoApi';
import { useParams } from 'react-router-dom';


export default function Publicacao() {
    const [publicacao, setPublicacao] = useState({});    
    const {idParam} = useParams();


    function mostrarPublicacao(){
        const resposta = amostrarPublicacao(idParam);

        console.log(resposta);
        setPublicacao(resposta);
    }


    useEffect(() => {
        if(idParam)
        mostrarPublicacao();
    },[])



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
                                <h4 className='cima-info'>Nome: <span>{publicacao.nome} {publicacao.nomePsi} </span> </h4>
                                <h4 className='cima-info'>Data: <span>{publicacao.data}</span> </h4>
                            </div>    

                            <div className='sub2-baixo'>
                                <h4 className='baixo-info'>E-mail: <span>karla29@gmail.com</span> </h4>
                                <h4 className='baixo-info'>Titulo: <span>Mãe Solteira</span>      </h4>
                            </div>
                                

                            <div className='sub3-card'>
                                <div className='sub3-div'>
                                    <h4>Descrição:</h4>
                                </div>
                                <p className='sub3-desc'> Lorem ipsum dolor sit amet. Qui nulla error ut galisum doloremque eum maxime officia est autem error et earum voluptas! Ut assumenda assumenda At obcaecati beatae et voluptatum distinctio? Nam dolor consectetur hic earum quam est aperiam odit. 33 voluptates beatae ab sunt tenetur et omnis nemo. Non quisquam enim et corrupti dolores ut officiis nostrum et placeat expedita sed alias quasi.</p>
                            
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