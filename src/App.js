import './App.css';
import Watch from './pages/Watch/Watch';
import Search from './pages/Search/Search';
import Main from './pages/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
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
