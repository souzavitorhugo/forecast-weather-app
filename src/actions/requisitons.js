import axios from 'axios';
import { API_URL, API_KEY, API_PADROES } from './requisitionsPadrao';
const Axios = require('axios');

export function previsaoHojePrincipal (lat, long, callback) {
    Axios.get(`${API_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}${API_PADROES}`)
        .then(function(response) {
            console.log(response)
            callback(response)
        })
        .catch(function(err) {
            console.log(err)
        })
    }   
