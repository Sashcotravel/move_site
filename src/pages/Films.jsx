import s from "./Films.module.css";
import {arrCast, comments, coolFucts, withFilm} from "../data";
import React, {useState} from "react";
import Trailer from "./desc/Trailer";


const Films = () => {

    const [cast, setCast] = useState([])
    const [info, setInfo] = useState([])
    const [descAdd, setDescAdd] = useState(false)
    const [descAdd1, setDescAdd1] = useState(false)

    const filmPod = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3OR9JzSEEkBqMY-e3kZGenrMQprMRQmn17tEYI70QsKhCzn5ihYi9rhOtjXgvrbAWo&usqp=CAU",
            name: 'Фильмы про настоящую любовь'
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3OR9JzSEEkBqMY-e3kZGenrMQprMRQmn17tEYI70QsKhCzn5ihYi9rhOtjXgvrbAWo&usqp=CAU",
            name: 'Комедии'
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3OR9JzSEEkBqMY-e3kZGenrMQprMRQmn17tEYI70QsKhCzn5ihYi9rhOtjXgvrbAWo&usqp=CAU",
            name: 'Российские мелодрамы'
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3OR9JzSEEkBqMY-e3kZGenrMQprMRQmn17tEYI70QsKhCzn5ihYi9rhOtjXgvrbAWo&usqp=CAU",
            name: 'Российские комедии'
        },
    ]

    if(cast.length === 0){
        setCast(arrCast.actors.slice(0, 7))
    }

    if(info.length === 0){
        setInfo(coolFucts.slice(0, 1))
    }

    const addDesc = () => {
        document.getElementById('desc').style.overflowY = 'inherit'
        document.getElementById('desc').style.height = 'auto'
        setDescAdd(true)
    }

    const minDesc = () => {
        document.getElementById('desc').style.overflowY = 'clip'
        document.getElementById('desc').style.height = '58px'
        setDescAdd(false)
    }

    const addDesc1 = () => {
        setDescAdd1(true)
        setInfo(coolFucts.slice(0, coolFucts.length))
    }

    const minDesc1 = () => {
        setDescAdd1(false)
        setInfo(coolFucts.slice(0, 1))
    }

    return (
        <main className={s.mainWatch}>
            <div className={s.divButTr}>
                <div className={s.videoDiv}>
                    <iframe src="https://www.youtube.com/embed/-e_3Cg9GZFU?autoplay=1&mute=1"
                            title="YouTube video player" className={s.videoTag} allowFullScreen></iframe>
                    <div className={s.divButTr+' '+s.divButTr2}>
                        <div style={{display: 'flex'}}>
                            <button className={s.buttonTrailer}>Трейлер</button>
                            <button className={s.bEmpte}></button>
                        </div>
                        <div>
                            <button className={s.freeFilm}>Бесплатные фильмы</button>
                        </div>
                    </div>
                </div>
                <div className={s.videoDivInfo}>
                    <h1 className={s.h1Title}>Фильм Любовники смотреть онлайн</h1>
                    <div className={s.divTimeFilm}>
                        <span className={s.spanTimeFilm}>2022</span>
                        <span className={s.spanTimeFilm}>1 ч. 38 мин.</span>
                        <span className={s.spanTimeFilm}>18+</span>
                    </div>
                    <div className={s.divTimeFilm}>
                        <span className={s.spanCountryFilm}>Россия</span>
                        <span className={s.spanDot}>·</span>
                        <span className={s.spanCountryFilm}>Комедии</span>
                        <span className={s.spanDot}>·</span>
                        <span className={s.spanCountryFilm}>Мелодрамы</span>
                        <span className={s.spanDot}>·</span>
                        <span className={s.spanCountryFilm}>Русские</span>
                    </div>
                    <div className={s.divTimeFilm}>
                        <button className={s.spanFullHDFilm}>FullHD</button>
                        <span className={s.spanTimeFilm}>Рус</span>
                        <span className={s.spanTimeFilm}>Рус</span>
                    </div>
                    <div className={s.divTimeFilm+' '+s.divImage}>
                        <div className={s.imgBoxFlex}>
                            <span className={s.spamImgSeven}>7,4</span>
                            <span className={s.textImg}>Рейтинг Иви</span>
                        </div>
                        <div className={s.imgBoxFlex}>
                            <img className={s.imgFilm} src="https://pbs.twimg.com/media/FXezeTJWIBYsB5X.jpg" alt="photo" />
                            <span className={s.textImg}>Павел Прилучный</span>
                        </div>
                        <div className={s.imgBoxFlex}>
                            <img className={s.imgFilm} src="https://pbs.twimg.com/media/FXezeTJWIBYsB5X.jpg" alt="photo" />
                            <span className={s.textImg}>Павел Прилучный</span>
                        </div>
                        <div className={s.imgBoxFlex}>
                            <img className={s.imgFilm} src="https://pbs.twimg.com/media/FXezeTJWIBYsB5X.jpg" alt="photo" />
                            <span className={s.textImg}>Павел Прилучный</span>
                        </div>
                        <div className={s.imgBoxFlex}>
                            <img className={s.imgFilm} src="https://pbs.twimg.com/media/FXezeTJWIBYsB5X.jpg" alt="photo" />
                            <span className={s.textImg}>Павел Прилучный</span>
                        </div>
                    </div>
                    <div className={s.divTimeFilm}>
                        <p className={s.pDesc}>Трое друзей с проблемами в личной жизни создают клуб взаимопомощи
                            для всех мужчин, пострадавших от женщин. Находчивые мстители пытаются разоблачить коварных
                            красоток, а заодно узнают много нового об отношениях и любви. Павел Прилучный и Роман Курцын
                            в авантюрной романтической комедии от создателей фильма «Любовницы».</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <p className={s.textImg}>Детали о фильме</p>
                    </div>
                    <div className={s.divOcen}>
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <span className={s.imgSeven}>7,4</span>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span className={s.spanTextVest}>Рейтинг <b>VestMo</b></span>
                                <span className={s.spanText2}>Выдающиеся актеры</span>
                                <span className={s.spanText2}>75 471 оценка</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className={s.buttonOcen}>Оценить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className={s.psFilm}>С фильмом «Любовники» смотрят</p>
                <div className={s.divFlex}>
                    {
                        withFilm.map((item, index) => {
                            let color = '#A5A1B2';
                            return (
                                <div key={index} className={`${index === 6 && s.none} ${s.boxIm}`}>
                                    {item.ivi && <span className={s.spanIvi}>сериал Иви</span>}
                                    <img className={s.imgPosterFilm} src={item.img} alt="photo" />
                                    <p className={s.pNameFilmInfo}>{item.name}</p>
                                    <p className={s.pPriceInfo} style={item.price === 'Бесплатно' ?
                                        {color: color} : undefined}>{item.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <p className={s.psFilm2}>Актёры и создатели</p>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                    {
                        cast.map((item, index) => {

                            return (
                                <div key={index}>
                                    <img className={s.imgCast} src={item.img} alt="photo" />
                                    <p className={s.pNameActors}>{item.name}</p>
                                    <p className={s.pNameWorks}>director</p>
                                </div>
                            )
                        })
                    }
                    {cast.length === 7 && <span className={s.spanImg}
                                                onClick={() => setCast(arrCast.actors)}>Ещё</span>}
                    {cast.length !== 7 && <span className={s.spanImg}
                                                onClick={() => setCast(arrCast.actors.slice(0, 7))}>Меньше</span>}
                </div>
            </div>
            <div>
                <p className={s.psFilm2}>Трейлеры и доп. материалы</p>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                    <Trailer />
                </div>
            </div>
            <div>
                <p className={s.psFilm2}>Фильм в подборках</p>
                <div className={s.divFlex}>
                    {
                        filmPod.map((item, index) => {
                            return (
                                <div key={index} className={s.boxWidth}>
                                    <img src={item.img} alt="photo" className={s.imgDesc} />
                                    <p className={s.pT}>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <p className={s.psFilm2} style={{display: 'flex'}}>Трейлеры и доп. материалы
                    <span className={s.dopSpor}>Осторожно, спойлеры</span></p>
                <p className={s.suzhet} id='desc'>Вера возвращается домой со своим сыном Темой с музыкального конкурса.
                    Мальчик победил, но он грустит. Его папа опять не пришел. Войдя в квартиру, он сразу же
                    отправляется в свою комнату, а Вера обнаруживает своего мужа Александра в постели с молоденькой девушкой.</p>
                {!descAdd && <p onClick={addDesc} className={s.pDescDop}>Читать дальше</p>}
                {descAdd && <p onClick={minDesc} className={s.pDescDop}>Читать меньше</p>}
            </div>
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                        <p className={s.psFilm2} style={{display: 'flex'}}>Отзывы
                            <span className={s.dopNum}>24</span></p>
                        <p className={s.pDescDop2}>о фильме «Любовники»</p>
                    </div>
                    <button className={s.buttonOtsiv}>Оставить отзыв</button>
                </div>
                <div className={s.boxComment}>
                    {
                        comments.map((item, index) => {
                            return (
                                <div className={s.otzBox}>
                                    <p className={s.otxName}>{item.name}</p>
                                    <p className={s.otxDesc}>{item.desc.slice(0, 70)}
                                        {item.desc.length > 70 && '...'}</p>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span className={s.otxTime}>{item.time}</span>
                                        <span style={{color: '#EA003D', marginRight: '20px'}}>{item.like}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div style={{marginTop: '50px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                        <p className={s.psFilm2} style={{display: 'flex'}}>Рецензии
                            <span className={s.dopNum}>2</span></p>
                    </div>
                    <button className={s.buttonOtsiv}>Написать рецензию</button>
                </div>
                <div className={s.divRezMain}>
                    <div className={s.boxRez}>
                        <p className={s.rezName}>Добрый, позитивный фильм со смыслом</p>
                        <p className={s.rezDesc}>Последнее время почему-то принято ругать отечественное кино. Но! Если
                            присмотреться есть очень достойные картины! На мой взгляд, эта картина в числе достойных.
                            В ней точно есть на что посмотреть и, даже, чему поучиться и о чем задуматься взрослым
                            "дядям" и</p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span className={s.otxTime}>27 января 2023</span>
                            <span style={{color: '#EA003D', marginRight: '20px'}}>1</span>
                        </div>
                    </div>
                    <div className={s.boxRez}>
                        <p className={s.rezName}>Все лучшее - в трейлере</p>
                        <p className={s.rezDesc}>Последнее время почему-то принято ругать отечественное кино. Но! Если
                            присмотреться есть очень достойные картины! На мой взгляд, эта картина в числе достойных.
                            В ней точно есть на что посмотреть и, даже, чему поучиться и о чем задуматься взрослым
                            "дядям" и</p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span className={s.otxTime}>27 января 2023</span>
                            <span style={{color: '#EA003D', marginRight: '20px'}}>-1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className={s.psFilm2}>Знаете ли вы, что</p>
                <ul className={s.boxLi}>
                    {
                        info.map((item, index) => {
                            return <li className={s.liInfo}>
                                {item.info}
                            </li>
                        })
                    }
                </ul>
                {!descAdd1 && <p onClick={addDesc1} className={s.pDescDop}>Читать дальше</p>}
                {descAdd1 && <p onClick={minDesc1} className={s.pDescDop}>Читать меньше</p>}
            </div>
        </main>
    )
}

export default Films