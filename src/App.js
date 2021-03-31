import React, { useEffect, useRef, useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/database';
import { useDispatch } from 'react-redux';
import Chat from './components/Chat';
import setting from './Ic_settings_48px.svg'
import fire_img from './fire.png'
import { createMessages, updateCurrentName } from './reducers/act';


const App = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: "AIzaSyCb9QPjqI6qS26ekA-8UxQaMLoeReQSU3c",
            authDomain: "chat-3a1bb.firebaseapp.com",
            databaseURL: "https://chat-3a1bb-default-rtdb.firebaseio.com",
            projectId: "chat-3a1bb",
            storageBucket: "chat-3a1bb.appspot.com",
            messagingSenderId: "273094649471",
            appId: "1:273094649471:web:c74745a4fe24ecd38cc14a"
        })
     }else {
        firebase.app();
     }

    const [act_settings, setActSetting] = useState(false);
    const db = firebase.database();
    const messcheck = db.ref('messages');
    const dispatch = useDispatch();
    const setting_open = useRef();

    function targetSettings () {
        setActSetting(!act_settings)
    }

    useEffect(() => {
    messcheck.on('value', (snapshot) => {
        const data = snapshot.val()
        const array = []
        Object.keys(data).map(key => array.push(data[key]))

        dispatch(createMessages(array))
    })
    
    if(!!localStorage.getItem('id') & !!localStorage.getItem('name') & !!localStorage.getItem('color')){
        dispatch(updateCurrentName(localStorage.getItem('id'), localStorage.getItem('name'), localStorage.getItem('color')))
    }
    }, [dispatch, messcheck])
    
    return (
        <div className="field container">
            <div className="header">
                <h1>Boiler<img src={fire_img} className="fire_img"/></h1>
                <img 
                src={setting} 
                className={act_settings?"active":"disable"} 
                onClick={() => targetSettings()} 
                ref={setting_open} 
                alt=""/>
            </div>
            <Chat setting_open={setting_open} act_settings={act_settings} setActSetting={setActSetting}/>
        </div>
    )
}

export default App