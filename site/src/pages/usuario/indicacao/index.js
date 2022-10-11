import './index.scss'

import Cards from '../../../components/indicacaousuario'

export default function Indicacao() {
    return(
        <main className='page-user-indicacao'>
            <div className='container-header'>
                <button className='botao-home'>HOME</button>

                <input type='text' placeholder='O que você procura...?' />
            </div>

            <div className='container-meio'>
                <div className='container-cards'>

                    <h2>FILTROS</h2>

                    <div className='subcontainer-cards'>
                        <Cards />

                        <Cards />
                    </div>

                </div>

                <div className='container-mapa'>
                    <button className='botao-mapa'>MAPA DO GOOGLE</button>

                    <div>mapa</div>
                </div>
            </div>

            <img className='imagem-triangulo-direito' src='/assets/images/triangulo-lado-direito.svg' alt='triangulo-direito' />    
            <img className='imagem-triangulo-esquerdo' src='/assets/images/triangulo-lado-esquerdo.svg' alt='triangulo-esquerdo' />    
        </main>
    )
}