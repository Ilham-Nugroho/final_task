import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { Spinner } from "react-bootstrap";

import { UserContext } from "../context/userContext";

import { useParams } from "react-router-dom";

import { API, setAuthToken } from "../config/api";
import { Sidebar } from "../components/header/Sidebar";
import { Header } from "../components/header/Header";
import { Template4 } from "../components/template/Template4";
import { Template1 } from "../components/template/Template1";
import { Template2 } from "../components/template/Template2";
import { Template3 } from "../components/template/Template3";

export const UniqueLink = () => {
  const [userState, userDispatch] = useContext(UserContext);
  const { unique } = useParams();
  const { temp } = useParams();

  return (
    <div>
      {/* {uniqueLoading ? (
        <Spinner animation="border" role="status" variant="warning">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : ( */}
      <div className={userState.isLogin ? "d-flex" : ""}>
        {userState.isLogin ? (
          <div>
            <Sidebar />
          </div>
        ) : (
          <Header />
        )}

        <div className="width-100">
          {temp == 4 ? (
            <Template4 />
          ) : temp == 2 ? (
            <Template2 />
          ) : temp == 3 ? (
            <Template3 />
          ) : (
            <Template1 />
          )}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};
