import React, { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";
import { useParams } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import { Sidebar } from "../header/Sidebar";

export const Template4 = () => {
  const { unique } = useParams();
  const {
    data: template4Data,
    error: template4Error,
    loading: template4Loading,
  } = useQuery(["template4Cache", unique], async () => {
    return API.get(`/link/${unique}`);
  });
  const response = template4Data?.data?.data?.link;
  console.log(template4Data?.data?.data?.link);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#e5e5e5" }}
    >
      <div>
        <Sidebar />
      </div>
      {template4Loading ? (
        <Spinner animation="border" role="status" variant="warning">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div
          style={{
            width: "300px",
            padding: "10px",
            backgroundColor: "white",
          }}
          className=""
        >
          <div className="d-flex justify-content-center">
            {/* <img src={response?.image} /> */}
            <img
              // src="../img/instagram.png"
              src={response?.image}
              style={{ width: "auto", height: "200px" }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
            <h4 style={{ margin: "0px" }}>{response?.title}</h4>
          </div>

          <div className="d-flex justify-content-center">
            <h5 style={{ color: "#766c6c" }}>{response?.description}</h5>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            {response?.sublink.map(({ subtitle, subimage, suburl }, index) => (
              <img
                src={subimage}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  margin: "0px 5px",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
