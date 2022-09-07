import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import PaginaInicial from './pages/PaginaIniciaoSemLoc/index';
import PaginaInicialLocalizada from './pages/PaginaInicialLocalizada/index';
import PaginaPrevisaoLocalizacao from './pages/PaginaPrevisaoGeo/index'

import './css/App.css';

const getLocalizacao = (setLat, setLong, setLoading) => {
  setLoading(true)
  if (!('geolocation' in navigator)) {
    console.log('nao tem')
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude)
  });
  setLoading(false)
};

function App() {

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLocalizacao(setLat, setLong, setLoading);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {(lat && long) ? (
          <Fragment>
            <Route path="/">
              <Route index element={<PaginaInicialLocalizada latitude={lat} longitude={long} />} />
            </Route>
          </Fragment>
        ) : (
          <Fragment>
            <Route path="/">
              <Route index element={<PaginaInicial />} />
            </Route>
            
            <Route path="/previsao">
              <Route  index element={<PaginaPrevisaoLocalizacao/>}/>
            </Route>
          </Fragment>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;