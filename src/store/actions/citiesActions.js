import {getCities, getCitiesSuccess, errorHandler} from '../types';

import axios from 'axios';

export const getCitiesAction = () => async dispatch => {
    try {
        dispatch(getCities());
        const res = await axios.get(`${window.location.origin}/database/five_day_forecasts.json`);
        console.log('citiesAction:',res)
        dispatch(getCitiesSuccess(res));
    } catch (error) {
        dispatch(errorHandler(error));
    }
}
