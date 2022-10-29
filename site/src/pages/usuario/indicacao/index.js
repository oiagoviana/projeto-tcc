import './index.scss'
import { consultarIndicacoes } from '../../../api/indicacaoApi'
import { useEffect, useState } from 'react'

{/* import { Map, GoogleApiWrapper } from 'google-maps-react'; */}



export default function Indicacao() {
    const [indicacao, setIndicacao] = useState([]);

    async function carregarIndicacoes() {
        const carregados = await consultarIndicacoes();
        console.log(carregados);
        setIndicacao(carregados);
    }

    useEffect(() => {
        carregarIndicacoes();
    }, [])

    return (
        <main className='page-user-indicacao'>
            <div className='container-header'>
                <button className='botao-home'>HOME</button>

                <input type='text' placeholder='O que você procura...?' />
                <img src='/assets/images/img-lupa.svg' alt='img-lupa' />
            </div>

            <div className='container-meio'>
                <div className='container-cards'>

                    <h2>FILTROS</h2>

                    <div className='subcontainer-cards'>

                        {indicacao.map(item =>
                            <div className='card-indicacao' key={item.id}>
                                <img className='img-hospital' src='/assets/images/hospital.svg' alt='hosp' />

                                <p className='text-hosp'>{item.nome}</p>

                                <p className='text-endereco'>Endereço: {item.endereco} – {item.cidade}, {item.cep}</p>
                                <div className='container-telefone'>
                                    <p className='text-telefone'>Telefone: {item.telefone}</p>
                                    <p>Classificação: {item.classificacao}</p>
                                </div>
                                <p className='text-horario'>
                                    Horário de Funcionamento:
                                    <span>{item.atendimento}</span>
                                </p>
                            </div>

                        )}

                    </div>

                </div>

                <div className='container-mapa'>
                    <button className='botao-mapa'>MAPA DO GOOGLE <img className='mapinha-botao' src='/assets/images/img-mapinha.svg' alt='img-mapinha' /> </button>

                    {/*{<Map
                        google={this.props.google}
                        zoom={7}
                        initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
                    >
                    </Map>}*/}

                    <a target='_blank' rel='noopener noreferrer' href='https://www.google.com.br/maps'><img className='google-mapa' src='/assets/images/mapa-tcc.svg' alt='mapa' /></a>
                </div>
            </div>

            <img className='imagem-triangulo-direito' src='/assets/images/triangulo-lado-direito.svg' alt='triangulo-direito' />
            <img className='imagem-triangulo-esquerdo' src='/assets/images/triangulo-lado-esquerdo.svg' alt='triangulo-esquerdo' />
        </main>
    )
}