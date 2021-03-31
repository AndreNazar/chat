import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Block from './Block'
import styles from './Conversation.module.scss'

const Conversation = ({loadanim}) => {

    const messages = useSelector(state => state.app.messages)
    let wrapper = React.createRef();

    useEffect(() => {
        const elementHeight = wrapper.current.scrollHeight;
        wrapper.current.scrollTop = elementHeight
    }, [messages, wrapper])



    return (
        <div className={styles.conversation__container}>
            <div ref={wrapper} className={styles.wrapper}>
                {messages.map(m => 
                <Block 
                key={m.id_message} 
                message={m.message} 
                anim={((messages[messages.length-1].id_message===m.id_message)&loadanim)?true:false} 
                color={m.color} name={m.name}/>
                )}
            </div>
        </div>
    )
}

export default Conversation