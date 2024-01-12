import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import DropDown from '../DropDown'
import './Formulario.css'


const Formulario = () => {

    const times = [
        'Valorant',
        'League of Legengs',
        'Overwatch',
        'Counter-Strike',
        'Apex Legends',
        'PUBG',
        'Wild-Rift'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados par criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder = "Digite seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo"placeholder = "Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder = "Digite o endereço da imagem"/>
            <DropDown obrigatorio={true} label="Time" itens= {times}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario