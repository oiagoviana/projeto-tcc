import { AdicionarImagem, buscarImagem, inserirPublicacaoPsi, inserirPublicacaoUsu } from '../../../api/publicacaoApi';
import MenuUsuario from '../../../components/menuusuario';
import storage, { set } from 'local-storage'
import './index.scss'
import { useState } from 'react';



export default function Publicacao() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState();

    async function salvarPublicacao() {
        try {
            if (storage('usuario-logado')) {
                const IDusuario = storage('usuario-logado').id
                const r = await inserirPublicacaoUsu(IDusuario, titulo, descricao)
                await AdicionarImagem(r.id, imagem)
                alert('Publicação usu inserida com sucesso!')
            }

            if (storage('psi-logado')) {
                const IDpsicologo = storage('psi-logado').id
                const r = await inserirPublicacaoPsi(IDpsicologo, titulo, descricao)
                await AdicionarImagem(r.id, imagem)
                alert('Publicação psi inserida com sucesso!')
            }



        }
        catch (err) {
            if (err.response)

                alert(err.response.data.erro);
            else {
                alert(err.message)
            }
        }
    }

    function Limpar() {
        setTitulo('')
        setDescricao('')
    }

    function EscolherFoto() {
        document.getElementById('ClickFoto').click();
    }

    function MostrarFoto() {
        if (typeof (imagem) === 'object') {
            return URL.createObjectURL(imagem)
        }
        else {
            return buscarImagem(imagem)
        }
    }


    return (
        <main className='usuario-page'>
            <div>
                <MenuUsuario pagina='publicar'/>
            </div>

            <div className='conteiner'>

                <div className='container-cima'>
                    <div className='container-titulo'>
                        <label className='label-titulo'>Título</label>
                        <input type="Text" className="input-titulo" value={titulo} onChange={e => setTitulo(e.target.value)} />
                    </div>


                    <div className='container-desc'>
                        <label className='label-desc'>Descrição</label>
                        <textarea className='text-desc' maxLength={400} value={descricao} onChange={e => setDescricao(e.target.value)} ></textarea>

                    </div>
                </div>

                <div className='foto'>

                    <div className='container-foto-download' onClick={EscolherFoto}>
                        {!imagem &&
                            <img src='/assets/images/download-fotos.svg' alt='' />

                        }
                        {imagem &&
                            <img className="foto-publi" src={MostrarFoto()} />
                        }

                        <input type="file" id='ClickFoto' onChange={e => setImagem(e.target.files[0])} />

                    </div>
                </div>

                <div className='botoes-publi'>
                    {storage('usuario-logado') &&
                        <button className='botao-publi' onClick={salvarPublicacao} >Publicar</button>

                    }

                    {storage('psi-logado') &&
                        <button className='botao-publi' onClick={salvarPublicacao} >Publicar</button>

                    }

                    <button className='botao-publi' onClick={Limpar}>Limpar</button>
                </div>
            </div>

            <hr className='linha' />

            <div className='conteiner-coment'>

                <div className='container-titulo-coment'>
                    <h1>Comentarios Destacados</h1>
                </div>

                <img className="logo-mae" src='/assets/images/logo-mae.png' alt='' />
            </div>

        </main>
    );
}