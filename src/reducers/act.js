import axios from 'axios'
import { useDispatch } from 'react-redux'
import {ADD_CITIES, ADD_CURRENT_CITY, LOAD_CHANGE} from './types'

export const addParam = (response) => {
    return{
        type: ADD_CITIES,
        payload: response
    }
}
export const addCurrentCity = (response) => {
    return{
        type: ADD_CURRENT_CITY,
        payload: response
    }
}
export const loadChange = (response) => {
    return{
        type: LOAD_CHANGE,
        payload: response
    }
}

export const getCurrentCity = async(city, dispatch) => {
    const response = []
    dispatch(loadChange(true))
    city==="486148"
    ?response.push(await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=красный+завод&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032`))
    :response.push(await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032`))
    
    dispatch(loadChange(false))
    dispatch(addCurrentCity(response))
}

export const getCities = async(dispatch) => {
    const response = []
    dispatch(loadChange(true))
    response.push(await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=красный+завод&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032`))
    response.push(await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=achinsk&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032`))
    response.push(await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=krasnoyarsk&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032`))
    response.push(await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032`))
    response.push(await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=saint+petersburg&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032`))
    response.push(await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=kazan&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032`))
    dispatch(loadChange(false))
    dispatch(addParam(response))
}