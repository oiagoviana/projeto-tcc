import './index.scss'



export default function Login() {
    return(
        <main className='page-login'>
            <div className='container-esquerdo'>
                <h1>Login</h1>

                <div className='container-inputs'>
                    <div>
                        <p>Email:</p>

                        <input type='text' />
                    </div>

                    <div>
                        <p>Senha:</p>

                        <input type='text' />
                    </div>
                </div>

                <button>Entrar</button>

                <div className='container-cadastre-se'>
                    <p>Ainda não tem uma conta?</p>
                    <a href='#'>Cadastre-se</a>
                </div>
            </div>
            <div className='container-direito'>
                <img className='img-paiLogin' src='/assets/images/paiLogin.png' alt='homem-login' />

                <h3>Não existe lugar mais poderoso e tranquilizador que o colo de pai.</h3>


                <img className='img-bola-direita' src='/assets/images/img-bola-inferior-direita-login.svg' alt='bola-da-direita' />
                <img className='img-bola-esquerda' src='/assets/images/img-bola-superior-esquerdo-login.svg' alt='bola-da-esquerda' />
            </div>
        </main>
    );
}