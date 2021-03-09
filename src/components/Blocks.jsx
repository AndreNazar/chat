import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Block from './Block'
import styles from './Blocks.module.scss'
import { getCities } from '../reducers/act'
import Load from './Load'


const Blocks = () => {
    const app = useSelector(state => state.app.cities)
    const dispatch = useDispatch()

    useEffect(async() => {
        await getCities(dispatch)
    }, [])


    return (
        <div className="container mt-5">
            <Load />
            <div className={"wrapper "+styles.blocks}>
                {app.map(b => <Block 
                key={b.data.id}
                id={b.data.id} 
                temp={Math.round(b.data.main.temp)}
                precipitation={b.data.weather[0].icon}
                name={b.data.name}
                link={b.data.id}/>)}
            </div>
        </div>
    )
}

export default Blocks