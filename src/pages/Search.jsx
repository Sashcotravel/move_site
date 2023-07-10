import s from "./Search.module.css";
import React, {useState} from "react";
import {withFilm} from "../data";

const Search = () => {
    const [descAdd, setDescAdd] = useState(false)

    const addDesc = () => {
        document.getElementById('desc').style.overflowY = 'inherit'
        document.getElementById('desc').style.height = 'auto'
        setDescAdd(true)
    }

    const minDesc = () => {
        document.getElementById('desc').style.overflowY = 'clip'
        document.getElementById('desc').style.height = '48px'
        setDescAdd(false)
    }

    return (
        <main className={s.mainWatch}>
            <div className={s.divTitle}>
                <h1 className={s.h1}>Фильмы смотреть онлайн</h1>
                <p id='desc' className={s.p1}>Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках
                    чего-нибудь интересного? Стоит задержаться на ivi – фильмов, которые собраны у нас, вам
                    хватит надолго. Коллекция постоянно пополняется как новыми фильмами, так и признанными
                    шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных</p>
                {!descAdd && <span className={s.pDescDop} onClick={addDesc}>Развернуть</span>}
                {descAdd && <span className={s.pDescDop} onClick={minDesc}>Меньше</span>}
            </div>
            <div className={s.divSearchControl}>
                <div className={s.boxinfo}>
                    <div className={s.divControlBox}>Жанры</div>
                    <div className={s.divControlBox}>Поджанры</div>
                    <div className={s.divControlBox}>Страны</div>
                    <div className={s.divControlBox}>Годы</div>
                    <div className={s.divControlBox}>Рейтинг Bull</div>
                </div>
                <div className={s.boxinfo2}>
                    <div className={s.divButton}>По подписке</div>
                    <div className={s.divButton}>На языке оригинала</div>
                    <div className={s.divButton}>С субтитрами</div>
                    <div className={s.divButton}>Объёмный звук</div>
                </div>
                <p className={s.sbros}>Сбросить фильтры</p>
            </div>
            <p className={s.psFilm2}>Премьеры фильмов</p>
            <div className={s.boxinfo3}>
                {
                    withFilm.map((item, index) => {
                        return (
                                <div key={index} className={`${index === 6 && s.none} ${s.boxIm}`}>
                                    <img className={s.imgPosterFilm} src={item.img} alt="photo" />
                                    <p className={s.pNameFilmInfo}>{item.name}</p>
                                    <p className={s.pPriceInfo}>Платний</p>
                                </div>
                        )
                    })
                }
            </div>
            <div>
                <p className={s.psFilm2}>Жанры</p>
                <div className={s.boxinfo2}>
                    <div className={s.boxZhanr}>
                        <p className={s.pNameFilmInfo}>Драмы</p>
                    </div>
                    <div className={s.boxZhanr}>
                        <p className={s.pNameFilmInfo}>Комедии</p>
                    </div>
                    <div className={s.boxZhanr}>
                        <p className={s.pNameFilmInfo}>Боевики</p>
                    </div>
                    <div className={s.boxZhanr}>
                        <p className={s.pNameFilmInfo}>Триллеры</p>
                    </div>
                    <div className={s.boxZhanr}>
                        <p className={s.pNameFilmInfo}>Приключения</p>
                    </div>
                    <div className={s.boxZhanr}>
                        <p className={s.pNameFilmInfo}>Зарубежные</p>
                    </div>
                    <div className={s.boxZhanr}>
                        <p className={s.pNameFilmInfo}>Мелодрамы</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={s.psFilm2}>Лучшие фильмы</p>
                <div className={s.boxinfo3}>
                    {
                        withFilm.map((item, index) => {
                            return (
                                <div key={index} className={`${index === 6 && s.none} ${s.boxIm}`}>
                                    <img className={s.imgPosterFilm} src={item.img} alt="photo" />
                                    <p className={s.pNameFilmInfo}>{item.name}</p>
                                    <p className={s.pPriceInfo} style={{color: '#A5A1B2'}}>Бесплатно</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <p className={s.psFilm2}>Выбор Иви</p>
                <div className={s.boxinfo3}>
                    {
                        withFilm.map((item, index) => {
                            let color = '#A5A1B2';
                            return (
                                <div key={index} className={`${index === 6 && s.none} ${s.boxIm}`}>
                                    <span className={s.spanIvi}>сериал Иви</span>
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
                <p className={s.psFilm2}>Фильмы в 4K UHD</p>
                <div className={s.boxinfo3}>
                    {
                        withFilm.map((item, index) => {
                            let color = '#A5A1B2';
                            return (
                                <div key={index} className={`${index === 6 && s.none} ${s.boxIm}`}>
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
        </main>
    )
}

export default Search