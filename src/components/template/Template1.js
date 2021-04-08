import React, { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";
import { useParams } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import { Sidebar } from "../header/Sidebar";

export const Template1 = () => {
  const { unique } = useParams();
  const {
    data: template1Data,
    error: template1Error,
    loading: template1Loading,
  } = useQuery(["template1Cache", unique], async () => {
    return API.get(`/link/${unique}`);
  });
  const response = template1Data?.data?.data?.link;
  console.log(template1Data?.data?.data?.link);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#e5e5e5" }}
    >
      {template1Loading ? (
        <Spinner animation="border" role="status" variant="warning">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div
          style={{
            width: "500px",

            padding: "10px",
          }}
          className=""
        >
          <div className="d-flex justify-content-center">
            <img
              src={response?.image}
              style={{ width: "80px", height: "80px", borderRadius: "100%" }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <h4>{response?.title}</h4>
          </div>

          <div className="d-flex justify-content-center">
            <h5 style={{ color: "#766c6c" }}>{response?.description}</h5>
          </div>
          <div>
            {response?.sublink?.map(({ subtitle, subimage, suburl }, index) => (
              <div key={index}>
                <div
                  className="d-flex justify-content-center"
                  style={{
                    backgroundColor: "black",
                    marginTop: "10px",
                    padding: "5px",
                  }}
                >
                  <img
                    src={subimage}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                    }}
                  />
                  <div className="d-flex justify-content-center width-100 align-items-center">
                    <h5
                      style={{
                        margin: "0px",
                        color: "white",
                        position: "relative",
                        right: "15px",
                      }}
                    >
                      {subtitle}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
