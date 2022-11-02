import './index.scss'
import { useState } from 'react';
import { inserirComentarioPsi, inserirComentarioUsu } from "../../api/publicacaoApi";
import storage from 'local-storage';
import { useParams } from 'react-router-dom';

export default function ComentUser() {
    const [comentario, setComentario] = useState('');
    const {idParam} = useParams()
    async function salvarComentario() {
        try {
            if (storage('usuario-logado')) {
                const IDusuario = storage('usuario-logado').id;
                const a = await inserirComentarioUsu(idParam, IDusuario, comentario);
                alert('Comentário Publicado!')
            }

            
            if (storage('psi-logado')) {
                const IDpsicologo = storage('psi-logado').id;
                const r = await inserirComentarioPsi(IDpsicologo, comentario);
                alert('Comentário Publicado!')
            }

        }catch (err) {
            if (err.response)

                alert(err.response.data.erro);
            else {
                alert(err.message)
            }
        }
    }

    return (
        <div className='container-comentario'>
            <div className='container-nome-coment'>
                <h3>Fazer um Comentario</h3>
            </div>

            <textarea maxLength={300} value={comentario} onChange={e => setComentario(e.target.value)}></textarea>


            {storage('usuario-logado') &&
                <button className='botao-comentario' onClick={salvarComentario} >Comentar</button>

            }

            {storage('psi-logado') &&
                <button className='botao-comentario' onClick={salvarComentario} >Comentar</button>

            }
         </div>
    )
}