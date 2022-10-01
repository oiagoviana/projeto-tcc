import './index.scss'

export default function Cadastro() {
    return(
        <main className='page-cadastro'>

            <div className='container-esquerdo'>
                <img className='img-maeCadastro' src='/assets/images/maeCadastro.png' alt='mulher-cadastro' />

                <h3>No colo de uma mãe existe o paraíso e na sua existência todo o amor do mundo.</h3>


                <img className='img-bola1' src='/assets/images/bolinha-cima.png' alt='bola1' />
                <img className='img-bola2' src='/assets/images/bolinha-baixo.png' alt='bola2' />
            </div>



            <div className='container-direito'>
                <div className='sub-container-direito'>
                    <h1>Cadastre-se</h1>

                    <div className='container-inputs'>
                        <div className='container-input-individual'>
                            <p className='titulo-input'>Email</p>
                            <input className='input-credenciais' type='text' />
                        </div>

                        <div className='container-input-individual'>
                            <p className='titulo-input'>Nome de Usuário</p>
                            <input className='input-credenciais' type='text' />
                        </div>

                        <div className='container-input-individual'>
                            <p className='titulo-input'>Senha</p>
                            <input className='input-credenciais' type='text' />
                        </div>
                    </div>

                    <div className='container-termos'>
                        <div className='container-checkbox'>
                            <input className='input-checkbox' type='checkbox' />

                            <p>Eu aceito Colo de Mãe e Pai e Concordo com os termos.</p>
                        </div>

                        <div className='container-criar-conta'>
                            <button className='botao-criar-conta'>Criar Conta</button>

                            <div className='container-faca-login'>
                                <p>Você já tem uma conta?</p>

                                <a href='#'>Faça login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}