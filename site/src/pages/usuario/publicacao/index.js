import MenuAdm from '../../../components/menuadm';
import './index.scss'



export default function Publicacao() {
    return (
        <main className='usuario-page'>
            <div>
                <MenuAdm />
            </div>
            <div className='conteiner'>

                <label className='label'>Título</label>

                <input type="Text" className="input-titulo" />
                <div />

                <label className='label2'>Descrição</label>

                <input type="Text" className='input-titulo2' />

                <div>
                    <p className='texto'>Foto</p>
                    <div className='container-foto-download'>
                        <img src='/assets/images/download-fotos.svg' alt='' />
                    </div>
                    <p className='texto-download'>Download</p>
                </div>

                <button className='botao-publi'>Publicar</button>
                <button className='botao-limpar'>Limpar</button>

                <hr className='linha' />
            </div>

            <div>
                <div className='container-titulo-coment'>
                    <h1>Comentários destacados</h1>
                </div>

                <div className='container-comentario'>
                    <div className='container-nome-coment'>
                        <h3>Dr. kkkk</h3>
                    </div>

                    <textarea></textarea>
                </div>

                <div className='container-comentario2'>
                    <div className='container-nome-coment'>
                        <h3>Dr. kkkk</h3>
                    </div>

                    <textarea></textarea>
                </div>

                <img className="logo-mae" src='/assets/images/logo-mae.png' alt='' />
            </div>           




        </main>
    );
}