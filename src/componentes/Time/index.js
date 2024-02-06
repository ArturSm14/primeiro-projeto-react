import Card from '../Card'
import './Time.css'


const Time = ({time ,colaboradores, aoDeletar}) => {
  return (
    (colaboradores.length > 0) ?<section className='time' style={{ backgroundColor: time.corSecundaria }}>
        <input value={time.corSecundaria} type='color' className='input-cor' />
        <h3 style={{ borderColor: time.corPrimaria}}>{time.nome}</h3>
        <div className="cards">
          {colaboradores.map( colaborador => {
            return <Card key={colaborador.nome} colaborador={colaborador} corDeFundo={time.corPrimaria} aoDeletar={aoDeletar}/>
          })}
        </div>
    </section>
    : ''
  )
}

export default Time
