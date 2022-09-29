import './index.scss'
import MenuAdm from '../../../components/menuadm'




export default function PsicologoCard() {


    return (
        <main className='psi-page'>
            <div>
                <MenuAdm />
            </div>

            <div className='div-principal'>
                <div>
                    <h2>Verificações de Profissionais Pendentes</h2>
                </div>

                <section className='div-secundaria'>
                    <div className='div-cardInformacoes'>
                        <div>
                            <img src="/assets/images/retanguloPsi.png" alt="" />
                        </div>

                        <div className="div-informações">
                            <span className='span-titulo'>Nome</span>
                            <span className='span-informacao'>Admin1</span>

                            <span className='span-titulo'>E-mail</span>
                            <span className='span-informacao'>admin@admin.com</span>

                            <span className='span-titulo'>Telefone</span>
                            <span className='span-informacao'>(11)98999-9999</span>

                            <span className='span-titulo'>CRP</span>
                            <span className='span-informacao'>XX/999.999</span>

                            <div className='div-img-setinha'>
                                <img src="/assets/images/setinhaPsi.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='div-cardInformacoes'>
                        <div>
                            <img src="/assets/images/retanguloPsi.png" alt="" />
                        </div>

                        <div className="div-informações">
                            <span className='span-titulo'>Nome</span>
                            <span className='span-informacao'>Admin1</span>

                            <span className='span-titulo'>E-mail</span>
                            <span className='span-informacao'>admin@admin.com</span>

                            <span className='span-titulo'>Telefone</span>
                            <span className='span-informacao'>(11)98999-9999</span>

                            <span className='span-titulo'>CRP</span>
                            <span className='span-informacao'>XX/999.999</span>

                            <div className='div-img-setinha'>
                                <img src="/assets/images/setinhaPsi.svg" alt="" />
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
}