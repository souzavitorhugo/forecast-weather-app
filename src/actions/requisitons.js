import { API_URL, API_KEY, API_PADROES, API_LINK_ICONS} from './requisitionsPadrao';
const Axios = require('axios');

export function previsaoLatLon (lat, long, callback) {
    Axios.get(`${API_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}${API_PADROES}`)
        .then(function(response) {
            callback(response);
        })
        .catch(function(err) {
            throw err;
        })
};

export function previsaoGeolocation(cidade, callback) {
    Axios.get(`${API_URL}?q=${cidade}&appid=${API_KEY}${API_PADROES}`)
        .then(function(response) {
            callback(response)
        })
        .catch (function(err) {
            throw err;
        })
};

export function montaLinkIconePrev(icon){
    return `${API_LINK_ICONS}/${icon}@2x.png`
};
