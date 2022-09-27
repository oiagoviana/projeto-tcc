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

                <div>
                    <img src="/assets/images/adicionarindicacao.svg" />
                </div>

                <div className="card-principal">

                    <div>
                        <img src="/assets/images/indicar.png" />

                    </div>

                    <div className='card-indicacao'>
                        <p>Nome do Local</p>
                        <p>Fleury</p>

                        <p>Nome da Cidade</p>
                        <p>São Paulo - SP</p>

                        <p>Classificação</p>
                        <p>4.5</p>

                        <p>CEP</p>
                        <p>00000-000</p>

                        <p>Endereço</p>
                        <p>Grajaú</p>

                        <p>Categoria</p>
                        <p>Saúde</p>
                    </div>

                </div>
            </div>

        </main>
    );
}