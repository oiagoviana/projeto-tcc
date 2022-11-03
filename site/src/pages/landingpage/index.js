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
                <img className='imagem-bb' src='/assets/images/colobb.png'/>

                <img className='onda-1'src='/assets/images/teste.png'/>

                <h1 className='texto-2'>O Colo que todos nós precisamos e  queremos receber!</h1>
            </div>

            <div className='conteiner2'>

                <h1 className='sobre-nos'> Sobre nós</h1>

                <p className='texto-3'>Nossa equipe deseja fazer do nosso site um lugar confortável para as pessoas que precisam de ajuda e quem tem curiosidade sobre a maternidade.</p>
                <img className='maos'src='/assets/images/criancamao.png'/>
            </div>

            <div className='conteiner4'>
               
                
                <img className='primeira'src='assets/images/primeira.png'/>
                <img className='segunda'src='/assets/images/segunda.png'/>

                <h1 className='missao'>Missão</h1>

                <img className='linha1' src='/assets/images/linha.png'/>
             
                <p className='texto-4'>Queremos construir uma sociedade melhor<br/> onde pessoas se sintam mais abertas a <br/>conversarem com quem se identificam.</p>

                <img className='quadrado'src='/assets/images/quadrado.png'/>
            </div>


        </main>
    );
}