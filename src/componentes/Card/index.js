import { IoIosCloseCircle } from "react-icons/io";
import './Card.css'

const Card = ({ colaborador, corDeFundo, aoDeletar}) => {
  console.log(colaborador)
  return (
    <div className="card">
        <IoIosCloseCircle size={25} className='deletar'onClick={aoDeletar} /> 
        <div className="cabecalho" style={{ backgroundColor: corDeFundo}}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>
  )
}

export default Card