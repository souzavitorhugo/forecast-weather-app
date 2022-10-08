import { Fragment, useEffect, useState } from 'react';

import TempoAtual from '../../components/tempoAtual';
import LoadingHolder from '../../components/loadingHolder';
import { montaDtoPrevisaoTempo } from '../../components/util'
import CityForm from '../../components/city-form'

import { previsaoLatLon } from '../../actions/requisitons'

export default function PaginaInicialLocalizada(props) {

    const [loading, setLoading] = useState(false)
    const [previsao, setPrevisao] = useState({})

    useEffect(() => {

        if (!(props.latitude && props.longitude)) return

        setLoading(true)

        previsaoLatLon(props.latitude, props.longitude, function (response) {
            if (response.message) {
                window.alert(response.message)
            };
            setLoading(false);
            if (response.status === 200) {
                setPrevisao(montaDtoPrevisaoTempo(response));
            }
        });

    }, [])

    return (

        <Fragment>
            <LoadingHolder loading={!!loading} />
            <main className='main-container'>
                <CityForm/>
                <TempoAtual dtoPrevisao={previsao} />
            </main>
        </Fragment>
    );
}
