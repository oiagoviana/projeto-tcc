import Menu from '../../../components/menuadm'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useRef } from 'react'
import { deletarIndicacao } from '../../../api/indicacaoApi'

export default function IndicacaoCard() {
    const navigate = useNavigate();
    const ref= useRef();

    function adicionar () {
        setTimeout(() => {
            navigate('/admin/indicacao');    
        }, 500 )

    }

   async function deletarIndicacao (id){
    const resposta = await deletarIndicacao (id);
   }

    return (
        <main className='page-indicacao'>
            <LoadingBar color='#6F4528' ref={ref} />
            <div>
                <Menu  pagina='indicacao'/>
            </div>

            <div className="div-direita">
                <div>
                    <h2>Verificações de Publicações Pendentes</h2>
                </div>

                <div >
                    <img onClick={adicionar} src="/assets/images/adicionarindicacao.svg"   />
                </div>

                <div className="card-principal">

                    <div>
                        <img src="/assets/images/indicar.png" />
                    </div>

                    <div className='card-indicacao'>
                        <div className='div-alinhamentos'>
                            <span className='span-titulo'>Nome do Local</span>
                            <span className='span-texto'>Fleury</span>

                            <span className='span-titulo'>Nome da Cidade</span>
                            <span className='span-texto'>São Paulo - SP</span>

                            <span className='span-titulo'>Classificação</span>
                            <span className='span-texto'>4.5</span>
                            </div>
                        

                        <div className='div-alinhamentos'>
                            <span className='span-titulo'>CEP</span>
                            <span className='span-texto'>00000-000</span>

                            <span className='span-titulo'>Endereço</span>
                            <span className='span-texto'>Grajaú</span>

                            <span className='span-titulo'>Categoria</span>
                            <span className='span-texto'>Saúde</span>
                            </div>
                    
                        <div className='div-botoes'>
                            <img className='botoes-alterar' src="/assets/images/editar.svg" />
                            <img onClick={deletarIndicacao} className='botoes-alterar' src="/assets/images/lixeira.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}