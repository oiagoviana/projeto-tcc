import './index.scss'
import MenuAdm from '../../../components/menuadm'
import { useEffect, useState } from 'react'
import { autorizarPsi } from '../../../api/psicologoApi.js';
import { useParams } from 'react-router-dom';


export default function Psicologo() {
    const [psicologo, setPsicologo] = useState([]);
    const { idParam } = useParams();

    async function listarPsicologos() {
        const resposta = await autorizarPsi(idParam);
        console.log(resposta);
        setPsicologo(resposta);
    }

    useEffect(() => {
        if(idParam)
        listarPsicologos();
    }, [])


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
                                    <p> {psicologo.nome} </p>
                                </div>
                            </div>

                            <div>
                                <h3>Data nascimento:</h3>
                                <div className='infos'>
                                    <p > {psicologo.data} </p>
                                </div>
                            </div>
                        </div>

                        <div className='div-info'>
                            <div>
                                <h3>Telefone:</h3>
                                <div className='infos'>
                                    <p > {psicologo.telefone} </p>
                                </div>
                            </div>

                            <div>
                                <h3>Email:</h3>
                                <div className='infos'>
                                    <p > {psicologo.email} </p>
                                </div>
                            </div>
                        </div>

                        <div className='div-info'>
                            <div>
                                <h3>CPF:</h3>
                                <div className='infos'>
                                    <p > {psicologo.cpf} </p>
                                </div>
                            </div>

                            <div>
                                <h3>Senha:</h3>
                                <div className='infos'>
                                    <p > {psicologo.senha} </p>
                                </div>
                            </div>
                        </div>

                        <div className='div-info'>
                            <div>
                                <h3>CRP:</h3>
                                <div className='infos'>
                                    <p > {psicologo.crp} </p>
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