import { AdicionarImagemUsuario, buscarImagem, inserirPublicacaoUsuario, inserirPublicacaoPsicologo, AdicionarImagemPsicologo } from '../../../api/publicacaoApi';
import MenuAdm from '../../../components/menuadm';
import storage, { set } from 'local-storage'
import './index.scss'
import { useEffect, useState } from 'react';



export default function Publicacao() {

    const [titulo, setTitulo] = useState ('')
    const [descricao, setDescricao] = useState ('')
    const [imagem, setImagem] = useState();

    async function salvarPublicacaoUsuario(){
        try{
                 const IDusuario= storage('usuario-logado').id
               const r = await inserirPublicacaoUsuario(IDusuario, titulo, descricao)
                await AdicionarImagemUsuario(r.id, imagem)
                alert('Publicação inserida com sucesso!')

        }
        catch(err){
            if (err.response)

                alert(err.response.data.erro);
            else {
                alert(err.message)
            }
        }
    }
    
    
    async function salvarPublicacaoPsicologo(){
        try{
                const IDpsicologo= storage('psi-logado').id
               const r = await inserirPublicacaoPsicologo(IDpsicologo, titulo, descricao)
                await AdicionarImagemPsicologo(r.id, imagem)
                alert('Publicação inserida com sucesso!')

        }
        catch(err){
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
                <MenuAdm />
            </div>
            <div className='conteiner'>

                <label className='label'>Título</label>

                <input type="Text" className="input-titulo" value={titulo} onChange={e => setTitulo(e.target.value)} />
                <div />

                <label className='label2'>Descrição</label>

                <input type="Text" className='input-titulo2' value={descricao} onChange={e => setDescricao(e.target.value)}  />

                <div>
                    <p className='texto'>Foto</p>
                    <div className='container-foto-download' onClick={EscolherFoto}>
                        {!imagem &&
                            <img src='/assets/images/download-fotos.svg' alt='' />
                            
                            }
                            {imagem &&
                            <img className="foto-publi" src={MostrarFoto()}/>
                            }
                            
                            <input type="file" id='ClickFoto' onChange={e  => setImagem(e.target.files[0])}/>
                        
                    </div>
                    <p className='texto-download'>Download</p>
                </div>
                {storage('usuario-logado') &&
                <button className='botao-publi' onClick={salvarPublicacaoUsuario}>Publicar</button>
                
                }
                {storage('psi-logado') &&
                <button className='botao-publi' onClick={salvarPublicacaoPsicologo}>Publicar</button>
                
                }
                <button className='botao-limpar' onClick={Limpar}>Limpar</button>

                <hr className='linha' />
            </div>

            <div>

                <div className='container-titulo-coment'>
                    <h1>Adicionar Comentário</h1>
                </div>

                
                <textarea></textarea>


                <img className="logo-mae" src='/assets/images/logo-mae.png' alt='' />

            </div>           

        </main>
    );
}