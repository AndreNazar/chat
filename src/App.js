import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Blocks from './components/Blocks'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import BlockPage from './components/BlockPage'
import { addParam, getCities } from './reducers/act'


const App = () => {
    const app = useSelector(state => state.app)

    function notifGet(){
        var notification = new Notification("Погода в Ачинске на сегодня",{
            tag: "ache-mail",
            body: "24 градуса",
            icon: "https://www.meteoservice.ru/img/weather_icons/material/svg/clouds_light.svg?v=2"
        })
    }

    function notifSet(){
        if(!("Notification" in window))alert("Ваш браузер не поддерживает уведомления")
        else if(Notification.permission === 'granted') setInterval(notifGet, 60000)
        else if(Notification.permission !== 'denied'){
            Notification.requestPermission(function(permission){
                if(!('permission' in Notification)) Notification.permission = permission
                if(!('permission' in Notification)) Notification.permission = permission
            })
        }
    }

    return (
        <BrowserRouter>
            <div className="container mt-5">
                <Switch>
                    <Route path="/" component={Blocks} exact/>
                    <Route path="/:link" component={BlockPage}/>
                    <Redirect to="/"/>
                </Switch>
                <div className="subscribe"><button onClick={() => notifSet()} className={"btn btn-info"}>Подписаться</button></div>
            </div>
        </BrowserRouter>
    )
}

export default App