import GlobalStyle from "./style/GlobalStyle";

// import Home from './Pages/Home'
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Why from "./Pages/Why";
import Calculator from "./Pages/Calculator";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/why">
          <Why />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
