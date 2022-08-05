import {Fragment} from 'react';

import TempoAtual from './components/TempoAtual';
import OpcaoDias from './components/OpcaoDias';
import PaginaInicial from './components/PaginaInicial';

import Menu from './components/nav'

import './css/App.css';

function App() {
  return ( 
    <Fragment>

      <main className='main-container box-teste'>

        <PaginaInicial/>
        
        <Menu/>

        {/* aqui dentro terá basicamente todo o app, todos os cards */}

        <TempoAtual/>

        <OpcaoDias/>
        
        <div>
          {/* aqui fica card das previsões dos próximos 5 dias */}
        </div>

      </main>
    </Fragment>
  );
}

export default App;