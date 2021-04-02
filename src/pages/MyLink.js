import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import { Spinner } from "react-bootstrap";

import { UserContext } from "../context/userContext";

import { API, setAuthToken } from "../config/api";

export const MyLink = () => {
  const [userState, userDispatch] = useContext(UserContext);
  const history = useHistory();

  const {
    data: mylinkData,
    error: mylinkError,
    loading: mylinkLoading,
  } = useQuery("productCache", async () => {
    return API.get("/my-link");
  });

  const handleClick = async (link) => {
    history.push("/link/" + link);
  };

  return (
    <div className="">
      <div>
        {mylinkLoading ? (
          <Spinner animation="border" role="status" variant="warning">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          mylinkData?.data?.data?.link?.map((data) => (
            <div
              style={{ border: "1px solid", margin: "0 20%" }}
              className="d-flex flex-column justify-content-center align-items-center mt-4"
              onClick={() => handleClick(data?.uniquelink)}
            >
              <div>Title: {data?.title}</div>
              <div>Description: {data?.description}</div>
              <div>Unique Link: {data?.uniquelink}</div>
              <div>
                {data?.sublink.map((data) => (
                  <div className="d-flex justify-content-center align-items-center">
                    {data.subtitle}: {data.suburl}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
