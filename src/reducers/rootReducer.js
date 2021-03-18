import {ADD_PLAYER, DELETE_PLAYER} from './types'

const initialState = {
    players: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYER:
            return {players: [...state.players, [action.payload.x, action.payload.y,  action.payload.img]]}
            break;
        case DELETE_PLAYER:
            return {players: [...state.players.filter(p => !(action.payload.x === p[0] && action.payload.y === p[1]))]}
            break;
        default:
            return state
            break;
    }
}
export default rootReducer