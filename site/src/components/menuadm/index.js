import './index.scss'
import '../../common/common.scss'

export default function menuAdm({pagina}){
    

    return(
        <main className="comp-menu">
            <div className="card-menu">
                <div>
                    <img className= "logo" src='/assets/images/logo-mae.png' alt='' />
                </div>

                <div className="botoes">
                    <button className={pagina === 'home' ? 'selected' : ''}>Home</button>
                    <button className={pagina === 'publicacao' ? 'selected' : ''}>Publicações</button>
                    <button className={pagina === 'profisionais' ? 'selected' : ''}>Profissionais</button>
                    <button className={pagina === 'indicacao' ? 'selected' : ''}>Indicações</button>
                </div>

                <div className="botao-final">
                    <img className="bo-final"src='/assets/images/sair.png' alt='' />
                    <button className="b-final">Sair</button>
                </div>


                </div>
        </main>
    );
}