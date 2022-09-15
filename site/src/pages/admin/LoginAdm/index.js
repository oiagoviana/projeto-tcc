import './index.scss'
import { Login } from '../../../api/admApi'
import storage from 'local-storage'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function LoginAdm() {

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[erro, setErro] = useState('');
    const[carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    async function openPage() {
        setCarregando(true);

        try{
            const resposta = await Login(email, senha);
            storage('adm-logado', resposta);

            navigate('/login');
        } 
        catch(err) {
            setCarregando(false);

            if(err.response.status === 401)
                setErro(err.response.data.erro);
        }
    }


    return (
        <main className="page-loginAdm">
            <div className="card-login">
                <div>
                    <h1 className="h1-login">Login Admin</h1>
                </div>

                <div className="div-card">

                    <div className="div-input">
                        <label className="texto-login">Email:</label>
                        <input className="input-login" placeholder="usuario@gmail.com" type="text" value = {email} onChange = {e => setEmail(e.target.value)} />
                    </div>

                    <div className="div-input">
                        <label className="texto-login">Senha:</label>
                        <input className="input-login" placeholder="**************" type="password" value = {senha} onChange = {e => setSenha(e.target.value)}/>
                    </div>

                </div>

                <div>
                    <button className="botao-login" onClick = {openPage} disabled = {carregando}>Entrar</button>
                </div>

                <div>
                    {erro}
                </div>
            </div>
        </main>
    );
}