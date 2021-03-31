import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { UserContextProvider, UserContext } from "./context/userContext";

import { Landing } from "./pages/Landing";
import { Header } from "./components/header/Header";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
