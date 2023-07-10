import s from './Header.module.css'
import {Link, useLocation} from "react-router-dom";
import { useEffect } from "react";


const Header = () => {

    const styleBorder = { color: 'red' }
    const location = useLocation();

    useEffect(() => {
        const linksContainer = document.getElementById('ul');

        linksContainer.addEventListener('click', (e) => {
            if (e.target.matches('.menu__item')) {
                e.preventDefault();
                closeSideMenu();

                // change the location
                // window.location.href = e.target.to;
            }
        });

    }, [location]);

    function  closeSideMenu() {
        const sideMenuToggle = document.getElementById(s['menu__toggle']);
        sideMenuToggle.click();
    }

    return (<>
        <header className={s.headerDiv}>
            <div className={s.divSpan}>
                <Link to='/my-ivi' style={window.location.pathname === '/my-ivi' ? styleBorder : undefined}
                      className={s.span}>Мой Иви</Link>
                <Link to='/why-new' style={window.location.pathname === '/why-new' ? styleBorder : undefined}
                      className={s.span}>Что нового</Link>
                <Link to='/films' style={window.location.pathname === '/films' ? styleBorder : undefined}
                      className={s.span}>Фильмы</Link>
                <Link to='/serial' style={window.location.pathname === '/serial' ? styleBorder : undefined}
                      className={s.span}>Сериалы</Link>
                <Link to='/cartoon' style={window.location.pathname === '/cartoon' ? styleBorder : undefined}
                      className={s.span}>Мультфильмы</Link>
                <Link to='/search' style={window.location.pathname === '/search' ? styleBorder : undefined}
                      className={s.span}>Поиск</Link>
            </div>
        </header>
        <header className={s.hamburger_menu}>
            <input id={s.menu__toggle} type="checkbox"/>
            <label className={s.menu__btn} htmlFor={s.menu__toggle}>
                <span></span>
            </label>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87DUGqsM5X-g4YLw-D925A3bZrm1yszxDkJHRJsbZ9zP5odJd4VTu6NVwgsX1iATWns8&usqp=CAU'
                 className={s.imgLogo} alt='logo' />
            <ul className={s.menu__box} id='ul'>
                <li><Link className={s.menu__item} to='/my-ivi' onClick={closeSideMenu}
                          style={window.location.pathname === '/my-ivi' ? styleBorder : undefined}>Мой Иви</Link></li>
                <li><Link className={s.menu__item} to='/why-new' onClick={closeSideMenu}
                          style={window.location.pathname === '/why-new' ? styleBorder : undefined}>Что нового</Link></li>
                <li><Link className={s.menu__item} to='/films' onClick={closeSideMenu}
                          style={window.location.pathname === '/films' ? styleBorder : undefined}>Фильмы</Link></li>
                <li><Link className={s.menu__item} to='/serial' onClick={closeSideMenu}
                          style={window.location.pathname === '/serial' ? styleBorder : undefined}>Сериалы</Link></li>
                <li><Link className={s.menu__item} to='/cartoon' onClick={closeSideMenu}
                          style={window.location.pathname === '/cartoon' ? styleBorder : undefined}>Мультфильмы</Link></li>
                <li><Link className={s.menu__item} to='/search' onClick={closeSideMenu}
                          style={window.location.pathname === '/search' ? styleBorder : undefined}>Поиск</Link></li>
            </ul>
        </header>
    </>)
}

export default Header