import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCity } from '../reducers/act';
import styles from './BlockPage.module.scss'
import sun from './../sun.png'
import cloud from './../cloud.png'
import overcast from './../Overcast.png'
import overcastsun from './../overcast_sun.png'
import shower from './../shower.png'
import rain from './../rain.png'
import thunderstorm from './../thunderstorm.png'
import snow from './../snow.png'
import mist from './../mist.png'
import Load from './Load';

const BlockPage = (props) => {

    const currentLink = window.location.href.split('/')
    const current_city = useSelector(state => state.app.current_city)
    const dispatch = useDispatch()
    useEffect(async () => {
        await getCurrentCity(currentLink[currentLink.length - 1], dispatch)
    }, [])

    useEffect(() => {
        console.log(current_city)
    }, [current_city])

    if (typeof current_city[0] !== 'undefined') {
        const prec = current_city[0].data.weather[0].icon.substring(0, 2)
        const minCC = current_city[0].data
        return (
            <div className={styles.container_block_page}>
                <Load />
                <div className={styles.container_block_page}>
                <div className={styles.back}>
                    <button className="btn btn-info" onClick={() => props.history.goBack()}>Назад</button>
                </div>
                    <div className={styles.block_page}>
                        <div className={styles.intro_info}>
                            <h1 className="text-light">{
                            minCC.id===1512165?"Ачинск":
                            minCC.id===1502026?"Красноярск":
                            minCC.id===524901?"Москва":
                            minCC.id===498817?"Санкт-Петербург":
                            minCC.id===551487?"Казань":minCC.name
                            }</h1>
                            <h1 className={styles.temp}>{Math.round(minCC.main.temp)}°C</h1>
                            <h5 className="text-secondary">По ощущению: {Math.round(minCC.main.feels_like)}°C</h5>
                        </div>
                        <img className={styles.icon} src={
                            prec === "01" ? sun :
                                prec === "02" ? overcastsun :
                                    prec === "03" ? cloud :
                                        prec === "04" ? overcast :
                                            prec === "09" ? shower :
                                                prec === "10" ? rain :
                                                    prec === "11" ? thunderstorm :
                                                        prec === "13" ? snow : mist} />

                        <div className={styles.intro_info}>
                            <p className={"text-secondary"}><span className={styles.intro_info__text+" text-light"}>Ветер: </span>{
                                ((minCC.wind.deg >= 0 & minCC.wind.deg <= 45)
                                    || (minCC.wind.deg >= 315 & minCC.wind.deg <= 360)) ? "Северный" :
                                    (minCC.wind.deg >= 45 & minCC.wind.deg <= 135) ? "Восточный" :
                                        (minCC.wind.deg >= 135 & minCC.wind.deg <= 225) ? "Южный" : "Западный"} - {minCC.wind.speed} м/ч</p>
                            <p className={"text-secondary"}><span className={styles.intro_info__text+" text-light"}>Влажность: </span>{minCC.main.humidity}%</p>
                            <p className={"text-secondary"}><span className={styles.intro_info__text+" text-light"}>Дваление: </span>{minCC.main.pressure}мм рт. ст.</p>
                        </div>
                        <div className={styles.precipitation}>
                            <h1 className="text-secondary">{
                                prec === "01" ? "Солнце" :
                                    prec === "02" ? "Малооблачно" :
                                        prec === "03" ? "Рассеянные облака" :
                                            prec === "04" ? "Облачно" :
                                                prec === "09" ? "Град/ливень" :
                                                    prec === "10" ? "Дождь" :
                                                        prec === "11" ? "Гроза" :
                                                            prec === "13" ? "Снег" : "Туман"}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else { return <Load /> }
}

export default BlockPage