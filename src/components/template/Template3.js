import React, { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";
import { useParams } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import { Sidebar } from "../header/Sidebar";

export const Template3 = () => {
  const { unique } = useParams();
  const {
    data: template3Data,
    error: template3Error,
    loading: template3Loading,
  } = useQuery(["template3Cache", unique], async () => {
    return API.get(`/link/${unique}`);
  });
  const response = template3Data?.data?.data?.link;

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#e5e5e5" }}
    >
      {template3Loading ? (
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
            <img
              src={response?.image}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
            <h4 style={{ margin: "0px" }}>{response?.title}</h4>
          </div>

          <div className="d-flex justify-content-center ">
            <h5
              style={{
                color: "#766c6c",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              {response?.description}
            </h5>
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
