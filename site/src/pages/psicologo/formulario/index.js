import './index.scss'
import '../../../common/common.scss'

export default function Formulario() {

    return (
        <main className='principal-cont'>

            <div> <img className='img-cima' src='/assets/images/triangulo-cima.png' alt='' /> </div>
            <div className='conteiner-1' >
                <p className='texto'> Formulário</p>
            </div>

            <div className='div-mae'>

                <div className='direita'>


                    <label>Nome:</label>
                    <input type="text" className="input-formulario" />



                    <label>Telefone:</label>
                    <input type="text" className="input-formulario" />



                    <label>CPF:</label>
                    <input type="text" className="input-formulario" />



                    <label>CRP:</label>
                    <input type="text" className="input-formulario" />


                </div>

                <div className='direitaa' >

                    <label>Data de Nascimento:</label>
                    <input type="text" className="input-formulario" />


                    <label>Email:</label>
                    <input placeholder='Seu email será usadao em seu login' type="text" className="input-formulario" />


                    <label>Senha:</label>
                    <input placeholder='Sua senha será usada em seu login' type="text" className="input-formulario" />

                   
                </div>
            </div>

                    < div>
                        <button className='botao-formulario'>Enviar Formulario</button>
                    </div>





            <div> <img className='img-baixo' src='/assets/images/triangulo-baixo.png' alt='' /> </div>



        </main>
    )
}