import "./App.css";
import Watch from "./pages/Watch/Watch";
import Search from "./pages/Search/Search";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Details from "./pages/Details/Details";

const  App = (props) =>{
  // app uses React router dom
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/search" component={Search} />
          <Route path="/details" component={Details} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
