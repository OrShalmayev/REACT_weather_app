export const ERROR_HANDLER = 'ERROR_HANDLER';
export const GET_CITIES = 'GET_CITIES';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';

/**
 * 
 * Default Action Creatoes 
 */
export function errorHandler(error){
    return {
        error: {
            hasError: true,
            errorMessage: error
        }
    }
}

/**
 * City Action Creaties
 */
export function getCities(){
    return {
        type: GET_CITIES
    }
}

export function getCitiesSuccess(payload){
    return {
        type: GET_CITIES_SUCCESS,
        payload
    }
}