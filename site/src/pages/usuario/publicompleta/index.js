import MenuUsuario from "../../../components/menuusuario";
import ComentUser from "../../../components/comentarioUsuario";
import './index.scss'
import { inserirComentario } from "../../../api/publicacaoApi";
import { useState } from "react";
import Modal from 'react-modal';



export default function PubliCompleta() {
    const [usuario, setUsuario] = useState();
    const [comentario, setComentario] = useState();

    const [ModalIsOpen, SetIsOpen] = useState(false);

    async function salvarComentario() {
        try {
            const a = await inserirComentario(a, usuario, comentario)
            alert('Comentário Publicado!')

        } catch (err) {
            if (err.message);
        }
    }

    Modal.setAppElement('#root');

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
            margin: 'none',
            backgroundColor: '#ffff',
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
                        <div className='sub2-card'>
                            <div className='sub2-cima'>
                                <img className='kar' src="/assets/images/kar.png" width='37vw' height='45vh' alt="" />
                                <h4 className='cima-info'>Karla Brasil </h4>

                            </div>

                            <div className='sub2-baixo'>

                                <h4 className='baixo-info'>Titulo: <span>Mãe Solteira</span>      </h4>
                            </div>


                            <div className='sub3-card'>
                                <div className='sub3-div'>
                                    <h4>Descrição:</h4>
                                </div>

                                <img src='/assets/images/mae-grande.png' className='img-publi' alt='' />
                                <p className='sub3-desc'> Lorem ipsum dolor sit amet. Qui nulla error ut galisum doloremque eum maxime officia est autem error et earum voluptas! Ut assumenda assumenda. At obcaecati beatae et voluptatum distinctio? Nam dolor consectetur hic earum quam est aperiam odit. 33 voluptates beatae ab sunt tenetur et omnis nemo. Non quisquam enim et corrupti dolores ut officiis nostrum et placeat expedita sed alias quasi.</p>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div> casa
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
            </div>
        </main>
    )
}