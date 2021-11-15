import {NavLink} from "react-router-dom";

const Homepage = () => {
    return (
        <div className="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">Главные <br /> Новости</h1>
                    <p className="hero__desc">Если вам интересно что произошло в мире за последнее время то, <br /> вы попали на нужный сайт.</p>
                    <NavLink to="/news" className="btn">Перейти к новостям</NavLink>
                </div>
            </div>
        </div>
)
}

export default Homepage