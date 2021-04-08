import React, { useState, useContext, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { useHistory } from "react-router";
import { useParams, Link } from "react-router-dom";

import { Spinner } from "react-bootstrap";

import { UserContext } from "../context/userContext";

import { API, setAuthToken } from "../config/api";
import { Sidebar } from "../components/header/Sidebar";
import { Header } from "../components/header/Header";

export const MyLink = () => {
  const [userState, userDispatch] = useContext(UserContext);
  const history = useHistory();

  const {
    data: mylinkData,
    error: mylinkError,
    loading: mylinkLoading,
    refetch,
  } = useQuery("productCache", async () => {
    return API.get("/my-link");
  });

  console.log(mylinkData?.data?.data?.link);

  const handleClick = async (temp, link) => {
    history.push(temp + "/link/" + link);
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="">
      <div>
        {mylinkLoading ? (
          <Spinner animation="border" role="status" variant="warning">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <div className="d-flex">
            <div>
              <Sidebar />
            </div>

            <div className="width-100 bg-e5">
              <div>
                <div
                  style={{ backgroundColor: "white", height: "60px" }}
                  className="d-flex align-items-center pl-3"
                >
                  <h4 style={{ fontSize: "22px", margin: "0px" }}>My Links</h4>
                </div>
                <div
                  style={{ height: "60px" }}
                  className="d-flex align-items-center pl-3"
                >
                  <h4 style={{ fontSize: "22px", margin: "0px" }}>All Links</h4>
                </div>

                <div style={{ maxHeight: "80vh", overflow: "scroll" }}>
                  {mylinkData?.data?.data?.link?.map((data, index) => (
                    <div
                      key={index}
                      style={{ margin: "0 20px" }}
                      className="d-flex align-items-center justify-content-between mt-4"
                    >
                      <div className="d-flex  align-items-center justify-content-start">
                        <img
                          src={data?.image}
                          style={{ width: "70px", height: "70px" }}
                        />
                        <div className="ml-3">
                          <h5>{data?.title}</h5>
                          <h6 style={{ color: "#766c6c" }}>
                            Unique link: {data?.uniquelink}
                          </h6>
                        </div>
                      </div>
                      <div className="">
                        <h6 className="d-flex justify-content-center">
                          {data?.views}
                        </h6>
                        <h6>Views</h6>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-around"
                        style={{ width: "200px" }}
                      >
                        <img
                          src="./img/View.png"
                          onClick={() =>
                            handleClick(data?.template, data?.uniquelink)
                          }
                          style={{ cursor: "pointer" }}
                        />
                        <img
                          src="./img/Edit.png"
                          onClick={() =>
                            history.push(
                              `/link/edit/${data?.template}/${data?.uniquelink}`
                            )
                          }
                        />
                        <img src="./img/Delete.png" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
