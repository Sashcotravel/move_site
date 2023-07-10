import React from 'react';
import s from './Desc.module.css'

function Reviews() {

    const arr = [
        {
            name: '',
            date: '27 января 2023',
            number: 9,
            title: 'Добрый, позитивный фильм со смыслом',
            desc: 'Последнее время почему-то принято ругать отечественное кино. Но! Если присмотреться есть очень ' +
                'достойные картины! На мой взгляд, эта картина в...',
            like: 1,
            img: ''
        },
        {
            name: 'brill75',
            date: '28 декабря 2022',
            number: 5,
            title: 'Все лучшее - в трейлере',
            desc: 'В последнее время стало модным напихать в один проект кучу громких имен: актеры разных сортов' +
                ' и калибров, певцы, блогеры, включить пару самых...',
            like: -1,
            img: ''
        },
    ]

    return (
        <div>
            {
                arr.map((item, index) => {
                    let color
                    if(Number(item.like) < 0){ color = 'red' }
                    else { color = 'green' }

                    return (
                        <div key={index}>
                            <div className={s.divAllInfo}>
                                <div style={{ display: 'flex' }}>
                                    {item.img !== '' ? <img className={s.photo} src={item.img} alt="photo"/>
                                        : <span className={s.img}></span>}
                                    <span className={s.spanName}>{item.name}</span>
                                    <span className={s.spanTime}>{item.date}</span>
                                    <span className={s.spanTime} style={{color: 'white', marginLeft: '20px'}}>{item.number}</span>
                                </div>
                                <div><span style={{color: color}}>{item.like}</span></div>
                            </div>
                            <div>
                                <p className={s.pTitle}>{item.title}</p>
                                <p className={s.pDesc}>{item.desc}</p>
                            </div>
                            <p className={s.pDesc+' '+s.pRez}>Развернуть</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Reviews;