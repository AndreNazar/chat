import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addMessageHelper } from '../reducers/act'
import styles from './Chat.module.scss'
import Conversation from './Conversation'
import Settings from './Settings'
import send from './../send.svg'

const Chat = ({act_settings, setActSetting, setting_open}) => {

    const [message, setMessage] = useState("")
    const current_user = useSelector(state => state.app.currentUser);
    const messages = useSelector(state => state.app.messages);
    let [send_count, setSendCount] = useState(1);
    const [loadanim, setLoadanim] = useState(false);
    const [focus, setFocus] = useState(true)
    
    const sendMessage = (e) => {
        e.preventDefault()
        setSendCount(send_count + 1)
        setFocus(true)

        if(send_count <= 2){ // ANTIFLUD
            if(message.trim() !== ""){
                addMessageHelper(current_user.id, message, current_user.name, current_user.color)
                setLoadanim(true)
                setMessage("")
            }
        }

    }

    const messageHandler = (e) => {
        if(e.target.value.length <= 500){// Ограничение на ввод
            setMessage(e.target.value) 
        }
    } 

    useEffect(() => {
        setInterval(() => {
            setSendCount(1) // UPDATE send_count
        }, 2000);
    }, [])

    return (
        <div className={styles.chat__container}>
            <Settings act_settings={act_settings} current_user={current_user} setActSetting={setActSetting} setting_open={setting_open}/>
            <Conversation loadanim={loadanim}/>
            {(messages.length===0)&&<div className={styles.loading}>Loading...</div>}
            <form className={styles.chat_form} onSubmit={(e) => sendMessage(e)}>
                <input value={message} placeholder={"Введите ваше сообщение..."} autoFocus={focus} onChange={(e) => messageHandler(e)}/>
                <button type='submit'><img src={send} alt=""/></button>
            </form>
        </div>
    )
}

export default Chat