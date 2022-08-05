import {Fragment} from 'react';

import TempoAtual from './components/tempoAtual';
import SunriseIcon from './appends/sunrise.png';
import SunsetIcon from './appends/sunset.png';
import GotaIcon from './appends/gotas-de-agua.png';


import Menu from './components/nav'

import './css/App.css';

function App() {
  return ( 
    <Fragment>

      <main className='main-container box-teste'>
        
        <Menu/>

        {/* aqui dentro terá basicamente todo o app, todos os cards */}

        <TempoAtual/>

        <div className='container-tempo-secundario'>
          {/* aqui fica card da intensidade, nascer e por do sol e umidade*/}

          <div className="box-teste">
            <img className="icon-small" src={SunriseIcon} alt="icone nascer do sol"/>
          </div>

          <div className="box-teste">
            <img className="icon-small" src={SunsetIcon} alt="icone por do sol"/>
          </div>

          <div className="box-teste">
            <img className="icon-small" src={GotaIcon} alt="icone gota"/>
          </div>
          
        </div>
        
        <div>
          {/* aqui fica card das previsões dos próximos 5 dias */}
        </div>
      </main>
    </Fragment>
  );
}

export default App;