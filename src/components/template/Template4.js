import React, { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";
import { useParams, useHistory } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import { Sidebar } from "../header/Sidebar";
import { Header } from "../header/Header";

export const Template4 = () => {
  const [userState, userDispatch] = useContext(UserContext);
  const { unique } = useParams();
  const history = useHistory();

  const {
    data: template4Data,
    error: template4Error,
    loading: template4Loading,
  } = useQuery(["template4Cache", unique], async () => {
    return API.get(`/link/${unique}`);
  });
  const response = template4Data?.data?.data?.link;

  return (
    <div>
      {template4Loading ? (
        <Spinner animation="border" role="status" variant="warning">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center width-100"
          style={{ minHeight: "100vh", backgroundColor: "#e5e5e5" }}
        >
          <div
            style={{
              width: "300px",
              padding: "10px",
              backgroundColor: "white",
            }}
            className=""
          >
            <div className="d-flex justify-content-center">
              <img
                src={response?.image}
                style={{ width: "auto", height: "200px" }}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
              <h4 style={{ margin: "0px" }}>{response?.title}</h4>
            </div>

            <div className="d-flex justify-content-center">
              <h5 style={{ color: "#766c6c", textAlign: "center" }}>
                {response?.description}
              </h5>
            </div>
            <div className="mt-3 d-flex justify-content-center">
              {response?.sublink.map(
                ({ subtitle, subimage, suburl }, index) => (
                  <img
                    src={subimage}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                      margin: "0px 5px",
                    }}
                    onClick={() => window.open(`http://${suburl}`)}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
