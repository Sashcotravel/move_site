import {Link} from "react-router-dom";
import s from "./Header.module.css";
import twitter from '../image/Vector.svg'
import phone from '../image/Vector (1).svg'
import linkedin from '../image/Vector (2).svg'
import telegram from '../image/Vector (3).svg'


const Footer = () => {



    return (
        <footer className={s.footer}>
            <div className={s.div1}>
                <div className={s.divAbot}>
                    <p className={s.pBold}>О нас</p>
                    <p className={s.p}>О компании</p>
                    <p className={s.p}>Вакансии</p>
                    <p className={s.p}>Программа бета-тестирования</p>
                    <p className={s.p}>Информация для партнёров</p>
                    <p className={s.p}>Размещение рекламы</p>
                    <p className={s.p}>Пользовательское соглашение</p>
                    <p className={s.p}>Политика конфиденциальности</p>
                    <p className={s.p}>Комплаенс</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <p className={s.pBold}>Разделы</p>
                    <Link to='/my-ivi'  className={s.p}>Мой Bull</Link>
                    <Link to='/why-new'  className={s.p}>Что нового</Link>
                    <Link to='/films'  className={s.p}>Фильмы</Link>
                    <Link to='/serial'  className={s.p}>Сериалы</Link>
                    <Link to='/cartoon'  className={s.p}>Мультфильмы</Link>
                </div>
            </div>
            <div style={{display: 'flex', marginTop: '30px'}}>
                <div className={s.divSVG}><img src={twitter} alt="twitter" /></div>
                <div className={s.divSVG}><img src={phone} alt="phone" /></div>
                <div className={s.divSVG}><img src={linkedin} alt="linkedin" /></div>
                <div className={s.divSVG}><img src={telegram} alt="telegram" /></div>
            </div>
        </footer>
    )
}

export default Footer