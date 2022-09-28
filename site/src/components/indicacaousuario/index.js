import './index.scss'

export default function indicacaoUser() {
    return(
        <main className='comp-indicacao'>
            <div className='card-indicacao'>
                <img className='img-hospital' src='/assets/images/hospital.svg' alt='hosp' />

                <p className='text-hosp'>Hospital</p>
                
                <p className='text-endereco'>Endereço: Avenida Giovanni Gronchi, Nº 3108  – Morumbi, São Paulo- SP</p>
                <div className='container-telefone'>
                    <p className='text-telefone'>Telefone: (11)3179-0822</p>
                    <p>Classificação: 3.7</p>
                </div>
                <p className='text-horario'>Horário de Funcionamento:<br/>
                    SEG À SEXTA: 6h30-18:30<br/>

                    SÁB E DOM: 07H00-12H30</p>
                    
            </div>
        </main>
    )
}