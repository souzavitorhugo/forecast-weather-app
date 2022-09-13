import { Fragment, useEffect, useState } from "react";

import TempoAtual from '../../components/tempoAtual';
import Menu from '../../components/nav'
import LoadingHolder from '../../components/loadingHolder';
import { useLocation, useNavigate } from "react-router-dom";

export default function PaginaPrevisaoLocalizacao() {
    
    const [previsao, setPrevisao] = useState({});
    const [loading, setLoading] = useState();
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
            <LoadingHolder loading={!!loading}/>
            <main className='main-container'>
                <Menu />
                <TempoAtual dtoPrevisao={previsao} />
            </main>
        </Fragment>
    )

}
