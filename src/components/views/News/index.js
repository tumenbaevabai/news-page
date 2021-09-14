import Layout from "../../Layout";


const News = (news) => {

    return (
        <Layout >
            <div className="row">
                {
                    news.map(item => (
                        <div className="col-3" key={item.id}>
                            <div className="news__box">
                                <div className="news__img">
                                    <img src={item.image} alt=""/>
                                </div>
                                <h3 className="news__title">{item.title}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export default News