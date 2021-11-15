import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./components/views/Homepage";
import News from "./components/views/News";
import SignIn from "./components/views/SignIn";
import NewsPage from "./components/views/NewsPage";
import axios from "axios";
import {useState, useEffect} from "react";
import Layout from "./components/Layout";
import Request from "./components/views/Request";
import SignUp from "./components/views/SignUp";
import Students from "./components/views/Students";
import NotFound from "./components/views/NotFound";
import StudentPage from "./components/views/StudentPage";

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
                  <Route exact path="/students" ><Students /></Route>
                  <Route path="/students/:id" ><StudentPage /></Route>
                  <Route path="/signin" ><SignIn /></Route>
                  <Route path="/signup" ><SignUp /></Route>
              </div>
          </Layout>
      </Switch>
    </Router>
  );
}

export default App;
