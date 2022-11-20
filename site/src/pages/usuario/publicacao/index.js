import { AdicionarImagem, atualizarPublicacao, buscarImagem, inserirPublicacaoPsi, inserirPublicacaoUsu, mostrarPublicacaoUsuId } from '../../../api/publicacaoApi';
import MenuUsuario from '../../../components/menuusuario';
import storage from 'local-storage'
import './index.scss'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';



export default function Publicacao() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState();
    const { idParam } = useParams();
    const [id, setId] = useState(0);

    const navigate = useNavigate();

    async function salvarPublicacao() {
        try {
            if (id === 0) {
                if (storage('usuario-logado')) {

                    const IDusuario = storage('usuario-logado').id
                    const r = await inserirPublicacaoUsu(IDusuario, titulo, descricao)
                    await AdicionarImagem(r.id, imagem)
                    setId(r.id);
                    
                    toast.dark('Publicação usu inserida com sucesso!')

                }

                else if (storage('psi-logado')) {

                    const IDpsicologo = storage('psi-logado').id
                    const r = await inserirPublicacaoPsi(IDpsicologo, titulo, descricao)
                    await AdicionarImagem(r.id, imagem)
                    setId(r.id);
                    toast.dark('Publicação psi inserida com sucesso!')

                }
            }
            else {
                await atualizarPublicacao(id, titulo, descricao)
                if (typeof (imagem) == 'object') {
                    await AdicionarImagem(id, imagem);
                }
                setTimeout(() => {
                    navigate('/usuario/feedpublicacao');
                }, 2000)
                toast.success('Publicação alterada com sucesso 🚀');
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

    async function listarPublicacaoId() {
        const resposta = await mostrarPublicacaoUsuId(idParam);
        setTitulo(resposta[0].titulo);
        setDescricao(resposta[0].descricao);
        setImagem(resposta[0].imagem);
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

    useEffect(() => {
        if (idParam) {
            listarPublicacaoId()
            setId(idParam)
        }
    }, [])


    return (
        <main className='usuario-page'>
            <div>
                <MenuUsuario pagina='publicar' />
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

                    <div  onClick={EscolherFoto}>
                        {!imagem &&
                            <img className='container-foto-download' src='/assets/images/download-fotos.svg' alt='' />

                        }
                        {imagem &&
                            <img className="foto-publi" src={MostrarFoto()} />
                        }

                        <input type="file" id='ClickFoto' onChange={e => setImagem(e.target.files[0])} />

                    </div>
                </div>

                <div className='botoes-publi'>
                    {storage('usuario-logado') &&
                        <button className='botao-publi' onClick={salvarPublicacao}> {id === 0 ? 'Publicar' : 'Alterar'}</button>
                    }

                    {storage('psi-logado') &&
                        <button className='botao-publi' onClick={salvarPublicacao} > {id === 0 ? 'Publicar' : 'Alterar'}</button>
                    }

                    <button className='botao-publi' onClick={Limpar}>Limpar</button>
                </div>
            </div>

            <hr className='linha' />

            <div className='conteiner-coment'>

                <div className='container-titulo-coment'>
                    <h1>Comentarios Destacados</h1>
                </div>

            </div>

        </main>
    );
}