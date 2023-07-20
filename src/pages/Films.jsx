import s from "./Films.module.css";
import {arrCast, comments, coolFucts, withFilm} from "../data";
import React, {useEffect, useState} from "react";
import Trailer from "./desc/Trailer";
import {NavLink, useParams} from "react-router-dom";


const Films = () => {

    const { id } = useParams();

    const [allFilm, setAllFilm] = useState([])
    const [filmPod, setFilmPod] = useState([])
    const [cast, setCast] = useState([])
    const [info, setInfo] = useState([])
    const [descAdd, setDescAdd] = useState(false)
    const [descAdd1, setDescAdd1] = useState(false)

    // const filmPod = [
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3OR9JzSEEkBqMY-e3kZGenrMQprMRQmn17tEYI70QsKhCzn5ihYi9rhOtjXgvrbAWo&usqp=CAU",
    //         name: 'Фильмы про настоящую любовь'
    //     },
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3OR9JzSEEkBqMY-e3kZGenrMQprMRQmn17tEYI70QsKhCzn5ihYi9rhOtjXgvrbAWo&usqp=CAU",
    //         name: 'Комедии'
    //     },
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3OR9JzSEEkBqMY-e3kZGenrMQprMRQmn17tEYI70QsKhCzn5ihYi9rhOtjXgvrbAWo&usqp=CAU",
    //         name: 'Российские мелодрамы'
    //     },
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3OR9JzSEEkBqMY-e3kZGenrMQprMRQmn17tEYI70QsKhCzn5ihYi9rhOtjXgvrbAWo&usqp=CAU",
    //         name: 'Российские комедии'
    //     },
    // ]

    useEffect(() => {
        if(!id){
            window.scrollTo(0, 0)
            fetch('https://api.themoviedb.org/3/movie/550?api_key=c53b6f71fde2e1f357e82e86b27ead54')
                .then(response => response.json())
                .then(response => {
                    setFilmPod(response)
                    // console.log(response)
                })
                .catch(err => console.error(err));
        } else {
            window.scrollTo(0, 0)
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c53b6f71fde2e1f357e82e86b27ead54`)
                .then(response => response.json())
                .then(response => {
                    setFilmPod(response)
                    // console.log(response)
                })
                .catch(err => console.error(err));
        }
    }, [id])

    useEffect(() => {
     fetch('https://api.themoviedb.org/3/discover/movie?api_key=53e64f76e8d74581567fa0640ed8dcb0')
            .then(response => response.json())
            .then(response => {
                setAllFilm(response)
                // console.log(response)
            })
            .catch(err => console.error(err));
    }, [])

    // ?api_key=53e64f76e8d74581567fa0640ed8dcb0
    // https://api.themoviedb.org/3/discover/movie?api_key=53e64f76e8d74581567fa0640ed8dcb0 - list movie
    // https://api.themoviedb.org/4/list/1?api_key=53e64f76e8d74581567fa0640ed8dcb0         - list movie

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

    // https://api.themoviedb.org/3/movie/550?api_key=fce40c20320d9b89f1d408dfcc8de393


    return (
        <main className={s.mainWatch}>
            <div className={s.divButTr}>
                <div className={s.videoDiv}>
                    {/*<iframe src="https://www.youtube.com/embed/-e_3Cg9GZFU?autoplay=1&mute=1"*/}
                    {/*        title="YouTube video player" className={s.videoTag} allowFullScreen></iframe>*/}
                    <img src={'https://image.tmdb.org/t/p/original/' + filmPod?.poster_path}
                         alt={filmPod?.original_title} className={s.videoTag} />
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
                    <h1 className={s.h1Title}>Фильм {filmPod.original_title} смотреть онлайн</h1>
                    <div className={s.divTimeFilm}>
                        <span className={s.spanTimeFilm}>{filmPod?.release_date?.slice(0, 4)}</span>
                        <span className={s.spanTimeFilm}>{(filmPod.runtime / 60).toFixed(2).replace('.', ' ч. ')} мин.</span>
                        <span className={s.spanTimeFilm}>{filmPod.adult && '18+'}</span>
                    </div>
                    <div className={s.divTimeFilm}>
                        {
                            filmPod.genres?.map((item, index) => {
                                return <>
                                <span className={s.spanCountryFilm} key={index}>{item.name}</span>
                                    {filmPod.genres.length -1 !== index && <span className={s.spanDot}>·</span>}
                                </>
                            })
                        }
                    </div>
                    <div className={s.divTimeFilm}>
                        <button className={s.spanFullHDFilm}>FullHD</button>
                        <span className={s.spanTimeFilm}>Рус</span>
                        <span className={s.spanTimeFilm}>Рус</span>
                    </div>
                    <div className={s.divTimeFilm+' '+s.divImage}>
                        <div className={s.imgBoxFlex}>
                            <span className={s.spamImgSeven}>{filmPod.popularity?.toString().split('')[0]},{filmPod.popularity?.toString().split('')[1]}</span>
                            <span className={s.textImg}>Рейтинг IMDB</span>
                        </div>
                        {
                            filmPod.production_companies?.map((item, index) => {
                                if(index < 4){
                                    return <div className={s.imgBoxFlex} key={item.id}>
                                        <img className={s.imgFilm} src="https://pbs.twimg.com/media/FXezeTJWIBYsB5X.jpg" alt="photo" />
                                        <span className={s.textImg}>{item.name}</span>
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className={s.divTimeFilm}>
                        <p className={s.pDesc}>{filmPod.overview}</p>
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
                <p className={s.psFilm}>С фильмом «{filmPod.original_title}» смотрят</p>
                <div className={s.divFlex}>
                    {
                        allFilm?.results?.map((item, index) => {
                            if(index < 7){
                                let color = '#A5A1B2';
                                return (
                                    <NavLink to={`/films/${item.id}`} key={index} className={`${index === 6 && s.none} ${s.boxIm}`}>
                                        {index % 2 ? <span className={s.spanIvi}>сериал Иви</span> : undefined}
                                        <img className={s.imgPosterFilm} alt="photo"
                                             src={'https://image.tmdb.org/t/p/original/' + item.poster_path} />
                                        <p className={s.pNameFilmInfo}>{item.original_title}</p>
                                        <p className={s.pPriceInfo} style={item.adult === false ?
                                            {color: color} : undefined}>{item.adult === false ?'Бесплатно' : "Платний"}</p>
                                    </NavLink>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div>
                <p className={s.psFilm2}>Актёры и создатели</p>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                    {
                        filmPod.production_companies?.map((item, index) => {
                            let srcImage = ''
                            if(item.logo_path !== null){
                                srcImage = item.logo_path
                                return (
                                    <div key={index}>
                                        <img className={s.imgCast} src={'https://image.tmdb.org/t/p/original/' + srcImage} alt="photo" />
                                        <p className={s.pNameActors}>{item.name}</p>
                                        <p className={s.pNameWorks}>director</p>
                                    </div>
                                )
                            } else {
                                srcImage = 'data:image/png;base64,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'
                                return (
                                    <div key={index}>
                                        <img className={s.imgCast} src={srcImage} alt="photo" />
                                        <p className={s.pNameActors}>{item.name}</p>
                                        <p className={s.pNameWorks}>director</p>
                                    </div>
                                )
                            }
                        })
                    }

                    {filmPod?.production_companies?.length > 8 && cast.length === 7 && <span className={s.spanImg}
                                                onClick={() => setCast(filmPod.production_companies)}>Ещё</span>}
                    {cast.length !== 7 && <span className={s.spanImg}
                                                onClick={() => setCast(filmPod.production_companies.slice(0, 7))}>Меньше</span>}
                </div>
            </div>
            {filmPod.video !== false && <div>
                <p className={s.psFilm2}>Трейлеры и доп. материалы</p>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                    <Trailer/>
                </div>
            </div>}
            <div>
                <p className={s.psFilm2}>Фильм в подборках</p>
                <div className={s.divFlex}>
                    {
                        allFilm?.results?.map((item, index) => {
                            if(index > 7 && index < 15 ){
                            return (
                                <NavLink to={`/films/${item.id}`} key={index} className={`${index === 14 && s.none} ${s.boxWidth}`}>
                                    <img src={'https://image.tmdb.org/t/p/original/' + item.poster_path}
                                         alt="photo" className={s.imgPosterFilm} />
                                    <p className={s.pT}>{item.original_title}</p>
                                </NavLink>
                            )}
                        })
                    }
                </div>
            </div>
            <div>
                <p className={s.psFilm2} style={{display: 'flex'}}>Трейлеры и доп. материалы
                    <span className={s.dopSpor}>Осторожно, спойлеры</span></p>
                <p className={s.suzhet} id='desc'>{filmPod.overview}</p>
                {!descAdd && <p onClick={addDesc} className={s.pDescDop}>Читать дальше</p>}
                {descAdd && <p onClick={minDesc} className={s.pDescDop}>Читать меньше</p>}
            </div>
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                        <p className={s.psFilm2} style={{display: 'flex'}}>Отзывы
                            <span className={s.dopNum}>24</span></p>
                        <p className={s.pDescDop2}>о фильме «{filmPod.original_title}»</p>
                    </div>
                    <button className={s.buttonOtsiv}>Оставить отзыв</button>
                </div>
                <div className={s.boxComment}>
                    {
                        comments.map((item, index) => {
                            return (
                                <div className={s.otzBox} key={index}>
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
                            return <li className={s.liInfo} key={index}>
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