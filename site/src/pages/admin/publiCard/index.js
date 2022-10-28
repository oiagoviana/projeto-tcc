import './index.scss'
import MenuAdm from '../../../components/menuadm'
import { useEffect, useState } from 'react'
import { listarPublicacaoPsicologo, listarPublicacaoUsuario } from '../../../api/publicacaoApi';
import { useNavigate } from 'react-router-dom';
import { buscarImagem } from '../../../api/publicacaoApi';


export default function PublicacaoCardUsuario() {
    const [publi, setPubli] = useState([]);
    const [publicPsic, setPubliPsic] = useState([])
    const navigate = useNavigate();


    async function consultarPublicacaoUsuario() {
        const resposta = await listarPublicacaoUsuario();
        setPubli(resposta);
    }
    async function consultarPublicacaoPsicologo() {
        const resposta = await listarPublicacaoPsicologo();
        setPubliPsic(resposta);
    }

    useEffect(() => {
        consultarPublicacaoUsuario();
        consultarPublicacaoPsicologo()
    }, [])

    function abrirDetalhe(id) {
        navigate(`/admin/publicacao/${id}`);
    }

    function abrirDetalhePsic(id) {
        navigate(`/admin/publicacao/psic/${id}`);
    }




return (
    <main className='page-publicacaoCard'>

        <div>
            <MenuAdm pagina='publicacao' />
        </div>

        <div className='div-direita'>
            <h2>Verificações de publicações usuário</h2>

            <div className='container-publicacoes'>

                {publi.map(item =>

                    <div className='container-card'>
                        <div className='card-publi'>
                            <div className='sub1'>
                                <img className='sub1-img' src={buscarImagem(item.imagem)} alt='' />

                                <div className='sub1-textos'>
                                    <p className='sub1-titulo'>{item.nome}  </p>
                                    <p className='sub1-texto'>{item.email} </p>
                                </div>
                            </div>

                            <div className='sub2-textos'>
                                <div>
                                    <p className='sub2-titulo'> {item.titulo} </p>
                                    <p className='sub2-texto' > {item.descricao} </p>
                                </div>

                                <div className='sub2-img'>
                                    <img onClick={() => abrirDetalhe(item.id)} src='/assets/images/setaPubli.svg' alt='' />
                                </div>
                            </div>

                            <div className='sub3-data'>
                                <p>{item.data.substr(0, 10)}</p>
                            </div>

                        </div>


                    </div>
                )}

            </div>


        </div>
        <div className='div-direita'>
            <h2>Verificações de publicações psicólogo</h2>

            <div className='container-publicacoes'>

                {publicPsic.map(item =>

                    <div className='container-card'>
                        <div className='card-publi'>
                            <div className='sub1'>
                                <img className='sub1-img' src={buscarImagem(item.imagem)} alt='' />

                                <div className='sub1-textos'>
                                    <p className='sub1-titulo'>{item.nome}</p>
                                    <p className='sub1-texto'>{item.email}</p>
                                </div>
                            </div>

                            <div className='sub2-textos'>
                                <div>
                                    <p className='sub2-titulo'> {item.titulo} </p>
                                    <p className='sub2-texto' > {item.descricao} </p>
                                </div>

                                <div className='sub2-img'>
                                    <img onClick={() => abrirDetalhePsic(item.id)} src='/assets/images/setaPubli.svg' alt='' />
                                </div>
                            </div>

                            <div className='sub3-data'>
                                <p>{item.data}</p>
                            </div>

                        </div>


                    </div>
                ) };

            </div>


        </div>


    </main>
)
}