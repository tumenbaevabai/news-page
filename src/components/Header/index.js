import {Link, NavLink} from "react-router-dom";
import "./style.css"
import {useState} from "react";
import axios from "axios";

const Header = () => {

    const [isPost, setIsPost] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({name: "", phone: "", email: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://61407fe04a700c0017b0cd4e.mockapi.io/request", user)
            .then(() => {
                setIsPost(true)
                setTimeout(() => {
                    setIsOpen(false)
                    setIsPost(false)
                }, 3000)
            })
    }

    const handleInput = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/" className="logo">Your Logo</Link>
                    <nav className="nav">
                        <NavLink exact to="/" className="nav__link">Главная</NavLink>
                        <NavLink to="/request" className="nav__link">Заявки</NavLink>
                        <NavLink to="/news" className="nav__link">Новости</NavLink>
                        <NavLink to="/signin" className="nav__link">Войти</NavLink>
                        <NavLink to="/signup" className="nav__link">Регистрация</NavLink>
                        <button className="btn__sent" onClick={() => setIsOpen(true)}>Отправить заявку</button>
                    </nav>
                </div>
            </div>
            {
                isOpen &&
                <div className="modal">
                    <div className="modal__wrapper">
                        {
                            isPost ? "Заявка отправлена" :
                                <>
                                    <h3>Заполните заявку</h3>
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="name">Имя</label>
                                        <input required type="text" onChange={handleInput} name="name" id="name" className="form__input"/>
                                        <label htmlFor="phone">Телефон</label>
                                        <input required type="text" onChange={handleInput} name="phone" id="phone" className="form__input"/>
                                        <label htmlFor="email">Почта</label>
                                        <input required type="email" onChange={handleInput} name="email" id="email" className="form__input"/>
                                        <button type="submit" className="form__btn">Отправить</button>
                                    </form>

                                </>
                        }
                        <button className="btn__close" onClick={() => setIsOpen(false)}>×</button>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header