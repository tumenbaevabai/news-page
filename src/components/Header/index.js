import {Link, NavLink} from "react-router-dom";
import "./style.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/" className="logo">Your Logo</Link>
                    <nav className="nav">
                        <NavLink to="/" className="nav__link">Главная</NavLink>
                        <NavLink to="/news" className="nav__link">Новости</NavLink>
                        <NavLink to="/signin" className="nav__link">Войти</NavLink>
                        <NavLink to="/signup" className="nav__link">Регистрация</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header