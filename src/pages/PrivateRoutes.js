import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(UserContext);
  const { loading } = state;

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <div
            style={{ height: "100vh", width: "100vw" }}
            className="d-flex align-items-center justify-content-center"
          >
            <Spinner animation="border" role="status" variant="warning">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : state.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="" />
        )
      }
    />
  );
};

export default PrivateRoute;
