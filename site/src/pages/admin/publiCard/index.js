import './index.scss'
import MenuAdm from '../../../components/menuadm'
import { useEffect, useState } from 'react'
import { listarPublicacao } from '../../../api/publicacaoApi';
import { useNavigate } from 'react-router-dom';



export default function PublicacaoCard() {
    const [publi, setPubli] = useState([]);
    const navigate = useNavigate();


    async function consultarPublicacao() {
        const resposta = await listarPublicacao();
        setPubli(resposta);
    }

    useEffect(() => {
        consultarPublicacao();
    }, [])

    function abrirDetalhe(id) {
        navigate(`/admin/publicacao/${id}`);
    }
    


    return (
        <main className='page-publicacaoCard'>
            
            <div>
                <MenuAdm pagina='publicacao' />
            </div>

            <div className='div-direita'>
                <h2>Verificações de Publicações pendentes</h2>

                
            {publi.map(item => 

            <div className='container-card'>
                <div className='card-publi'>
                    <div className='sub1'>
                        <img className='sub1-img' src={item.imagem} alt='' />

                        <div className='sub1-textos'>
                            <p className='sub1-titulo'>{item.nome} {item.nomePsi} </p>
                                <p className='sub1-texto'>{item.email} {item.emailPsi}</p>
                        </div>
                    </div>

                    <div className='sub2-textos'>
                        <div>
                            <p className='sub2-titulo'> {item.titulo} </p>
                            <p className='sub2-texto' > {item.descricao} </p>
                        </div>
                        
                        <div className='sub2-img'>
                            <img onClick={() => abrirDetalhe(item.id)} src='/assets/images/setaPubli.svg' alt='' />
                        </div>
                    </div>

                    <div className='sub3-data'>
                        <p>{item.data.substr(0, 10)}</p>
                    </div>

                    </div>
                    
                    
                </div>
                )}

                
            </div>


        </main>
    )
}