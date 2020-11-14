import {GET_CITIES, GET_CITIES_SUCCESS} from '../types';

const initialState = {
    cities:[],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CITIES:
            return {
                ...state,
                loading:true
            };
        case GET_CITIES_SUCCESS:
            return {
                ...state,
                cities:action.payload,
                loading:false
            };
        default: return state
    }
}