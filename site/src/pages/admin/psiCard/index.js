import './index.scss'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import MenuAdm from '../../../components/menuadm'
import { listarPsicologo } from '../../../api/psicologoApi'



export default function PsicologoCard() {
    const [psicogolos, setPsicolgos] = useState([]);
    const navigate = useNavigate();




    async function carregarPsicologos() {
        const resp = await listarPsicologo();
        setPsicolgos(resp);
    }

    function abrirCardPsi(id) {
        navigate(`/admin/psicologo/${id}`)
    }


    useEffect(() => {
        carregarPsicologos();
    }, []);



    return (
        <main className='psi-page'>
            <div>
                <MenuAdm  pagina='profissionais'/>
            </div>

            <div className='div-principal'>
                <div>
                    <h2>Verificações de Profissionais Pendentes</h2>
                </div>

                <section className='div-secundaria'>
                {psicogolos.map(item => 
                    <div className='div-cardInformacoes'>
                        <div>
                            <img className='retangulo' src="/assets/images/retanguloPsi.png" alt="" />
                        </div>

                        <div className='div-cards'>
                            
                                <div className="div-informações">
                                    <span className='span-titulo'>Nome</span>
                                    <span className='span-informacao'> {item.nome} </span>

                                    <span className='span-titulo'>E-mail</span>
                                    <span className='span-informacao'> {item.email} </span>

                                    <span className='span-titulo'>Telefone</span>
                                    <span className='span-informacao'> {item.telefone} </span>

                                    <span className='span-titulo'>CRP</span>
                                    <span className='span-informacao'> {item.crp} </span>

                                    <div className='div-img-setinha'>
                                        <img onClick={() => abrirCardPsi(item.id)} src="/assets/images/setinhaPsi.svg" alt="" />
                                    </div>
                                </div>
                           
                        </div>
                    </div>
                    )}
                </section>
            </div>
        </main>
    );
}