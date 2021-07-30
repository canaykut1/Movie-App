import './App.css';
import Watch from './pages/Watch/Watch';
import Search from './pages/Search/Search';
import Main from './pages/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header/Header';

function App() {
  
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/watch">
          <Watch />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
