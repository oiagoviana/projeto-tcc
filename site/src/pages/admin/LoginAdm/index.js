import './index.scss'
import { Login } from '../../../api/admApi'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {toast} from 'react-toastify'



export default function LoginAdm() {

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[carregando, setCarregando] = useState(false);
    const ref = useRef();
    const navigate = useNavigate();

    useEffect(() =>{
        if(storage('adm-logado')){
        navigate('/login')
        }
    }, [])


    async function openPage() {
        ref.current.continuousStart();
        setCarregando(true);

        try{
            const resposta = await Login(email, senha);
            storage('adm-logado', resposta);

            setTimeout(() => {
                navigate('/admin/indicacao');    
            }, 3000 )

        }   
        catch(err) {
            ref.current.complete();  
            setCarregando(false);
            if(err.response.status === 401){
                toast.error(err.response.data.erro);                
            }    
                
        }
    }
    
    


    return (
        <main className="page-loginAdm">
            <LoadingBar color='#6F4528' ref={ref} />
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

            </div>
        </main>
    );
}