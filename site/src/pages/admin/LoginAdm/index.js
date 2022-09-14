import './index.scss'


export default function LoginAdm() {


    return (
        <main className="page-loginAdm">
            <div className="card-login">
                <div>
                    <h1 className="h1-login">Login Admin</h1>
                </div>

                <div className="div-card">

                    <div className="div-input">
                        <label className="texto-login">Email:</label>
                        <input className="input-login" placeholder="usuario@gmail.com" type="text" />
                    </div>

                    <div className="div-input">
                        <label className="texto-login">Senha:</label>
                        <input className="input-login" placeholder="**************" type="password"/>
                    </div>

                </div>

                <div>
                    <button className="botao-login">Entrar</button>
                </div>
            </div>
        </main>
    );
}