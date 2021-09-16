import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./components/views/Homepage";
import News from "./components/views/News";
import SignIn from "./components/views/SignIn";
import Index from "./components/views/SignUp";
import NewsPage from "./components/views/NewsPage";
import axios from "axios";
import {useState, useEffect} from "react";
import Layout from "./components/Layout";
import Request from "./components/views/Request";

function App() {

    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios("https://61407fe04a700c0017b0cd4e.mockapi.io/news")
            .then(({data}) => {
                setNews(data)
                setIsLoading(false)
            })
    }, [])

  return (
    <Router>
      <Switch>
          <Layout>
              <Route exact path="/" ><Homepage /></Route>
              <div className="container">
                  <Route path="/request"><Request /></Route>
                  <Route exact path="/news" ><News news={news} loading={isLoading} /></Route>
                  <Route path="/news/:id" ><NewsPage loading={isLoading} /></Route>
                  <Route path="/signin" ><SignIn /></Route>
                  <Route path="/signup" ><Index /></Route>
              </div>
          </Layout>
      </Switch>
    </Router>
  );
}

export default App;
