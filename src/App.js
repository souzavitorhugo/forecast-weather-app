import {Fragment, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TempoAtual from './components/tempoAtual';
import LoadingHolder from './components/loadingHolder';
import PaginaInicial from './components/PaginaInicial';
import {montaDtoPrevisaoTempo} from './components/util'
import Menu from './components/nav'

import { previsaoLatLon } from './actions/requisitons'

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
};

function App() {

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [loading, setLoading] = useState(false)

  const [previsao, setPrevisao] = useState({})

  useEffect(() => {

    getLocalizacao(setLat, setLong, setLoading);

    if(previsao && (lat && long) ) {
      setLoading(true)

      previsaoLatLon(lat, long, function(response) {
        if(response.message) {
            window.alert(response.message)
        };
        setLoading(false);
        if(response.status === 200) {
          setPrevisao(montaDtoPrevisaoTempo(response));
        }
      })
  }
  }, [])

  return ( 
    <Fragment>

      <LoadingHolder loading={!!loading}/>

      <main className='main-container box-teste'>
        
        <Menu/>

        {(lat && long) ? (
          <Fragment>
            <TempoAtual dtoPrevisao={previsao}/>

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