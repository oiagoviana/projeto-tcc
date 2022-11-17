import './index.scss'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { toast } from 'react-toastify'
import { loginUser } from '../../../api/usuarioApi'



export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState('');

    const ref = useRef();
    const navigate = useNavigate();

    async function loginUsuario() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const resposta = await loginUser(email, senha);
            storage('usuario-logado', resposta);

            setTimeout(() => {
                navigate('/usuario/publicacao');
            }, 3000)
        }
        catch (err) {
            ref.current.complete();
            setCarregando(false);
            if (err.response.status === 401) {
                toast.error(err.response.data.erro);
            }
        }
    }

    return (
        <main className='page-login2'>
            <LoadingBar color='#6F4528' ref={ref} />
            <div className='container-esquerdo'>
                <h1>Login</h1>

                <div className='container-inputs'>
                    <div>
                        <p>Email:</p>

                        <input placeholder='usuario@gmail.com' type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <p>Senha:</p>

                        <input placeholder='********' type='password' value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>
                </div>

                <button onClick={loginUsuario} disabled={carregando}>Entrar</button>

                <div className='container-cadastre-se'>
                    <div className='div-cadastro'>
                        <p>Ainda não tem uma conta?</p>
                        <a href='/usuario/cadastro'>Cadastre-se</a>
                    </div>
                    <div className='div-cadastro'>
                        <p>É um de nossos psicólogos?</p>
                        <a href='/psi/login'>Faça Login Aqui</a>
                    </div>
                </div>

                <div className='container-cadastre-se'>

                </div>

            </div>
            <div className='container-direito'>
                <img className='img-paiLogin' src='/assets/images/paiLogin.png' alt='homem-login' />

                <h3>"Não existe lugar mais poderoso e tranquilizador que o colo de pai."</h3>


                <img className='img-bola-direita' src='/assets/images/bolinhaBaixo-Cadastro.png' alt='bola-da-direita' />
                <img className='img-bola-esquerda' src='/assets/images/bolinhaCima-Cadastro.png' alt='bola-da-esquerda' />
            </div>
        </main>
    );
}