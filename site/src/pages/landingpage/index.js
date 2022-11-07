import './index.scss'



export default function Landing() {
    return (
        <main className='pagina1'>
            <div className='conteiner1'>
                <img className='logo-mae' src='/assets/images/logo-mae.png' alt='' />
                <div className='texto-1'>
                    <p>Publicação </p>
                    <p >Profissionais </p>
                    <p >Indicações </p>
                </div>

                <button className='botao1'>Login </button>

            </div>

            <div className='conteiner2'>
                <img className='imagem-bb' src='/assets/images/colobb.png' />

                <img className='onda-1' src='/assets/images/teste.png' />

                <h1 className='texto-2'>O Colo que todos nós precisamos e  queremos receber!</h1>
            </div>

            <div className='conteiner3'>

                <h1 className='sobre-nos'> Sobre nós</h1>

                <p className='texto-3'>Nossa equipe deseja fazer do nosso site <br /> um lugar confortável para as pessoas que <br /> precisam de ajuda e quem tem <br />curiosidade sobre a maternidade.</p>

                <img className='maos' src='/assets/images/criancamao.png' />
            </div>

            <div className='conteiner4'>


                <img className='primeira' src='assets/images/primeira.png' />


                <h1 className='missao'>Missão</h1>

                <img className='linha1' src='/assets/images/linha.png' />

                <p className='texto-4'>Queremos construir uma sociedade melhor<br /> onde pessoas se sintam mais abertas a <br />conversarem com quem se identificam.</p>

                <img className='quadrado' src='/assets/images/quadrado.png' />

                <img className='quadrado-1' src='/assets/images/mao.png' />

            </div>

            <div className='conteiner5'>

               
                    <p className='valores'>Valores</p>

                    <img className='linha2' src='/assets/images/linha.png' />
               

                <div className='todos'>


                    <div className='seguranca'>
                        <img className='seguranca-imagem' src='/assets/images/seguranca.png' />

                        <p className='seguranca-texto1'>Segurança</p>
                        <img className='linha-seguranca' src='/assets/images/linha-valores.png' />

                        <p className='seguranca-texto2'>Prezamos pela <br />sua privacidade</p>
                    </div>

                    <div className='confianca'>
                        <img className='confianca-imagem' src='/assets/images/confianca.png' />

                        <p className='confianca-texto1'>Confiança</p>
                        <img className='linha-confianca' src='/assets/images/linha-valores.png' />

                        <p className='confianca-texto2'>Um lugar para se sentir confortável</p>
                    </div>
                    <div className='diversidade'>
                        <img className='diversidade-imagem' src='/assets/images/diversidade.png' />

                        <p className='diversidade-texto1'>Diversidade</p>
                        <img className='linha-diversidade' src='/assets/images/linha-valores.png' />

                        <p className='diversidade-texto2'>Valorizamos os princípios humanos </p>
                    </div>
                    <div className='etica'>
                        <img className='etica-imagem' src='/assets/images/etica.png' />

                        <p className='etica-texto1'>Ètica</p>
                        <img className='linha-etica' src='/assets/images/linha-valores.png' />

                        <p className='etica-texto2'>Respeitamos todas as formas de amor</p>
                    </div>

                </div>




            </div>

            <img className='segunda' src='/assets/images/borda.png' />



        </main>
    );
}