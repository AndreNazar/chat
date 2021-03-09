import React, { useEffect, useState } from 'react'
import styles from './Block.module.scss'
import sun from './../sun.png'
import cloud from './../cloud.png'
import overcast from './../Overcast.png'
import overcastsun from './../overcast_sun.png'
import shower from './../shower.png'
import rain from './../rain.png'
import thunderstorm from './../thunderstorm.png'
import snow from './../snow.png'
import mist from './../mist.png'
import {NavLink} from 'react-router-dom'
const Block = ({temp, precipitation, name, id, link}) => {
    return (
        <NavLink to={"/"+link} className={"p-3 "+styles.block}>
            <h1 className={styles.name}>{
                            id===1512165?"Ачинск":
                            id===1502026?"Красноярск":
                            id===524901?"Москва":
                            id===498817?"Санкт-Петербург":
                            id===551487?"Казань":name}</h1>
            <div className={styles.temp}>
                <h1>{temp}°C</h1>
                <img src={
                    precipitation.substring(0, 2)==="01"?sun:
                    precipitation.substring(0, 2)==="02"?overcastsun:
                    precipitation.substring(0, 2)==="03"?cloud:
                    precipitation.substring(0, 2)==="04"?overcast:
                    precipitation.substring(0, 2)==="09"?shower:
                    precipitation.substring(0, 2)==="10"?rain:
                    precipitation.substring(0, 2)==="11"?thunderstorm:
                    precipitation.substring(0, 2)==="13"?snow:mist}/>
            </div>
        </NavLink>
    )
}

export default Block