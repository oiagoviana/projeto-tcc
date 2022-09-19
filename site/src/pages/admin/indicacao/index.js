import './index.scss'

export default function Indicações () {
    
    return (
        <main>

            <div>
                
            </div>

            <div>

                <h4>
                    Nome do Local: <input type= "text"/>
                
                </h4>


                <h4>
                    Nome da Cidade: <input type= "text"/>
                
                </h4>

                
                <h4>
                    Categoria do Local: <input type= "number"/>
                
                </h4>

                
                <h4>
                    Horário de Atendimento: <input type= "time" /> <input type= "time"/>
                
                </h4>

            </div>


            <div>
                <h4>
                    Endereço: <input type= "text"/>
                </h4>

                <h4>
                    Cep: <input type= ""/>
                </h4>


                <button> Publicar Indicação</button>
                
            </div>

        </main>
    );
}