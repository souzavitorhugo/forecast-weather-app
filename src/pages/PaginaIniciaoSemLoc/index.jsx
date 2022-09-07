import Input from "../../components/inputs"
import {hasFormError } from '../../components/util'
import {useFormik} from 'formik';

import { previsaoGeolocation } from '../../actions/requisitons';
import TempoAtual from '../../components/tempoAtual';
import LoadingHolder from '../../components/loadingHolder';
 
import * as Yup from 'yup';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { montaDtoPrevisaoTempo } from '../../components/util';
import { useNavigate } from "react-router-dom";

export default function PaginaInicial() {

    const [previsao, setPrevisao] = useState({});
    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        cidade: Yup.string().required('Campo Obrigatório')
    });
    
    const formik = useFormik({
        initialValues: {
            cidade: ""
        }, 
        validationSchema,
        onSubmit: async values => {
            setLoading(true);
            previsaoGeolocation(values.cidade, function(resp) {
                if(!resp.status === 200){
                    setLoading(false)
                    window.alert(resp.message)      
                } 

                let prevDto = montaDtoPrevisaoTempo(resp);
                setLoading(false);
                navigate('/previsao', {state: {dtoPrevisao: prevDto}});
            })
        }
    });

    return (
        <Fragment>

            <LoadingHolder loading={!!loading} />

            <main className='main-container box-teste'>
                <div className="px-5 py-2 d-flex row justify-content-center align-items-center">
                    <h1 className="w-100 text-center"> Bem Vindo ao Forecast Weather App </h1>

                    <form onSubmit={formik.handleSubmit} className="mt-4 d-flex justify-content-between align-items-center" style={{maxWidth: '100%'}}> 

                        <Input
                            id="cidade"
                            type="cidade"
                            label="Veja a previsão para sua Cidade"
                            value={formik.values.cidade}
                            onChange={formik.handleChange}
                            error={hasFormError(formik, "cidade")}
                        />

                        <button className="button-submit-cidade btn btn-sm btn-primary" variant="text" type="submit">Pesquisar</button>

                    </form>
                        
                </div>
            </main>
            
        </Fragment>

    )
}
