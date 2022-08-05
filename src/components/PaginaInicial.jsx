import { useEffect, useState } from 'react';

const getLocalizacao = (setTemCoordenada) => {
    if(!('geolocation' in navigator)) {
        console.log('nao tem')
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        setTemCoordenada(position)
    });    
}

export default function PaginaInicial() {

    const [temCoordenada, setTemCoordenada] = useState();

    useEffect(() => {
        getLocalizacao(setTemCoordenada);
    }, [])

    return (
        <main>
            <h1 className="w-100 text-center"> Bem Vindo ao Forecast Weather App </h1>
        </main>
    )
}
