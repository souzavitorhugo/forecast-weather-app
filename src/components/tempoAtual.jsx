import { useEffect, useState } from 'react';

import cloudImage from '../appends/cloud.png';

//vai existir uma funcao que vai buscar o tempo atual, armazenar em uma variável e trocar o icone conforme o tmepo atual, temperatura e local e dia a mesma coisa 

const setarDataAtual = (setDataAtual) => {
    let dataLocal = new Date().toLocaleDateString(),
    mesSelecionado,
    meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]; 

    dataLocal = dataLocal.split('/')
    mesSelecionado = dataLocal[1]
    mesSelecionado = parseInt(mesSelecionado)
    
    for(let i = 0; i<=meses.length; i++) {
        if( i === mesSelecionado){
            setDataAtual(dataLocal[0]+ ' de ' + meses[i - 1]  + ' de ' + dataLocal[2])
        } 
    }
}

export default function TempoAtual()  {

    const [tempoClima, setTempoClima] = useState();
    const [dataAtual, setDataAtual] = useState();
    
    useEffect(() => {
        setarDataAtual(setDataAtual);
    }, [])

    return (
        <div className='container-tempo-atual'>
            {/* aqui ficará o card do tempo atual 
                data, localização, temperatura e icone do tempo atual
                e tipo do tempo
            */}

            <div className="container-infos-atuais">

            <small className="w-100"> {dataAtual} </small>

            <p > <b> Criciúma, </b> Santa Catarina </p>

            <div className="d-flex flex-row w-100 justify-content-center">
                <h1> 30°C </h1> 
                {/* <img className="grausCelsius" src={grausCelsiusImage} alt="celcius" /> */}
            </div>
            
            </div>

            <img className="cloudImage" src={cloudImage} alt="imagem geral"/>

        </div>
    )
}