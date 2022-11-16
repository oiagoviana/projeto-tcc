import './index.scss'
import MenuUsuario from '../../../components/menuusuario'
import { useEffect, useState } from 'react';
import { mostrarPublicacaoFeed } from '../../../api/publicacaoApi';
import { useNavigate } from 'react-router-dom';

export default function FeedPublicacao() {
    const [publicacao, setPublicacao] = useState([]);
    const navigate = useNavigate();

    async function listarPublicacao() {
        const r = await mostrarPublicacaoFeed();
        console.log(r);
        setPublicacao(r);
    }

    function verMais(id) {
        navigate(`/usuario/publicacaocompleta/${id}`);
    }

    useEffect(() => {
        listarPublicacao();
    }, [])



    return (
        <main className='page-feedpubli'>
            <div>
                <MenuUsuario pagina='publicacao' />
            </div>

            <div className='container-direita'>
                <div className='div-publicacoes'>
                    {publicacao.map(item =>
                        <div className='card-publicacao'>
                            <div className='header-publicacao'>
                                <p className='header-name'>{item.nome}</p>
                                <p className='header-data'>{item.data}</p>
                            </div>

                            <div className='text-publicacao'>
                                <p>
                                    {item.descricao}
                                </p>
                            </div>

                            <div className='footer-publicacao'>
                                <div onClick={() => verMais(item.id)}  className='container-click' >
                                    <p>Ver mais</p>
                                    <img src='/assets/images/setaMais.svg' alt='' />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}