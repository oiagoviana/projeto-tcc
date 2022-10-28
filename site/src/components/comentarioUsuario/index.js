import './index.scss'

export default function ComentUser() {
    return(
        <div className='container-comentario'>
            <div className='container-nome-coment'>
                <h3>Fazer um Comentario</h3>
            </div>

            <textarea maxLength={300} ></textarea>

            <button className='botao-comentario'>Comentar</button>
        </div>
    )
}