import {ADD_MESSAGE, UPDATE_NAME, SWITCH_HIGHTLIGHT, CREATE_MESSAGE} from './types'
import firebase from 'firebase/app';
import 'firebase/database';
import send_pop from './../pop.mp3'

export const createMessages = (messages) => {
    return{
        type: CREATE_MESSAGE,
        payload: {messages}
    }
}

export const addMessage = (obj) => {
    console.log(obj)
    return{
        type: ADD_MESSAGE,
        payload: {obj}
    }
}

export const updateCurrentName = (id, name, col) => {
    return{
        type: UPDATE_NAME,
        payload: {id, name, color: col}
    }
}

export const highlightingNameHandler = (val) => {
    return{
        type: SWITCH_HIGHTLIGHT,
        payload: {val}
    }
}


export const addMessageHelper = (id, message, name, color) => {
        const new_message = {id, id_message: new Date().getUTCMilliseconds() + Date.now(), message, name, color}
        const db = firebase.database();
        
        db.ref('messages').push(new_message);
        db.ref('messages').once('value', (snapshot) => {
            const data = snapshot.val()
            db.ref('messages').child(Object.keys(data)[0]).remove()
        })
        
        const audio = new Audio(send_pop)
        audio.play()
}

export const updateCurrentNameHelper = (id, name, col, dispatch) => {
    if(name.trim() !== ""){
        localStorage.setItem('color', col); // 100%
        localStorage.setItem('name', name); // 100%
        localStorage.setItem('id', id); // 100%
        dispatch(updateCurrentName(id, name, col))

        dispatch(highlightingNameHandler(true))
        setTimeout(() => {
            dispatch(highlightingNameHandler(false))
        }, 3000);
    }
}