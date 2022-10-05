import './index.scss'
import Menu from '../../../components/menuadm'
import { addIndicacao, alterarImagemIndicacao, listarCategoria, consultarIndicacoesPorId, alterarIndicacao, buscarImagem } from '../../../api/indicacaoApi'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

import { useEffect, useRef, useState } from 'react'


export default function Indicações() {

    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [classificacao, setClassificacao] = useState(0);
    const [atendimento, setAtendimento] = useState('');
    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);
    const navigate = useNavigate();
    const { idParam } = useParams();

    async function adicionarIndicacao() {
        try {
            if(id === 0) {
            const indicacao = await addIndicacao(nome, cidade, cep, endereco, classificacao, atendimento, idCategoria);
            const indicacaoImagem = await alterarImagemIndicacao(indicacao.id, imagem);
            setId(indicacao.id);
            setTimeout(() => {
                navigate('/admin/indicacao');
            }, 500)
            toast.dark('Indicação cadastrada com sucesso!');
        }
        else{
            await alterarIndicacao(idParam ,nome, cidade, cep, endereco, classificacao, atendimento, idCategoria);
            if(typeof(foto) == 'object'){
                await alterarImagemIndicacao(idParam, imagem)
            }
            toast.success('Indicação alterada com sucesso 🚀');
        }

        } catch (err) {
            if (err.response.status)
                toast.error(err.response.data.erro);
        }
    }

    async function carregarCategoria() {
        const resposta = await listarCategoria();
        setCategoria(resposta);
    }

    function escolherImagem() {
        document.getElementById('imagem-oculta').click();
    }

    function mostrarImagem() {
        return URL.createObjectURL(imagem);
    }


    useEffect(() => {
        carregarCategoria();
    }, [])

    async function listarIndicacoesPorId (){

        const resposta = await consultarIndicacoesPorId (idParam)

        setNome(resposta.nome);
        setCidade(resposta.cidade);
        setCep(resposta.cep);
        setEndereco(resposta.endereco);
        setAtendimento(resposta.atendimento)
        setClassificacao(resposta.classificacao);
        setImagem(resposta.imagem);
        setIdCategoria(resposta.categoria)

        console.log (resposta)
        console.log (categoria)
        
        
    }

    useEffect (() => {
        listarIndicacoesPorId();
    }, [])

    function MostrarFoto() {
        if(typeof (imagem) === 'object'){
       return URL.createObjectURL(imagem)
        }
        else{
            return buscarImagem(imagem)
        }

     }

    return (
        <main className="principal">

            <div>
                <Menu
                    pagina='indicacao'
                />
            </div>


            <div className="segunda-principal">

                <div className="container-direita">

                    <div>
                        <label>Nome do Local:</label>
                        <input type="text" className="input-indicacao" value={nome} onChange={e => setNome(e.target.value)} />

                    </div>

                    <div>
                        <label>Nome da Cidade:</label>
                        <input type="text" className="input-indicacao" value={cidade} onChange={e => setCidade(e.target.value)} />
                    </div>

                    <div>
                        <label>Categoria do Local:</label>

                        <select className="categoria" value={idCategoria} onChange={e => setIdCategoria(e.target.value)}>
                            <option disabled selected hidden> Selecione </option>
                            {categoria.map(item =>
                                <option value={item.id}> {item.categoria} </option>
                            )}
                        </select>
                    </div>

                    <div>
                        <label>Horário de Atendimento:</label>
                        <input  type="text" className="input-indicacao" value={atendimento} onChange={e => setAtendimento(e.target.value)} />
                    </div>

                    <div>
                        <label>Classificação do Local:</label>
                        <input type="Number" min='1' max='5' className="input-indicacao" value={classificacao} onChange={e => setClassificacao(e.target.value)} />
                    </div>

                </div>

                <div className="container-esquerda">
                    <div>
                        <label>Endereço:</label>
                        <input type="text" className="input-indicacao" value={endereco} onChange={e => setEndereco(e.target.value)} />
                    </div>

                    <div>
                        <label className="div-cep">CEP:</label>
                        <input type="text" className="input-indicacao" value={cep} onChange={e => setCep(e.target.value)} />
                    </div>

                    <div className='imagem-indicacao' onClick={escolherImagem}>
                        {!imagem &&
                            <img src='/assets/images/icon-upload.svg' alt='' />
                        }

                        {imagem &&
                            <img className='imagem-capa' src={mostrarImagem()} alt=' ' />
                        }
                        
                        <input type='file' id='imagem-oculta' onChange={e => setImagem(e.target.files[0])} />
                    </div>
                    

                    <button className='botao-publicar' onClick={adicionarIndicacao} > {id === 0 ? 'Publicar' : 'Alterar'} Indicação</button>

                </div>


            </div>


        </main>
    );
}