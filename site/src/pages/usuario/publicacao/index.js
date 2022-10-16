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

                <p className='texto'>Foto</p>




                <button className='botao-publi'>Publicar</button>
                <button className='botao-limpar'>Limpar</button>

                <hr className='linha' />
            </div>

           




        </main>
    );
}