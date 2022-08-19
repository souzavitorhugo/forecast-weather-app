import SunriseIcon from '../appends/sunrise.png';
import SunsetIcon from '../appends/sunset.png';
import GotaIcon from '../appends/gotas-de-agua.png';

export default function OpcaoDias(props) {

    return (
        <div className='mt-5 container-tempo-secundario'>
            {/* aqui fica card da intensidade, nascer e por do sol e umidade*/}

            <div className="d-flex row align-items-center justify-content-center">
            <img className="icon-small" src={SunriseIcon} alt="icone nascer do sol"/>
            
            <span className="mt-2 text-center" id="horariosolnasce"> {props?.sunriseTime} </span> 
            </div>

            <div className="d-flex row full-center align-items-center justify-content-center">
            <img className="icon-small" src={SunsetIcon} alt="icone por do sol"/>

            <span className="mt-2 text-center" id="horariosolpoem"> {props?.sunsetTime} </span> 
            </div>

            <div className="d-flex row full-center align-items-center justify-content-center">
            <img className="icon-small" src={GotaIcon} alt="icone gota"/>

            <span className="mt-2 text-center" id="indicehumidade"> {props?.humidity}% </span> 

            </div>
            
        </div>
    )
    
}       