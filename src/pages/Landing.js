import React, { useContext } from "react";

import { Sidebar } from "../components/header/Sidebar";
import { Template } from "./Template";
import { LandingOut } from "../components/home/LandingOut";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router";

export const Landing = () => {
  const history = useHistory();
  const [userState, userDispatch] = useContext(UserContext);
  return (
    <div>
      {userState.isLogin ? (
        history.push("/template")
      ) : (
        <div>
          <LandingOut />
        </div>
      )}
    </div>
  );
};
