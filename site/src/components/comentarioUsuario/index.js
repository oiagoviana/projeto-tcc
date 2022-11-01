import './index.scss'
import { useState } from 'react';
import { inserirComentario } from "../../api/publicacaoApi";

export default function ComentUser() {
    const [usuario, setUsuario] = useState();
    const [comentario, setComentario] = useState (0); 

    async function salvarComentario() {
        try {
            const a = await inserirComentario(a, usuario, comentario)
            alert('Comentário Publicado!')

        } catch (err) {
            if (err.message);
        }
    }

    return(
        <div className='container-comentario'>
            <div className='container-nome-coment'>
                <h3>Fazer um Comentario</h3>
            </div>

            <textarea maxLength={300} ></textarea>

            <button className='botao-comentario' onclick = {salvarComentario}>Comentar</button>
        </div>
    )
}