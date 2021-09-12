import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Teams from "./components/Teams/Teams";
import PokemonContext from "./components/contexts/PokemonContext";
import TeamsCreated from "./components/TeamsCreated/TeamsCreated";

export default function App() {
  const [myTeam, setMyTeam] = useState([]);

  return (
    <PokemonContext.Provider value={{ myTeam, setMyTeam }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Teams />
          </Route>
          <Route path="/create" exact>
            <TeamsCreated />
          </Route>
        </Switch>
      </Router>
    </PokemonContext.Provider>
  );
}
