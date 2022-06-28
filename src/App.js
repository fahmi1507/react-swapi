import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'
import DetailsStarship from "./views/DetailsStarship/DetailsStarship";
import Actors from "./views/Actors/Actors";
import DetailsActor from "./views/DetailsActor/DetailsActor";
import './App.css';


function App () {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/starships">
                <Starships />
            </Route>
            <Route path="/starships/:id">
                <DetailsStarship />
            </Route>
            <Route exact path="/actors">
                <Actors />
            </Route>
            <Route path="/actors/:id">
                <DetailsActor />
            </Route>
          </Switch>
        </main>
      </ Router>
    </div>
  );
}

export default App;
