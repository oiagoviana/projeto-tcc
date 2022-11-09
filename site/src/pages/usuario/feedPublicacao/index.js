import './index.scss'
import MenuUsuario from '../../../components/menuusuario'

export default function FeedPublicacao() {



    return (
        <main className='page-feedpubli'>
            <div>
                <MenuUsuario pagina='publicacao' />
            </div>

            <div className='container-direita'>
                <div className='div-publicacoes'>
                    <div className='card-publicacao'>
                        <div className='header-publicacao'>
                            <p className='header-name'>Camila Santos Viana</p>
                            <p className='header-data'>02/07/2004</p>
                        </div>

                        <div className='text-publicacao'>
                            <p>
                                Lorem Lorem Lorem
                            </p>
                        </div>

                        <div className='footer-publicacao'>
                            <p>Ver mais</p>
                            <img src='/assets/images/setaMais.svg' alt='' />
                        </div>
                    </div>
                    <div className='card-publicacao'>
                        <div className='header-publicacao'>
                            <p className='header-name'>Camila Santos Viana</p>
                            <p className='header-data'>02/07/2004</p>
                        </div>

                        <div className='text-publicacao'>
                            <p>
                                Lorem Lorem Lorem
                            </p>
                        </div>

                        <div className='footer-publicacao'>
                            <p>Ver mais</p>
                            <img src='/assets/images/setaMais.svg' alt='' />
                        </div>
                    </div>
                    <div className='card-publicacao'>
                        <div className='header-publicacao'>
                            <p className='header-name'>Camila Santos Viana</p>
                            <p className='header-data'>02/07/2004</p>
                        </div>

                        <div className='text-publicacao'>
                            <p>
                                Lorem Lorem Lorem
                            </p>
                        </div>

                        <div className='footer-publicacao'>
                            <p>Ver mais</p>
                            <img src='/assets/images/setaMais.svg' alt='' />
                        </div>
                    </div>
                    <div className='card-publicacao'>
                        <div className='header-publicacao'>
                            <p className='header-name'>Camila Santos Viana</p>
                            <p className='header-data'>02/07/2004</p>
                        </div>

                        <div className='text-publicacao'>
                            <p>
                                Lorem Lorem Lorem
                            </p>
                        </div>

                        <div className='footer-publicacao'>
                            <p>Ver mais</p>
                            <img src='/assets/images/setaMais.svg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}