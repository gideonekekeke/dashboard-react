import logo from "./logo.svg";
import "./App.css";

import MaterialDash from "../src/Component/MaterialDash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Component/View/Form";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dashboard" component={MaterialDash} />
          <Route path="/upload" component={Form} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
