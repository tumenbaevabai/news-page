import axios from "axios";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from "./components/views/Homepage";
import News from "./components/views/News";
import SignIn from "./components/views/SignIn";
import SignUp from "./components/views/SignUp/SignUp";
import NotFound from "./components/views/NotFound";

function App() {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios("https://61407fe04a700c0017b0cd4e.mockapi.io/news")
            .then(({data}) => setNews(data))
    }, [])

  return (
    <Router>
      <Switch>
          <Route exact path="/" ><Homepage /></Route>
          <Route path="/news" ><News news={news} /></Route>
          <Route path="/signin" ><SignIn /></Route>
          <Route path="/signup" ><SignUp /></Route>
          <Route path="*" ><NotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;
