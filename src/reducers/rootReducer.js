import {ADD_MESSAGE, CREATE_MESSAGE, SWITCH_HIGHTLIGHT, UPDATE_NAME} from './types'

const initialState = {
    messages: [],
    currentUser: {id: Date.now(), name: 'noname', color: '#345444'},
    highlighting: false
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages]}
        case CREATE_MESSAGE:
            return {...state, messages: action.payload.messages}
        case UPDATE_NAME:
            return {...state, currentUser: {
                id: action.payload.id, 
                name: action.payload.name, 
                color: action.payload.color
            }
        }
        case SWITCH_HIGHTLIGHT:
            return {...state, highlighting: action.payload.val}
            default:
                return state
    }
}
export default rootReducer