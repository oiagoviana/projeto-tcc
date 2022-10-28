import './index.scss'
import MenuAdm from '../../../components/menuadm'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { autorizarPublicacaoPsicologo, autorizarPublicacaoUsuario, buscarImagem, listarPublicacaoPsicId } from '../../../api/publicacaoApi'


export default function Publicacao() {

    const [autorizar, setAutoriza] = useState ([])
    const {idParam} = useParams ()

    async function carregarPublicacao(){
        const resposta= await listarPublicacaoPsicId(idParam)
        setAutoriza(resposta)
    }

    useEffect(()=>{
        if(idParam){
            carregarPublicacao()
        }
    },[])

    async function Autorizar(id){
        try {
            const resposta= await autorizarPublicacaoPsicologo(id)
            alert('Publicação autorizada com sucesso!')
        } catch (err) {
            if (err.response)
                alert(err.response.data.erro);
            else {
                alert(err.message)
            }
        }
    }



    return (
        <main className='page-publicacao'>
            <div>
                <MenuAdm pagina='publicacao'/>
            </div>


            <div className='div-direita'>
                 {autorizar.map(item=>
                    
                <div className='card-principal'>
                    <div className='sub1-card'>
                        <div className='sub2-card'>
                            <div className='sub2-cima'>
                                <h4 className='cima-info'>Nome: <span>{item.nome} </span> </h4>
                                <h4 className='cima-info'>Data: <span> {item.data} </span> </h4>
                            </div>    

                            <div className='sub2-baixo'>
                                <h4 className='baixo-info'>E-mail: <span> {item.email} </span> </h4>
                                <h4 className='baixo-info'>Titulo: <span> {item.titulo} </span>      </h4>
                            </div>
                                

                            <div className='sub3-card'>
                                <div className='sub3-div'>
                                    <h4>Descrição:</h4>
                                </div>
                                <p className='sub3-desc'> {item.descricao} </p>
                            
                                <img className='imagem' src= {buscarImagem(item.imagem)} alt='' />
                            </div>

                        </div>

                        <div className='div-button'>
                            <button className='button' onClick={()=> Autorizar(item.id)}> Autorizar</button>
                        </div>

                    </div>
                </div>
                    )}
            </div>
            
            
        </main>
    )
}