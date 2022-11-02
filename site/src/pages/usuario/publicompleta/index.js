import MenuUsuario from "../../../components/menuusuario";
import ComentUser from "../../../components/comentarioUsuario";
import './index.scss'

import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { useParams } from "react-router-dom";
import { mostrarPublicacaoUsuId, buscarImagem, listarComentarioUsu } from "../../../api/publicacaoApi";


export default function PubliCompleta() {
    const [ModalIsOpen, SetIsOpen] = useState(false);
    const [publicacao, setPublicacao] = useState([]);
    const [comentario, setComentario] = useState([]);

    const {idParam} = useParams()
    Modal.setAppElement('#root');

    async function MostrarPubli(){
        const resposta = await mostrarPublicacaoUsuId(idParam);
        setPublicacao(resposta)
    }
    async function MostrarComentarioUsu(){
        const resposta = await listarComentarioUsu(idParam);
        setComentario(resposta)
    }

    useEffect (() => {
        MostrarPubli()
        MostrarComentarioUsu()                                                         
    },[])


    function openModal() {
        SetIsOpen(true);

    }

    function closeModal() {
        SetIsOpen(false);

    }

    const Css = {
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItens: 'center',
            justifyContent: 'center',
            left:'25%',
            top:'28%',
            margin: 'none',
            width: '50vw',
            backgroundColor: '#73401E',
            height: '40vh',

        },
        overlay: {
            backgroundColor: '#000000ce'
        },



    };



    return (
        <main className="div-principal">
            <div>
                <MenuUsuario />
            </div>

            <div className='div-direita'>
                <div className='card-principal'>
                    <div className='sub1-card'>
                    {publicacao.map(item =>
                        
                        
                        <div className='sub2-card'>
                            <div className='sub2-cima'>
                                <h1 className='kar' src="/assets/images/kar.png" width='37vw' height='45vh' alt="">{item.nome[0]}</h1>
                                <h4 className='cima-info'>{item.nome}</h4>

                            </div>

                            <div className='sub2-baixo'>

                                <h4 className='baixo-info'>Titulo: <span>{item.titulo}</span>      </h4>
                            </div>


                            <div className='sub3-card'>
                                <div className='sub3-div'>
                                    <h4>Descrição:</h4>
                                </div>

                                <img src={buscarImagem(item.imagem)} className='img-publi' alt='' />
                                <p className='sub3-desc'>{item.descricao} </p>


                            </div>

                        </div>
                        )}
                    </div>
                </div>
            </div>
            {comentario.map(item =>
            <div className="div-coment">  
                <div className='container-titulo-coment'>
                    <button className="h1coment" onClick={openModal}>Comentar</button>

                    <div>
                        <Modal
                            isOpen={ModalIsOpen}
                            onRequestClose={closeModal}
                            style={Css}

                        >
                            <ComentUser />
                        </Modal>

                    </div>

                </div>

                
            
                <div className="coment">

                    <div className="comentario">
                        <h5> {item.usuario} </h5>
                       
                        <p> {item.comentario} </p>
                    </div>
                    


                </div>
            </div>
            )}
        </main>
    )
}