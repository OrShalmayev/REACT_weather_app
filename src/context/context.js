import React from 'react';

export const WeatherContext = React.createContext();


export const WeatherProvider = ({children})=> {
    const api = {
        key: process.env.REACT_APP_API_KEY,
        autoComplete: (search = '') => {
            return `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${search}&language=en`;
        },
        getCurrentWeather: (locationKey = '') => {
            return `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}&language=en-US`;
        },
        fiveDayDailyForecast: (locationKey = '', details = false, metric = false) => {
            return `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}&language=en-US&details=${details}&metric=${metric}`;
        }
    }

    const [weather, dispatchWeather] = React.useReducer((weather, action) => {
        if (action.type === 'search') {
            return {
                ...weather,
                searched: weather.searched.push(action.data.searched),
                selectedCity: action.data.searched
            }
        } else if (action.type === 'favorite') {
            return {
                ...weather,
                searched: weather.searched.push(action.data.searched),
                selectedCity: action.data.searched
            }
        } else if (action.type === 'select_city') {
            if (action.data){
                console.log('context.js: recievedData', action);

                // first check in local database if key exists
                fetch(`${window.location.origin}/database/five_day_forecasts.json`)
                .then( res => res.json())
                .then(data => {
                    console.log('context.js: five_day_forecasts.json',data);
                })

                // fetch( api.fiveDayDailyForecast(action.data.key) ).then( res=>res.json() )
                // .then( recievedData => {
                //     console.log('context.js: recievedData', recievedData);
                //     dispatchWeather({
                //         type: 'SET_CITY',
                //         data: {
                //             ...weather,
                //             selectedCity: action.data.selectedCity ,
                //             selectedCityData: recievedData,
                //             searched: [action.data.searched],
                //         }
                //     });
                // })
            } else {
                console.log('data not provided at select_city');
            }
        } else if ( action.type === 'SET_CITY' ){
            return {
                ...weather,
                ...action.data
            }
        }
    }, {
            selectedCity: 'Tel Aviv',
            selectedCityData: {},
            favorite: [],
            searched: [],
    });//END weather reducer

    React.useEffect(()=> {
        console.log('context.js: weather', weather);
    }, [weather])

    return (
        <WeatherContext.Provider value={{weather,dispatchWeather, ...api}}>
            {children}
        </WeatherContext.Provider>
    )
}

