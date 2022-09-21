import './index.scss'
import Menu from '../../../components/menuadm'
import { addProduto } from '../../../api/produtoApi'
import { toast } from 'react-toastify'

import { useEffect, useRef,useState } from 'react'


export default function Indicações () {

    const[nome, setNome] = useState('');
    const[cidade, setCidade] = useState('');
    const[cep, setCep] = useState('');
    const[endereco, setEndereco] = useState('');
    const[classificacao, setClassificacao] = useState(0);
    const[atendimento, setAtendimento] = useState('');
    const[categoria, setCategoria] = useState('');
    const[imagem, setImagem] = useState();

    async function adicionarProduto() {
        try {
            const resposta = await addProduto(nome, cidade, cep, endereco, classificacao, atendimento, categoria);
            toast.dark('certo!');

        } catch(err) {
            if(err.response.status)
                toast.error('erro!');
        }
    }
    
    return (
        <main className="principal">

            <div>
                <Menu 
                pagina='indicacao'
                />
            </div>


            <div className="segunda-principal">

                <div className="container-direita">

                    <div>
                        <label>Nome do Local:</label> 
                        <input placeholder="Fleury"type= "text" className="input-indicacao" value={nome} onChange={e => setNome(e.target.value)} />

                    </div>

                    <div>
                        <label>Nome da Cidade:</label> 
                        <input placeholder="São Paulo - SP"type= "text" className="input-indicacao" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>

                    <div>
                        <label>Categoria do Local:</label> 
                    
                        <select className="categoria">
                            <option disabled selected hidden> Selecione </option>
                            <option>Hospital</option>
                            <option>Espaço para Crianças</option>
                            <option>Saúde Materna</option>
                            <option>Lazer</option>
                        </select>
                    </div>

                    <div>
                        <label>Horário de Atendimento:</label> 
                        <input placeholder="Segunda a Sexta..."type= "text" className="input-indicacao" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>

                    <div>
                        <label>Classificação do Local:</label>
                        <input placeholder="4.8"type="text" className="input-indicacao" />
                    </div>

                </div>

                <div className="container-esquerda">
                        <div>
                            <label>Endereço:</label> 
                            <input placeholder="Digite o Endereço"type= "text" className="input-indicacao" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>

                        <div>
                            <label className="div-cep">CEP:</label> 
                            <input placeholder="00000-000" type= "text" className="input-indicacao"/>
                        </div>

                        <h4>
                            Adicionar Imagem da Indicação
                        </h4>
                        
                        <img/>

                        <button>Publicar Indicação</button>

                </div>


            </div>


        </main>
    );
}