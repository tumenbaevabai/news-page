import {useParams} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";
import Spinner from "../../Spinner";

const NewsPage = ({loading}) => {
    const {id} = useParams()

    const [oneNews, setOneNews] = useState([])

    useEffect(() => {
        axios(`https://61407fe04a700c0017b0cd4e.mockapi.io/news/${id}`)
            .then(({data}) => setOneNews(data))
    }, [id])

    if (loading) {
        return <Spinner/>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="news__item__img">
                        <img src={oneNews.image} alt=""/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="news__item__content">
                        <h2 className="news__item__title">{oneNews.title}</h2>
                        <p className="news__item__desc">{oneNews.description}</p>
                        <p className="news__item__author">Автор: {oneNews.author}</p>
                        <p className="news__item__date">Дата: {oneNews.date}</p>
                    </div>
                </div>
            </div>
            <div className="news__comments">
                <h3 className="news__comments__title">Комментарии</h3>
                <div className="news__comments__item">
                    <div className="news__comments__info">
                        <b className="news__comments__author">Алина</b>
                        <span className="news__comments__date">12.03.2021</span>
                    </div>
                    <div className="news__comments__content">
                        <p className="news__comments__message">Ну хоть что-то доброе!</p>
                    </div>
                </div>
                <textarea className="news__comments__textarea" rows="5" placeholder="Комментарий..."></textarea>
                <button className="news__comments__btn">Отправить</button>
            </div>
        </div>
    )
}

export default NewsPage