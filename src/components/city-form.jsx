import TextInputAnimated from "./inputTextAnimated"
import LoadingHolder from "./loadingHolder";

import {hasFormError } from './util'
import {useFormik} from 'formik';

import { previsaoGeolocation } from '../actions/requisitons';
 
import * as Yup from 'yup';
import { useState, Fragment } from 'react';
import { montaDtoPrevisaoTempo } from './util';
import { useNavigate } from "react-router-dom";
export default function CityForm() {

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

            setLoading(false);

            previsaoGeolocation(values.cidade, function(resp) {
                setLoading(false);

                if(!resp.success) return window.alert(resp.message);

                navigate('/previsao',{state: {dtoPrevisao: resp}});
            });
        }
    });

    return (
        <Fragment>

            <LoadingHolder loading={!!loading}/>

            <form onSubmit={formik.handleSubmit} className="mt-4 d-flex justify-content-between align-items-center" style={{maxWidth: '100%'}}> 

                <TextInputAnimated 
                id="cidade"
                type = "cidade"
                label="Procure aqui sua cidade"
                className="busca"
                value={formik.values.cidade}
                onChange={formik.handleChange}
                error={hasFormError(formik, "cidade")}
                />

                <button className="button-submit-cidade btn btn-sm btn-primary" variant="text" type="submit">Pesquisar</button>

            </form>
        </Fragment>        
    )
}
    
