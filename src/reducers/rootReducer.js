import {ADD_CITIES, ADD_CURRENT_CITY, LOAD_CHANGE} from './types'

const initialState = {
    cities: [],
    current_city: [],
    on_load: false
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITIES:
            return {...state, cities: action.payload, current_city: []}
            break;
        case ADD_CURRENT_CITY:
            return {...state, current_city: action.payload, cities: []}
            break;
        case LOAD_CHANGE:
            return {...state, on_load: action.payload}
            break;

        default:
            return state
            break;
    }
}
export default rootReducer