import './index.scss'

export default function menuAdm() {
    

    return(
        <main className="comp-menu">
            <div className="card-menu">
                <div>
                    <img className= "logo" src='/assets/images/logomenuadm.png' alt='' />
                </div>

                <div className="botoes">
                    <button>Home</button>
                    <button>Publicações</button>
                    <button>Profissionais</button>
                    <button>Indicações</button>
                </div>

                <div className="botao-final">
                    <img className="bo-final"src='/assets/images/sair.png' alt='' />
                    <button className="b-final">Sair</button>
                </div>


                </div>
        </main>
    );
}