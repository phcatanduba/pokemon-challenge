import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Teams from "./components/Teams";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Teams />
        </Route>
        <Route path="/create">
          <p>Ainda nao implementado</p>
        </Route>
      </Switch>
    </Router>
  );
}
