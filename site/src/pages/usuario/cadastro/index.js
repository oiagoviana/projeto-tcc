import './index.scss'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {toast} from 'react-toastify'
import { cadastroUser } from '../../../api/usuarioApi'
import InputMask from 'react-input-mask'

export default function Cadastro() {

    const[email, setEmail] = useState('');
    const[nome, setNome] = useState('');
    const[senha, setSenha] = useState('');
    const[telefone, setTelefone] = useState('');
    const[termo, setTermo] = useState(0);
    const[carregando, setCarregando] = useState(false);
    const ref = useRef();
    const navigate = useNavigate();

    async function cadastroUsuario() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const resposta = await cadastroUser(email, nome, senha, termo, telefone);

            setTimeout(() => {
                navigate('/usuario/login');    
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

    return(
        <main className='page-cadastro'>
            <LoadingBar color='#6F4528' ref={ref} />

            <div className='container-esquerdo'>
                <img className='img-maeCadastro' src='/assets/images/maeCadastro.png' alt='mulher-cadastro' />

                <h3>"No colo de uma mãe existe o paraíso e na sua existência todo o amor do mundo."</h3>


                <img className='img-bola1' src='/assets/images/bolinha-cima.png' alt='bola1' />
                <img className='img-bola2' src='/assets/images/bolinha-baixo.png' alt='bola2' />
            </div>



            <div className='container-direito'>
                <div className='sub-container-direito'>
                    <h1>Cadastre-se</h1>

                    <div className='container-inputs'>
                        <div className='container-input-individual'>
                            <p className='titulo-input'>Email</p>
                            <input className='input-credenciais' type='text' value = {email} onChange = {e => setEmail(e.target.value)} />
                        </div>

                        <div className='container-input-individual'>
                            <p className='titulo-input'>Nome de Usuário</p>
                            <input className='input-credenciais' type='text' value = {nome} onChange = {e => setNome(e.target.value)} />
                        </div>

                        <div className='container-input-individual'>
                            <p className='titulo-input'>Senha</p>
                            <input className='input-credenciais' type='password' value = {senha} onChange = {e => setSenha(e.target.value)} />
                        </div>

                        <div className='container-input-individual'>
                            <p className='titulo-input'>Telefone</p>
                            <InputMask mask='(99) 99999-9999' className="input-credenciais" value={telefone} onChange={e => setTelefone(e.target.value)} />
                        </div>
                    </div>

                    <div className='container-termos'>
                        <div className='container-checkbox'>
                            <input className='input-checkbox' type='checkbox' value = {termo} onChange = {e => setTermo(e.target.value)} />
                            

                            <p>Eu aceito Colo de Mãe e Pai e Concordo com os termos.</p>
                        </div>

                        <div className='container-criar-conta'>
                            <button className={termo === 0 ? 'botao-criar-conta2' : 'botao-criar-conta'} onClick={cadastroUsuario} disabled={carregando}>Criar Conta</button>

                            <div className='container-faca-login'>
                                <p>Você já tem uma conta?</p>

                                <a href='/usuario/login'>Faça login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}