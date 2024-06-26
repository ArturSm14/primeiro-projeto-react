import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';



function App() {

  const times = [
    {
      nome :'Valorant',
      corPrimaria: '#57C278',
      corSecundaria: ' #D9F7E9'
    },
    {
      nome : 'League of Legends',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome :'Overwatch',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome : 'Counter-Strike',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome : 'Apex Legends',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome :'PUBG',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome :'Wild-Rift',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(){
    console.log('deletando colaborador')
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => 
          <Time 
            key={time.nome} 
            time={time}
            colaboradores= {colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />)
      }
    </div>
  );
}

export default App;
