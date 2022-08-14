import { useEffect, useState } from 'react';

import LoadingHolder from './loadingHolder';

import cloudImage from '../appends/cloud.png';
import { previsaoHojePrincipal } from '../actions/requisitons'

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

export default function TempoAtual(props)  {

    const [tempoClima, setTempoClima] = useState();

    const [dataAtual, setDataAtual] = useState();
    const latitudeSis = props?.latitude;
    const longitudeSis = props?.longitude;
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setarDataAtual(setDataAtual);

        if(latitudeSis && longitudeSis) {
            setLoading(true)

            previsaoHojePrincipal(latitudeSis, longitudeSis, function(response) {
                if(response.message) {
                    window.alert(response.message)
                }

                setLoading(false)
                setTempoClima(response)
            })
            //chama funcao do arquivo requisitions passando setTempoClima pra resposta ser setado na resposta, ou setar com cb
        }
    }, [])    

    return (
        <div className='container-tempo-atual'>
            {console.log(tempoClima)}

            {/* aqui ficará o card do tempo atual 
                data, localização, temperatura e icone do tempo atual
                e tipo do tempo
            */}
    
            <div className="container-infos-atuais">
    
                <small className="w-100"> {dataAtual} </small>
        
                <p > {tempoClima?.data.name} </p>
        
                <div className="d-flex flex-row w-100 justify-content-center">
                    <div className="d-flex row justify-content-center align-items-center">
                        <h1> {tempoClima?.data.main.temp}° </h1>

                        <small> Sensação Térmica {tempoClima?.data.main.feels_like}° </small>
                    </div>
                    
                </div>
            
            </div>
    
            <img className="cloudImage" src={cloudImage} alt="imagem geral"/>
    
        </div> 
    )
}