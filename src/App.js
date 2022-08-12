import {Fragment, useEffect, useState} from 'react';

import TempoAtual from './components/TempoAtual';
import OpcaoDias from './components/OpcaoDias';
import LoadingHolder from './components/loadingHolder';
import PaginaInicial from './components/PaginaInicial';

import Menu from './components/nav'

import './css/App.css';

const getLocalizacao = (setLat, setLong, setLoading) => {
  setLoading(true)
  if(!('geolocation' in navigator)) {
      console.log('nao tem')
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude)
  });    
  setLoading(false)
}

function App() {

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLocalizacao(setLat, setLong, setLoading);
  }, [])

  return ( 
    <Fragment>

      <LoadingHolder loading={!!loading}/>

      <main className='main-container box-teste'>
        
        <Menu/>

        {(lat && long) ? (
          <Fragment>
            <TempoAtual latitude={lat} longitude={long}/>

            <OpcaoDias/>

            <div>
              {/* aqui fica card das previsões dos próximos 5 dias */}
            </div>
          </Fragment>
          
        ) :  <PaginaInicial/> }

      </main>
    </Fragment>
  );
}

export default App;