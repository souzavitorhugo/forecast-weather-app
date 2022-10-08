import { Fragment, useEffect, useState } from "react";

import TempoAtual from '../../components/tempoAtual';
import { useLocation, useNavigate } from "react-router-dom";

import CityForm from '../../components/city-form'

export default function PaginaPrevisaoLocalizacao() {
    
    const [previsao, setPrevisao] = useState({});
    const navigate = useNavigate();
    const {state} = useLocation();

    useEffect(() => {
        if(!state) {
            return navigate( '../..', {replace: true})
        }   

        const {dtoPrevisao} = state;
        setPrevisao(dtoPrevisao);
    })

    return (
        <Fragment>
            <main className='main-container'>
                <CityForm/>
                <TempoAtual dtoPrevisao={previsao} />
            </main>
        </Fragment>
    )

}
