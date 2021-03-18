import axios from 'axios'
import { useDispatch } from 'react-redux'
import {ADD_PLAYER, DELETE_PLAYER} from './types'

export const addParamHelper = (x, y, img, type) => {
    return{
        type,
        payload: {x, y, img}
    }
}

export const addParam = async(x, y, img, players, dispatch) => {

    for(let i = 0; i < players.length; i++){
        if(players[i][0] === x & players[i][1] === y){
            dispatch(addParamHelper(x, y, img, DELETE_PLAYER))
            return
        }
    }
    
    dispatch(addParamHelper(x, y, img, ADD_PLAYER))
}

