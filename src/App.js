import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Block from './components/Block'


const App = () => {
    
    const active = useSelector(state => state.app.players);

    function getColumn (y) {
        let k = 0;
        let result = [];
        for(let j = 0; j<30; j++){
            k++
            result.push(<Block key={k} x={j} y={y} active={active} />)
        }
        return result
    }
    function getRows () {
        let result = [];
        let k = 0;
        for(let i = 0; i<16; i++){
            k++
            result.push(<div key={k} style={{display: 'flex', justifyItems: 'center'}}>{getColumn(i)}</div>)
        }
        return result
    }

    return (
        <div style={{display: 'grid'}} className="field">{getRows()}</div>
    )
}

export default App