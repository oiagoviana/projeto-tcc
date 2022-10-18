import './index.scss'
import MenuAdm from '../../../components/menuadm'


export default function Psicologo() {



    return (
        <main className='page-psicologo'>
            <div>
                <MenuAdm pagina='profissionais' />
            </div>


            <section className='div-direita'>
                <div className='card-principal'>
                    <div className='infos-cima'>
                        <div className='div-info'>
                            <div className='sub-div-info'>
                                <h3>Nome:</h3>
                                <div className='infos'>
                                    <p >admin1</p>
                                </div>
                            </div>

                            <div>
                                <h3>Data nascimento:</h3>
                                <div className='infos'>
                                    <p >01/01/2001</p>
                                </div>
                            </div>
                        </div>

                        <div className='div-info'>
                            <div>
                                <h3>Telefone:</h3>
                                <div className='infos'>
                                    <p >(11)98999-9999</p>
                                </div>
                            </div>

                            <div>
                                <h3>Email:</h3>
                                <div className='infos'>
                                    <p >admin1@admin.com</p>
                                </div>
                            </div>
                        </div>

                        <div className='div-info'>
                            <div>
                                <h3>CPF:</h3>
                                <div className='infos'>
                                    <p >000000000-00</p>
                                </div>
                            </div>

                            <div>
                                <h3>Senha:</h3>
                                <div className='infos'>
                                    <p >12345</p>
                                </div>
                            </div>
                        </div>

                        <div className='div-info'>
                            <div>
                                <h3>CRP:</h3>
                                <div className='infos'>
                                    <p >xx/999-999</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='div-botao'>
                        <button className='button'>Autorizar</button>
                    </div>
                </div>
            </section>
        </main>
    )
}