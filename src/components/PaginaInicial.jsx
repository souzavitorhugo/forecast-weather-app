import Input from "./inputs"
import {hasFormError } from './util'
import {useFormik} from 'formik';

import * as Yup from 'yup';

export default function PaginaInicial() {

    const validationSchema = Yup.object({
        cidade: Yup.string().required('Campo Obrigatório')
    });
    
    const formik = useFormik({
        initialValues: {
            cidade: ""
        }, 
        validationSchema,
        onSubmit: async values => {
            console.log(values)
        }
    })

    return (
        <main className="px-5 py-2 d-flex row justify-content-center align-items-center">
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
                

        </main>
    )
}
