import { montaLinkIconePrev } from "../actions/requisitons";

export function srid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }  
  return `${s4()}-${s4()}-${s4()}`;
}

export function hasFormError(formik, field) {
  if (!!formik.errors[field] && formik.touched[field]) {
    return formik.errors[field];
  }

  return null;
};

export const montaDtoPrevisaoTempo = (props) => {
  let dtoPrevisao = {
    'sunriseSunsetTime': "",
    'cityName': "",
    'realTemp': "",
    'feelsLikeTemp': "",
    'linkIcon': "",
    'humidity': ""
  }, sunriseSunsetTime = setSunriseSunsetTime(props.data.sys);

  dtoPrevisao.sunriseSunsetTime = sunriseSunsetTime;
  dtoPrevisao.cityName = props.data.name;
  dtoPrevisao.realTemp = props.data.main.temp;
  dtoPrevisao.feelsLikeTemp = props.data.main.feels_like;
  dtoPrevisao.humidity = props.data.main.humidity;
  dtoPrevisao.linkIcon = montaLinkIconePrev(props.data.weather[0].icon);
  dtoPrevisao.horaPrev = new Date();
  dtoPrevisao.success = true;

  return dtoPrevisao
};

const formatUnixData = (unix_data) => {
  let horario = new Date(unix_data * 1000).toLocaleTimeString(),
      return_horario;
      
  horario = horario.split(':');
  return_horario = `${horario[0]}:${horario[1]}`;

  return return_horario;
};

const setSunriseSunsetTime = (time_obj) => {
  let returnObj;
  let sunrise_time = formatUnixData(time_obj.sunrise * 1000);
  let sunset_time = formatUnixData(time_obj.sunset * 1000);

  returnObj = {
    'sunrise_time': sunrise_time,
    'sunset_time': sunset_time
  }

  return returnObj;
};

export const trataDadosSucesso = (retorno_sucesso) => {
  return montaDtoPrevisaoTempo(retorno_sucesso)
}

export const trataDadosErro = (retorno_erro) => {
  let dtoRetorno = {};

  switch(retorno_erro.response.status) {
    case 404:
      dtoRetorno = {
        success: false,
        message: 'Cidade não encontrada',
      }
      return dtoRetorno;
  }

}