import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss'
import { loginPsicologo } from '../../../api/psicologoApi';
import LoadingBar from 'react-top-loading-bar'
import {toast} from 'react-toastify'
import storage from 'local-storage'


export default function LoginPsi(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);
    const ref = useRef ();
    const navigate = useNavigate();

    async function openPage() {
        ref.current.continuousStart();
        setCarregando(true);

        try{
            const resposta = await loginPsicologo(email, senha);
            storage('psi-logado', resposta);
            console.log(resposta);

            setTimeout(() =>{

                navigate('/usuario/publicacao');
            }, 3000)
        }
        catch(err) {
            ref.current.complete();
            setCarregando(false);
            if(err.response.status == 401){
                toast.error(err.response.data.erro);
            }
        }

        
    }

    return(
        <main className='page-login'>
            <LoadingBar color='#6F4528' ref={ref} />

            <div className='container-esquerdo'>
                <img className='img-psi' src='/assets/images/logo-psiLogin.png' alt='' />

                <h3 className='texto-1'>“A ciência moderna ainda não produziu um medicamento tranquilizador tão eficaz como são umas poucas palavras boas”</h3>


                <img className='img-bola1' src='/assets/images/bolinha-cima.png' alt='bola1' />
                <img className='img-bola2' src='/assets/images/bolinha-baixo.png' alt='bola2' />
            </div>



            <div className='container-direito'>
                <div className='sub-container-direito'>
                    <h1> Login Psicólogo</h1>

                    <div className='container-inputs'>
                        <div className='container-input-individual'>
                            <label>Email</label>
                            <input  placeholder='Entre com o seu email'  className='input-credenciais' type='text'  value = {email} onChange = {e => setEmail(e.target.value)} />
                        </div>


                        <div className='container-input-individual'>
                            <label>Senha</label>
                            <input placeholder='Entre com a sua senha' className='input-credenciais' type='password' value = {senha} onChange = {e => setSenha(e.target.value)} />
                        </div>
                    </div>


                        <div className='container-criar-conta'>
                            <button className='botao-criar-conta' onClick = {openPage} disabled = {carregando}>Entrar</button>

                            
                        </div>
                    </div>
                </div>
            
        </main>
       
    )
}