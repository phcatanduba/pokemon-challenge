import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Teams from "./components/Teams/Teams";
import PokemonContext from "./components/contexts/PokemonContext";
import { useState } from "react";

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
            <p>Ainda nao implementado</p>
          </Route>
        </Switch>
      </Router>
    </PokemonContext.Provider>
  );
}
