import './index.scss'
import Menu from '../../../components/menuadm'


export default function Indicações () {
    
    return (
        <main>

            <div>
                <Menu/>
                
                
            </div>

            <div>

                <div>
                    <label>Nome do Local:</label> 
                    <input type= "text"/>
                
                </div>


                <div>
                    <label>Nome da Cidade:</label> 
                    <input type= "text" />
                
                </div>

                
                <div>
                    <label>Categoria do Local:</label> 
                    
                    <select>
                        <option disabled selected hidden> Selecione </option>
                        <option>Hospital</option>
                        <option>Brinquedoteca</option>
                    </select>
                
                </div>

                
                <div>
                    <label>Horário de Atendimento:</label> 
                    <input type= "text" />
                
                </div>

                <div>
                    <label>Classificação do Local:</label>
                    <input type="text" />

                </div>

            </div>


            <div>
                <div>
                    <label>Endereço:</label> 
                    <input placeholder="Digite o Endereço"type= "text"/>
                </div>

                <div>
                    <label>Cep:</label> 
                    <input placeholder="Digite o CEP'" type= "text" />
                </div>


                <button> Publicar Indicação</button>
                
            </div>

        </main>
    );
}