import './index.scss'

export default function Formulario (){

    return(
        <main>
            <div> <img src='' alt=''/> </div>
            <div>
                <p> Formulário</p> 
             </div>

                    <div>
                        <label>Nome:</label>
                        <input type="text" className="input-indicacao"  />
                    </div>
                    <div>
                        <label>Telefone:</label>
                        <input type="text" className="input-indicacao"  />
                    </div>
                    <div>
                        <label>CPF:</label>
                        <input type="text" className="input-indicacao"  />
                    </div>
                    <div>
                        <label>CRP:</label>
                        <input type="text" className="input-indicacao"  />
                    </div>
                    <div>
                        <label>Data de Nascimento:</label>
                        <input type="text" className="input-indicacao"  />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" className="input-indicacao"  />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="text" className="input-indicacao"  />
                    </div>

                    <div>
                        <button>Enviar Formulario</button>
                    </div>



        </main>
    )
}