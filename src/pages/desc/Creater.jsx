import React, {useState} from 'react';
import {arrCast} from "../../data";
import s from "./Desc.module.css";

function Creater() {

    const [currentArr, setCurrentArr] = useState([])
    const [allButton, setAllButton] = useState(true)
    let number = 8


    if(arrCast.actors.length > 8 && currentArr.length === 0){
        setCurrentArr(arrCast.actors.slice(0, 8))
    }

    const sheClick = () => {
        number += 8
        setCurrentArr(arrCast.actors.slice(0, number))
    }

    const minClick = () => {
        setAllButton(true)
        setCurrentArr(arrCast.actors.slice(0, number))
    }

    if(currentArr.length === arrCast.actors.length && allButton === true){
        setAllButton(false)
    }

    return (
        <div>
            <p className={s.pTitleSos}>Режиссёр</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                arrCast.director.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                                {item.img !== '' ? <img className={s.imgSos} src={item.img} alt="photo"/>
                                    : <span className={s.imgCreate}></span>}
                            </div>
                            <div>
                                <p className={s.pDescSos}>{item.name}</p>
                                <p className={s.pTimeSos}>{item.films}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <p className={s.pTitleSos}>Актёры</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                currentArr.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                                {item.img !== '' ? <img className={s.imgSos} src={item.img} alt="photo"/>
                                    : <span className={s.imgCreate}></span>}
                            </div>
                            <div>
                                <p className={s.pDescSos}>{item.name}</p>
                                <p className={s.pTimeSos}>{item.films}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            { allButton ? <button className={s.buttonShe} onClick={sheClick}>Показать ещё</button>
                : <button className={s.buttonShe} onClick={minClick}>Показать меньше</button>}
            <p className={s.pTitleSos}>Продюсеры</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    arrCast.producers.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    {item.img !== '' ? <img className={s.imgSos} src={item.img} alt="photo"/>
                                        : <span className={s.imgCreate}></span>}
                                </div>
                                <div>
                                    <p className={s.pDescSos}>{item.name}</p>
                                    <p className={s.pTimeSos}>{item.films}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className={s.pTitleSos}>Оператор</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    arrCast.operator.map((item, index) => {

                        return (
                            <div key={index}>
                                <div>
                                    {item.img !== '' ? <img className={s.imgSos} src={item.img} alt="photo"/>
                                        : <span className={s.imgCreate}></span>}
                                </div>
                                <div>
                                    <p className={s.pDescSos}>{item.name}</p>
                                    <p className={s.pTimeSos}>{item.films}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className={s.pTitleSos}>Художники</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    arrCast.artists.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    {item.img !== '' ? <img className={s.imgSos} src={item.img} alt="photo"/>
                                        : <span className={s.imgCreate}></span>}
                                </div>
                                <div>
                                    <p className={s.pDescSos}>{item.name}</p>
                                    <p className={s.pTimeSos}>{item.films}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className={s.pTitleSos}>Сценаристы</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    arrCast.screenwriters.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    {item.img !== '' ? <img className={s.imgSos} src={item.img} alt="photo"/>
                                        : <span className={s.imgCreate}></span>}
                                </div>
                                <div>
                                    <p className={s.pDescSos}>{item.name}</p>
                                    <p className={s.pTimeSos}>{item.films}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className={s.pTitleSos}>Композитор</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    arrCast.composer.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    {item.img !== '' ? <img className={s.imgSos} src={item.img} alt="photo"/>
                                        : <span className={s.imgCreate}></span>}
                                </div>
                                <div>
                                    <p className={s.pDescSos}>{item.name}</p>
                                    <p className={s.pTimeSos}>{item.films}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className={s.pTitleSos}>Монтаж</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    arrCast.assembling.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    {item.img !== '' ? <img className={s.imgSos} src={item.img} alt="photo"/>
                                        : <span className={s.imgCreate}></span>}
                                </div>
                                <div>
                                    <p className={s.pDescSos}>{item.name}</p>
                                    <p className={s.pTimeSos}>{item.films}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Creater;