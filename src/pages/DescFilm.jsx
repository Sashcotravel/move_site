import React, {useState} from 'react';
import s from './DescFilm.module.css'
import Trailer from "./desc/Trailer";
import Creater from "./desc/Creater";
import Descr from "./desc/Descr";
import Reviews from "./desc/Reviews";


const DescFilm = () => {

    const [currentPage, setCurrentPage] = useState({
        sos: true, ods: false, res: false, tre: false
    })

    const styleBorder = { borderBottom: '3px solid #EA003D' }

    const setPage = (e) => {
        if(e.target.id === 'sos'){
            setCurrentPage((prev) => { return {...prev, sos: true,
                ods: false, res: false, tre: false} })
        }
        if(e.target.id === 'ods'){
            setCurrentPage((prev) => { return {...prev, ods: true,
                sos: false, res: false, tre: false} })
        }
        if(e.target.id === 'res'){
            setCurrentPage((prev) => { return {...prev, res: true,
                sos: false, ods: false, tre: false} })
        }
        if(e.target.id === 'tre'){
            setCurrentPage((prev) => { return {...prev, tre: true,
                sos: false, ods: false, res: false} })
        }
    }

    return (
        <main className={s.mainDiv}>
            <div className={s.divGrid}>
                <p className={s.pFilm}> К фильму</p>
                <div className={s.divImg+' '+s.displayNone}>
                    <img src='https://upload.wikimedia.org/wikipedia/ru/8/89/%D0%A1%D0%B0%D0%BC%D0%BE%D0%BB%D1%91%D1%82_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2023%29.png'
                         alt='afisha' className={s.imgPhoto} />
                    <div className={s.divInfo}>
                        <p className={s.pOc}>7,<span>4</span> шось не ясне</p>
                        <p className={s.pName}>2022, USE, Комедии</p>
                        <p className={s.pNameTime}> 98 минут</p>
                    </div>
                </div>
                <div className={s.divDesc}>
                    <h1 className={s.h1}>Трейлеры к фильму Любовники смотреть онлайн</h1>
                    <div className={s.divTouch} onClick={setPage}>
                        <span className={s.spanTouch} id='sos'
                        style={currentPage.sos === true ? styleBorder : undefined}
                            >Создатели</span>
                        <span className={s.spanTouch} id='ods'
                              style={currentPage.ods === true ? styleBorder : undefined}
                        >Отзывы <span className={s.spanX2}>24</span></span>
                        <span className={s.spanTouch} id='res'
                        style={currentPage.res === true ? styleBorder : undefined}
                        >Рецензии <span className={s.spanX2}>2</span></span>
                        <span className={s.spanTouch} id='tre'
                        style={currentPage.tre === true ? styleBorder : undefined}
                        >Трейлеры <span className={s.spanX2}>1</span></span>
                    </div>
                    {currentPage.tre && <Trailer/>}
                    {currentPage.sos && <Creater />}
                    {currentPage.ods && <Descr />}
                    {currentPage.res && <Reviews />}
                </div>
                <div className={s.divImg+' '+s.displayBlock}>
                    <img src='https://upload.wikimedia.org/wikipedia/ru/8/89/%D0%A1%D0%B0%D0%BC%D0%BE%D0%BB%D1%91%D1%82_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2023%29.png'
                         alt='afisha' className={s.imgPhoto} />
                    <div className={s.divInfo}>
                        <p className={s.pOc}>7,<span>4</span> шось не ясне</p>
                        <p className={s.pName}>2022, USE, Комедии</p>
                        <p className={s.pNameTime}> 98 минут</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DescFilm;