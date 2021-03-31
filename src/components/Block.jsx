import React from 'react'
import styles from './Block.module.scss'

const Block = ({message, name, color, anim}) => {

    return (
        <div style={{backgroundColor: color}} className={anim?styles.block__container+" "+styles.anim:styles.block__container}>
            <h6>{name}</h6>
            <h3>{message}</h3>
        </div>
    )
}

export default Block