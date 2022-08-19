import {Fragment, useEffect, useState} from 'react';

import TempoAtual from './components/tempoAtual';
import LoadingHolder from './components/loadingHolder';
import PaginaInicial from './components/PaginaInicial';

import { previsaoLatLon, montaLinkIconePrev } from './actions/requisitons'


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
};

const formatUnixData = (unix_data) => {
  let horario = new Date(unix_data * 1000).toLocaleTimeString(),
      return_horario;
      
  horario = horario.split(':');
  return_horario = `${horario[0]}:${horario[1]}`;

  return return_horario;
};

const setSunriseSunsetTime = (time_obj) => {
  let returnObj;
  let sunrise_time = formatUnixData(time_obj.sunrise * 1000);
  let sunset_time = formatUnixData(time_obj.sunset * 1000);

  returnObj = {
    'sunrise_time': sunrise_time,
    'sunset_time': sunset_time
  }

  return returnObj;
};

const montaDtoPrevisaoTempo = (props, setPrevisao ) => {
  let dtoPrevisao = {
    'sunriseSunsetTime': "",
    'cityName': "",
    'realTemp': "",
    'feelsLikeTemp': "",
    'linkIcon': "",
    'humidity': ""
  }, sunriseSunsetTime = setSunriseSunsetTime(props.data.sys)

  dtoPrevisao.sunriseSunsetTime = sunriseSunsetTime;
  dtoPrevisao.cityName = props.data.name;
  dtoPrevisao.realTemp = props.data.main.temp;
  dtoPrevisao.feelsLikeTemp = props.data.main.feels_like;
  dtoPrevisao.humidity = props.data.main.humidity;
  dtoPrevisao.linkIcon = montaLinkIconePrev(props.data.weather[0].icon);

  setPrevisao(dtoPrevisao)
};

function App() {

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [loading, setLoading] = useState(false)

  const [previsao, setPrevisao] = useState({})

  useEffect(() => {

    getLocalizacao(setLat, setLong, setLoading);

    if(lat && long) {
      setLoading(true)

      previsaoLatLon(lat, long, function(response) {
          if(response.message) {
              window.alert(response.message)
          };
          setLoading(false);
          if(response.status === 200) {
            montaDtoPrevisaoTempo(response, setPrevisao);
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