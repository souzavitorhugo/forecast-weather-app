import { API_URL, API_KEY, API_PADROES, API_LINK_ICONS} from './requisitionsPadrao';
import { trataDadosSucesso, trataDadosErro} from '../components/util';
const Axios = require('axios');

export function previsaoLatLon (lat, long, callback) {
    Axios.get(`${API_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}${API_PADROES}`)
        .then(function(response) {
            let dtoSucesso = trataDadosSucesso(response);
            callback(dtoSucesso);
        })
        .catch(function(err) {
            let dtoErro = trataDadosErro(err);
            callback(dtoErro);
        })
};

export async function previsaoGeolocation(cidade, callback) {
    Axios.get(`${API_URL}?q=${cidade}&appid=${API_KEY}${API_PADROES}`)
        .then(function(response) {
            let dtoSucesso = trataDadosSucesso(response);
            callback(dtoSucesso);
        })
        .catch (function(err) {
            let dtoErro = trataDadosErro(err);
            callback(dtoErro);
        })
};

export function montaLinkIconePrev(icon){
    return `${API_LINK_ICONS}/${icon}@2x.png`
};
