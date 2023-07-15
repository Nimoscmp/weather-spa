import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShowPlace = ({clickedSearchBtn, cityName, error}) => {
    
    //  Local states
    const [showPlace, setShowPlace] = useState(false);
    const [errorResponse, setErrorResponse] = useState(false);
    const [response, setResponse] = useState();

    //  Global states
    const english = useSelector(state => state.lang);

    useEffect(() => {
        if (clickedSearchBtn) {

            const getData = () => {
                const api_key = '0b79dea464b8f769b18696de8de31770';

                const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=${ api_key }&units=metric`;
                const xhttp = new XMLHttpRequest();
                var json;
            
                xhttp.open('GET', base_url, true);
            
                xhttp.send();
            
                xhttp.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200) {
                        json = JSON.parse(this.response);
                        setResponse(json);
                        setErrorResponse(false);
                    } else if (this.status !== 200) {
                        setErrorResponse(true);
                    }
                }
            }
            getData();
            if (!errorResponse && !error) {
                setShowPlace(true);
            }
        }
        // eslint-disable-next-line
    }, [clickedSearchBtn])

    return (
    <>
        <div className="show-place">

            {showPlace && !error ?
            <>
                <div className="first-set">
                    <i className="fas fa-map-marker-alt fa-2x m-05"></i>
                    <span className="city">{response?.name}</span>
                    <img 
                        src={`https://openweathermap.org/img/w/${ response?.weather[0].icon }.png`} 
                        alt="weather"
                        className="" />
                </div>
                <div className="sec-set">
                    <span className="temp-max">{Math.round(response?.main.temp_max)}&#8451;</span>
                    <span className="temp">/</span>
                    <span className="temp-min">{Math.round(response?.main.temp_min)}&#8451;</span>
                </div>
            </>
            : error ?
            <>
                <p className="p-05">{english ? 'Type correctly' : 'Digita correctamente'}</p>
            </>
            : errorResponse ?
            <>
                <p className="p-05">{english ? 'There was an error with the data' : 'Hubo un error en la búsqueda'}</p>
            </>
            :
            <>
                <p className="p-05">{english ? 'Type a place' : 'Haz la busqueda'}</p>
            </>
            }

        </div>
    </>
    )
}

export default ShowPlace;
