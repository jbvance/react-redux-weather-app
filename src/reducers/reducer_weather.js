import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {    
    switch (action.type) {
        case FETCH_WEATHER:
            //only return updated state if a city was located by the API
            return  action.payload.data ? [ action.payload.data, ...state ] : state;
    }
    return state;
}