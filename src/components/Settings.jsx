import React, { useEffect, useRef, useState } from 'react'
import styles from './Settings.module.scss'
import send from './../send.svg'
import accept from './../accept.svg'
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentNameHelper } from '../reducers/act';

const Settings = ({act_settings, current_user, setActSetting, setting_open}) => {

    let [anim_sett, setAnimSett] = useState({display: 'none'});
    let [new_name, setNewName] = useState("");
    const highlighting = useSelector(state => state.app.highlighting);
    const colors = ["#345444", "#433454", "#54344f", "#543437", "#345254", "#343654", "#515434", "#503057"]
    const dispatch = useDispatch();
    let container = useRef();

    const handleClickInside = () => setActSetting(true)

    const handleClickOutside = e => {
        if (!container.current.contains(e.target) & !setting_open.current.contains(e.target)) {
            setActSetting(false);
        }
    };

    const nameHandler = (e) => {
        if(e.target.value.length <= 23){
            setNewName(e.target.value)
        }
    }

    function setName (e){
        e.preventDefault()
        if(!!localStorage.getItem("color"))
        updateCurrentNameHelper(Date.now(), new_name, localStorage.getItem("color"), dispatch)
        else
        updateCurrentNameHelper(Date.now(), new_name, current_user.color, dispatch)
    }
    function setColor (col){
        if(!!localStorage.getItem("name"))
        updateCurrentNameHelper(Date.now(), localStorage.getItem("name"), col, dispatch)
        else
        updateCurrentNameHelper(Date.now(), current_user.name, col, dispatch)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    useEffect(() => {
        !act_settings
        ?setTimeout(() => setAnimSett({display: 'none'}), 200)
        :setAnimSett({display: 'block'})
        setNewName(current_user.name)
    }, [act_settings, current_user.name])

    return (
        <div 
        style={anim_sett}
        className={act_settings
            ?styles.settings+" "+styles.open__settings
            :styles.settings+" "+styles.close__settings}
        onClick={handleClickInside}
        ref={container} 
            >
            <span className={styles.highlighting+" "+(highlighting?styles.on:styles.off)}>Изменено!</span>
            <div>
                <p>Имя</p>
            <form className={styles.input_block} onSubmit={(e) => setName(e)}>
                <input value={new_name} autoFocus onChange={(e) => nameHandler(e)}/>
                <button type="submit"><img src={accept} alt=""/></button>
            </form>
            </div>
            <div>
                <p>Цвет диалога</p>
                <div className={styles.block_color}>
                    {colors.map((col, i) => 
                    <div key={i} 
                    className={styles.colors+((current_user.color===col)?(" "+styles._active):"")} 
                    onClick={() => setColor(col)}
                    style={{backgroundColor: col}}>
                    </div>)}
                </div>
            </div>
        </div>
    )
}


export default Settings