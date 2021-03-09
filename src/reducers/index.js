import { combineReducers } from "redux"
import rootReducer from './rootReducer'

const allReducers =  combineReducers({
        app: rootReducer
    })

export default allReducers;