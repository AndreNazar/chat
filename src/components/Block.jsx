import React, { useEffect } from 'react'
import styles from './Block.module.scss'
import player from './../player1.gif'
import { addParam } from '../reducers/act';
import { useDispatch } from 'react-redux';

const Block = ({x, y, active, setActive}) => {

    const dispatch = useDispatch();
    const getImg = () => {
        return Math.floor(Math.random() * (31 - 1)) + 1;
    }

    return (
        <div className={styles.block} onPointerDown={() => addParam(x, y, getImg(), active, dispatch)}>
            {active.map((a, i) => (a[0]===x & a[1]===y)? <img key={i} src={require("./../"+"player"+(active.map(a => x===a[0] && y===a[1])&&a[2])+".gif")['default']} alt="" draggable='false'/>:null)}
        </div>
    )
}

export default Block