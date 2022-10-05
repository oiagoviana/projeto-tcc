import Menu from '../../../components/menuadm'
import { toast } from 'react-toastify'
import './index.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useRef, useState } from 'react'
import { deletarIndicacao, consultarIndicacoes, consultarIndicacoesPorId, buscarImagem } from '../../../api/indicacaoApi'


export default function IndicacaoCard() {
    const navigate = useNavigate();
    const ref = useRef();
    const [indicacoes, setIndicacoes] = useState([]);

   

    
 
    function adicionar() {
        setTimeout(() => {
            navigate('/admin/indicacao');
        }, 500)
    }

    async function removerIndicacao(id, nome) {

        confirmAlert({
            title: "Remover Indicação",
            message: `Deseja remover a indicação ${nome}`,
            buttons: [{
                label: 'Sim',
                onClick: async () => {
                    await deletarIndicacao(id);
                    await listarIndicacoes();
                    toast.dark('Produto removido com sucesso!')
                }

            },
            {
                label: 'Não'
            }
            ]
        }
        )
    }



    async function listarIndicacoes() {
        const resposta = await consultarIndicacoes();
        setIndicacoes(resposta);
    }

    useEffect(() => {
        listarIndicacoes(); 
    }, []);

    async function editarIndicacao(id){
        navigate(`/admin/indicacao/${id}`)
    }

    return (
        <main className='page-indicacao'>
            <LoadingBar color='#6F4528' ref={ref} />
            <div>
                <Menu pagina='indicacao' />
            </div>

            <div className="div-direita">
                <div>
                    <h2>Verificações de Publicações Pendentes</h2>
                </div>

                <div >
                    <img onClick={adicionar} src="/assets/images/adicionarindicacao.svg" />
                </div>

                {indicacoes.map(item =>
                    <div className="card-principal">


                        <div>
                            <img src="/assets/images/indicar.png" />
                        </div>

                        <div className='card-indicacao'>
                            <div className='div-alinhamentos'>
                                <span className='span-titulo'>Nome do Local</span>
                                <span className='span-texto'>{item.nome}</span>

                                <span className='span-titulo'>Nome da Cidade</span>
                                <span className='span-texto'> {item.cidade}</span>

                                <span className='span-titulo'>Classificação</span>
                                <span className='span-texto'> {item.classificacao}</span>
                            </div>


                            <div className='div-alinhamentos'>
                                <span className='span-titulo'>CEP</span>
                                <span className='span-texto'> {item.cep}</span>

                                <span className='span-titulo'>Endereço</span>
                                <span className='span-texto'> {item.endereco}</span>

                                <span className='span-titulo'>Categoria</span>
                                <span className='span-texto'> {item.categoria}</span>
                            </div>

                            <div className='div-botoes'>
                                <img onClick={() => editarIndicacao(item.id)} className='botoes-alterar' src="/assets/images/editar.svg" />
                                <img onClick={() => removerIndicacao(item.id, item.nome) } className='botoes-alterar' src="/assets/images/lixeira.svg" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}