import './index.scss'


export default function LoginPsi(){


    return(
        <main className='page-login'>

            <div className='container-esquerdo'>
                <img className='img-psi' src='/assets/images/logo-psiLogin.png' alt='' />

                <h3 className='texto-1'>“A ciência moderna ainda não produziu um medicamento tranquilizador tão eficaz como são umas poucas palavras boas”</h3>


                <img className='img-bola1' src='/assets/images/bolinha-cima.png' alt='bola1' />
                <img className='img-bola2' src='/assets/images/bolinha-baixo.png' alt='bola2' />
            </div>



            <div className='container-direito'>
                <div className='sub-container-direito'>
                    <h1> Login Psicólogo</h1>

                    <div className='container-inputs'>
                        <div className='container-input-individual'>
                            <label>Email</label>
                            <input  placeholder='Entre com o seu email'  className='input-credenciais' type='text' />
                        </div>


                        <div className='container-input-individual'>
                            <label>Senha</label>
                            <input placeholder='Entre com a sua senha' className='input-credenciais' type='text' />
                        </div>
                    </div>


                        <div className='container-criar-conta'>
                            <button className='botao-criar-conta'>Entrar</button>

                            
                        </div>
                    </div>
                </div>
            
        </main>
       
    )
}