import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { Spinner } from "react-bootstrap";

import { UserContext } from "../context/userContext";

import { useParams } from "react-router-dom";

import { API, setAuthToken } from "../config/api";

export const UniqueLink = () => {
  const [userState, userDispatch] = useContext(UserContext);
  const { unique } = useParams();

  const {
    data: uniqueData,
    error: uniqueError,
    loading: uniqueLoading,
  } = useQuery("productCache", async () => {
    return API.get(`/link/${unique}`);
  });

  return (
    <div>
      {uniqueLoading ? (
        <Spinner animation="border" role="status" variant="warning">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div
          style={{ border: "1px solid", margin: "0 20%" }}
          className="d-flex flex-column justify-content-center align-items-center mt-4"
        >
          <div>Title: {uniqueData?.data?.data?.link.title}</div>
          <div>Description: {uniqueData?.data?.data?.link.description}</div>

          <div>
            <div className="d-flex justify-content-center align-items-center">
              {uniqueData?.data?.data?.link.sublink.subtitle}:{" "}
              {uniqueData?.data?.data?.link.sublink.suburl}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
