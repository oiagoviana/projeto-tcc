import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss'

import LoadingBar from 'react-top-loading-bar'
import {toast} from 'react-toastify'
import '../../../common/common.scss'
import { formularioPsi } from '../../../api/psicologoApi';

export default function Formulario() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [crp, setCrp] = useState('');
    const [carregando, setCarregando] = useState(false);
    const ref = useRef ();
    const navigate = useNavigate();

    async function enviarFormulario() {
        try{
            const resposta = await formularioPsi(nome, telefone, nascimento, email, senha, crp, cpf);
            toast.dark('Formulário enviado!');
            setTimeout(() =>{
                navigate('/psi/login');
            }, 3000)
        }
        catch(err) {
            ref.current.complete();
            setCarregando(false);
            if(err.response.status === 400){
                toast.error(err.response.data.erro);
            }
        }

    }



    return (
        <main className='principal-cont'>
            <LoadingBar color='#6F4528' ref={ref} />

            <div> <img className='img-cima' src='/assets/images/triangulo-cima.png' alt='' /> </div>
            <div className='conteiner-1' >
                <p className='texto'> Formulário</p>
            </div>

            <div className='div-mae'>

                <div className='direita'>


                    <label>Nome:</label>
                    <input type="text" className="input-formulario" value = {nome} onChange = {e => setNome(e.target.value)} />



                    <label>Telefone:</label>
                    <input type="text" className="input-formulario" value = {telefone} onChange = {e => setTelefone(e.target.value)}/>



                    <label>CPF:</label>
                    <input type="number" className="input-formulario" value = {cpf} onChange = {e => setCpf(e.target.value)} />



                    <label>CRP:</label>
                    <input type="number" className="input-formulario" value = {crp} onChange = {e => setCrp(e.target.value)} />


                </div>

                <div className='direitaa' >

                    <label>Data de Nascimento:</label>
                    <input type="date" className="input-formulario" value = {nascimento} onChange = {e => setNascimento(e.target.value)}/>


                    <label>Email:</label>
                    <input placeholder='Seu email será usadao em seu login' type="text" className="input-formulario" value = {email} onChange = {e => setEmail(e.target.value)} />


                    <label>Senha:</label>
                    <input placeholder='Sua senha será usada em seu login' type="password" className="input-formulario" value = {senha} onChange = {e => setSenha(e.target.value)} />

                   
                </div>
            </div>

                    < div>
                        <button className='botao-formulario' onClick = {enviarFormulario} disabled = {carregando}>Enviar Formulario</button>
                    </div>





            <div> <img className='img-baixo' src='/assets/images/triangulo-baixo.png' alt='' /> </div>



        </main>
    )
}