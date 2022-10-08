import CityForm from "../../components/city-form"
 
import { useState, Fragment } from 'react';

export default function PaginaInicial() {

    return (
        <Fragment>

            <main className='main-container'>
                <div className="px-5 py-2 d-flex row justify-content-center align-items-center">
                    
                    <h2 className="w-100 text-center"> Bem Vindo ao Forecast Weather App </h2>

                    <CityForm/>
                        
                </div>
            </main>
    
        </Fragment>
    )
}
