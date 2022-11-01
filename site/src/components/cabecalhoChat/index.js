import './index.scss'


export default function CabecalhoChat() {


    return (
        <main className='page-cabecalhoChat'>
            <div className='itens-cabecalho'>

                <img src="/assets/images/setaVoltar.svg" className='imagem-seta' />


                <div className='div-nome'>
                    <span className='nome'>B</span>
                    <div className='subdiv-nome'>
                        <p className='nomedr'>Dr. Bruna Oliveira</p>
                        <p className='disp'>Disponível</p>
                    </div>
                </div>


            </div>
        </main>
    );
}