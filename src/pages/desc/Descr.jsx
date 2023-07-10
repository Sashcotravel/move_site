import React, {useState} from 'react';
import s from './Desc.module.css'
import { arr } from '../../data'

function Descr() {
    const [currentArr, setCurrentArr] = useState([])
    const [allButton, setAllButton] = useState(true)
    let number = 6

    if(arr.length > 6 && currentArr.length === 0){
        setCurrentArr(arr.slice(0, 6))
    }

    const sheClick = () => {
        number += 6
        setCurrentArr(arr.slice(0, number))
    }

    const minClick = () => {
        setAllButton(true)
        setCurrentArr(arr.slice(0, number))
    }

    if(currentArr.length === arr.length && allButton === true){
        setAllButton(false)
    }

    return (
        <div>
            <div className={s.divSearch}>
                <input className={s.inputDesc} type="search" placeholder='Написать отзыв' />
                <button className={s.buttonSearch}>Отправить</button>
            </div>
            <div>
                {
                    currentArr.map((item, index) => {
                        let color
                        if(Number(item.like) < 9){ color = 'red' }
                        else { color = 'green' }
                        return (
                            <div key={index}>
                                <div className={s.divAllInfo}>
                                    <div style={{display: 'flex'}}>
                                        {item.img !== '' ? <img className={s.photo} src={item.img} alt="photo"/>
                                            : <span className={s.img}></span>}
                                        <span className={s.spanName}>{item.name}</span>
                                        <span className={s.spanTime}>{item.date}</span>
                                        <span className={s.spanTime} style={{color: 'white', marginLeft: '20px'}}>{item.number}</span>
                                    </div>
                                    <div><span style={{color: color}}>{item.like}</span></div>
                                </div>
                                <p className={s.pDesc}>{item.title}</p>
                                <p className={s.pDesc+' '+s.pRez} style={{margin: '20px 0 30px 30px'}}>Развернуть</p>
                            </div>
                        )
                    })
                }
                { allButton ? <button className={s.buttonShe} onClick={sheClick}>Показать ещё</button>
                : <button className={s.buttonShe} onClick={minClick}>Показать меньше</button>}
            </div>
        </div>
    );
}

export default Descr;