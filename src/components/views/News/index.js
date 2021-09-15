import {Link} from "react-router-dom";
import Spinner from "../../Spinner";

const News = ({news, loading}) => {


    if (loading) {
        return <Spinner />
    }
    return (
        <div className="row">
            {
                news.map(item => (
                    <div className="col-3" key={item.id}>
                        <Link key={item.id} to={`/news/${item.id}`}>
                            <div className="news__box">
                                <div className="news__img">
                                    <img src={item.image} alt=""/>
                                </div>
                                <h3 className="news__title">{item.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default News