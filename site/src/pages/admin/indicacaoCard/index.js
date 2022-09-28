import Menu from '../../../components/menuadm'
import './index.scss'


export default function indicacaoCard() {


    return (
        <main className='page-indicacao'>
            <div>
                <Menu />
            </div>

            <div className="div-direita">
                <div>
                    <h2>Verificações de Publicações Pendentes</h2>
                </div>

                <div >
                    <img src="/assets/images/adicionarindicacao.svg" />
                </div>

                <div className="card-principal">

                    <div>
                        <img src="/assets/images/indicar.png" />

                    </div>

                    <div className='card-indicacao'>
                        <div>
                            <h4>Nome do Local</h4>
                            <p>Fleury</p>

                            <h4>Nome da Cidade</h4>
                            <p>São Paulo - SP</p>

                            <h4>Classificação</h4>
                            <p>4.5</p>

                        </div>

                        <div>

                            <h4>CEP</h4>
                            <p>00000-000</p>

                            <h4>Endereço</h4>
                            <p>Grajaú</p>

                            <h4>Categoria</h4>
                            <p>Saúde</p>
                        </div>
                    </div>

                    
                    <img src="/assets/images/editar.svg" />
                    <img src="/assets/images/lixeiraa.png" />
                </div>
            </div>

        </main>
    );
}