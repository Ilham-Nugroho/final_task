import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { UserContextProvider, UserContext } from "./context/userContext";
import { setAuthToken, API } from "./config/api";

import { Header } from "./components/header/Header";

import PrivateRoute from "./pages/PrivateRoutes";
import { Landing } from "./pages/Landing";
import { Template } from "./pages/Template";
import { CreateLink } from "./pages/CreateLink";
import { MyLink } from "./pages/MyLink";
import { UniqueLink } from "./pages/UniqueLink";
import { Sidebar } from "./components/header/Sidebar";
import { FriendList } from "./pages/FormikTest";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const [state, dispatch] = useContext(UserContext);
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      console.log(response.status);

      if (response.status === 401) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "LOGIN_SUCCESS",
        payload,
        //payload diperoleh dari Login
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: "AUTH_ERROR",
      // });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 7200 * 1000, // 2 hours cache in memory
        staleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/template" component={Template} />
          <PrivateRoute exact path="/link" component={CreateLink} />
          <PrivateRoute exact path="/my-link" component={MyLink} />
          <PrivateRoute exact path="/link/:unique" component={UniqueLink} />
          <PrivateRoute exact path="/friends" component={FriendList} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
