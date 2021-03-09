import React from 'react'
import { useSelector } from 'react-redux'

const Load = () => {
    const on_load = useSelector(state => state.app.on_load)
    if(on_load){
    return (
        <div class="spinner-border text-info loading" role="status">
          <span class="sr-only"></span>
        </div>
    )
    }else{
        return null
    }
}

export default Load