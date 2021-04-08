import React, { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";
import { useParams } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import { Sidebar } from "../header/Sidebar";

export const Template2 = () => {
  const { unique } = useParams();
  const {
    data: template2Data,
    error: template2Error,
    loading: template2Loading,
  } = useQuery(["template2Cache", unique], async () => {
    return API.get(`/link/${unique}`);
  });
  const response = template2Data?.data?.data?.link;
  console.log(template2Data?.data?.data?.link);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#e5e5e5" }}
    >
      {template2Loading ? (
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
            <h5 style={{ color: "#766c6c", textAlign: "center" }}>
              {response?.description}
            </h5>
          </div>
          <div>
            {response?.sublink.map(({ subtitle, subimage, suburl }, index) => (
              <div key={index}>
                <div
                  className="d-flex justify-content-center"
                  style={{
                    backgroundColor: "white",
                    marginTop: "10px",
                    padding: "5px",
                    borderRadius: "50px",
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
                        color: "black",
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
