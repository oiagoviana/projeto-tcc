import MenuUsuario from "../../../components/menuusuario";
import './index.scss'



export default function PubliCompleta() {
    return (
        <main className="div-principal">
            <div>
                <MenuUsuario />
            </div>

            <div className='div-direita'>
                <div className='card-principal'>
                    <div className='sub1-card'>
                        <div className='sub2-card'>
                            <div className='sub2-cima'>
                                <img className='kar' src="/assets/images/kar.png" width='37vw' height='45vh' alt="" />
                                <h4 className='cima-info'>Karla Brasil </h4>

                            </div>

                            <div className='sub2-baixo'>

                                <h4 className='baixo-info'>Titulo: <span>Mãe Solteira</span>      </h4>
                            </div>


                            <div className='sub3-card'>
                                <div className='sub3-div'>
                                    <h4>Descrição:</h4>
                                </div>

                                <img src='/assets/images/mae-grande.png' alt='' />
                                <p className='sub3-desc'> Lorem ipsum dolor sit amet. Qui nulla error ut galisum doloremque eum maxime officia est autem error et earum voluptas! Ut assumenda assumenda. At obcaecati beatae et voluptatum distinctio? Nam dolor consectetur hic earum quam est aperiam odit. 33 voluptates beatae ab sunt tenetur et omnis nemo. Non quisquam enim et corrupti dolores ut officiis nostrum et placeat expedita sed alias quasi.</p>


                            </div>

                        </div>
                    </div>
                </div>

                    <div className="sub4">

                        <div className='container-titulo-coment'>
                            <h1 className="h1coment">Comentar</h1>
                        </div>


                        <textarea className="text"></textarea>


                    </div>
                    
            </div>
        </main>
    )
}