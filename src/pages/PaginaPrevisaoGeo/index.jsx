import { Fragment, useEffect, useState } from "react";

import TempoAtual from '../../components/tempoAtual';
import Menu from '../../components/nav'
import LoadingHolder from '../../components/loadingHolder';
import { useLocation } from "react-router-dom";

export default function PaginaPrevisaoLocalizacao() {
    
    const [previsao, setPrevisao] = useState({});
    const [loading, setLoading] = useState();
    const {state} = useLocation();
    const {dtoPrevisao} = state;

    useEffect(() => {
        setPrevisao(dtoPrevisao);
    })

    return (
        <Fragment>
            <LoadingHolder loading={!!loading}/>
            <main className='main-container box-teste'>
                {/* <Menu /> */}
                <TempoAtual dtoPrevisao={previsao} />
            </main>
        </Fragment>
    )

}