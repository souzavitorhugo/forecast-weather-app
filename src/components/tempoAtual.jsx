import { useEffect, useState, Fragment } from 'react';

import LoadingHolder from './loadingHolder';

import OpcaoDias from './OpcaoDias';

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
};

export default function TempoAtual(props)  {
    const [dataAtual, setDataAtual] = useState();
    const [tempoClima, setTempoClima] = useState();
    const [loading, setLoading] = useState(false);
    //fazer um state hook com as props aqui pra ficar atualizando smp que atualizarem as props 
    useEffect(() => {
        setarDataAtual(setDataAtual);
    }, [])    

    return (
        <Fragment>

            <LoadingHolder loading={!!loading} />
        
            <div className='container-tempo-atual tarde-aberto'>
        
                <div className="container-infos-atuais">
        
                    <small className="w-100"> {dataAtual} </small>
            
                    <p > {props?.dtoPrevisao?.cityName} </p>
            
                    <div className="d-flex flex-row w-100 justify-content-start">
                        <div className="d-flex row justify-content-center align-items-center">
                            <h1> {props?.dtoPrevisao?.realTemp}° </h1>

                            <small> Sensação Térmica {props?.dtoPrevisao?.feelsLikeTemp}° </small>
                        </div>
                        
                    </div>
                
                </div>
        
                <div className="d-flex row align-items-center justify-content-center">
                    <img className="cloudImage"  alt="imagem geral" src={props?.dtoPrevisao?.linkIcon}/>
                </div>
        
            </div> 

            <OpcaoDias sunriseTime={props?.dtoPrevisao?.sunriseSunsetTime?.sunrise_time} sunsetTime={props?.dtoPrevisao?.sunriseSunsetTime?.sunset_time} humidity={props?.dtoPrevisao.humidity}/>
        </Fragment>
    )
}