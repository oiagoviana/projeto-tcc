import './index.scss'
import MenuAdm from '../../../components/menuadm'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { autorizarPsi, listarPsi } from '../../../api/psicologoApi';
import {toast} from 'react-toastify'


export default function Psicologo() {
    const [psicologo, setPsicologo] = useState({ data: null });
    const { idParam } = useParams();
    const navigate = useNavigate();

    async function listarPsicologos() {
        const resposta = await listarPsi(idParam);
        setPsicologo(resposta);
    }

    async function Autorizar() {
        
        await autorizarPsi(idParam);
        setTimeout(() => {
            navigate('/admin/psicologoCard');
        }, 2000)
        toast.dark('Psicólogo autorizado!');
            
    }
    

    useEffect(() => {
        if (idParam)
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
                                    <p > {psicologo.data ? psicologo.data.substr(0, 10) : ''} </p>
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
                        <button className='button' onClick={Autorizar}>Autorizar</button>
                    </div>
                </div>
            </section>
        </main>
    )
}