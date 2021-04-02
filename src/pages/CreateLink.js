import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { Spinner } from "react-bootstrap";

import { UserContext } from "../context/userContext";

import { useParams } from "react-router-dom";

import { API, setAuthToken } from "../config/api";
import { Sidebar } from "../components/header/Sidebar";

export const CreateLink = () => {
  const [userState, userDispatch] = useContext(UserContext);

  const [form, setForm] = useState({
    title: "",
    description: "",
    links: [
      {
        subtitle: "",
        suburl: "",
        subimage: "",
      },
    ],
  });

  const { title, description, links } = form;
  const { subtitle, suburl, subimage } = links;

  const createMainLink = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const fromBody = {
        title: title,
        description: description,
        links: links.map((data) => ({
          subtitle: data.subtitle,
          suburl: data.suburl,
          subimage: data.subimage,
        })),
      };

      const body = JSON.stringify(fromBody);

      console.log(fromBody);

      await API.post("/link", fromBody, config);
    } catch (error) {
      console.log(error);
      alert("Oopss, error occured: ", error);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    createMainLink.mutate();

    setForm({
      title: "",
      description: "",
      links: [
        {
          subtitle: "",
          suburl: "",
          subimage: "",
        },
      ],
    });
  };

  const handleChange = (event) => {
    const tempForm = { ...form };

    tempForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setForm(tempForm);
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="d-flex flex-column width-100 bg-e5">
        <div
          style={{ backgroundColor: "white", height: "60px" }}
          className="d-flex align-items-center pl-3"
        >
          <h4 style={{ fontSize: "22px", margin: "0px" }}>Template</h4>
        </div>
        <div className="pb-5 ">
          <div className="d-flex justify-content-between pl-3 pr-5 pt-4">
            <div>
              <h4 style={{ fontSize: "20px", margin: "0px" }}>Create Link</h4>
            </div>

            <button
              className="btn btn-lg login-btn"
              style={{ width: "13%", height: "40px", borderRadius: "10px" }}
            >
              <h5
                style={{ margin: "0px", fontSize: "20px", fontWeight: "400" }}
                className="justify-content-center align-items-center d-flex"
              >
                Publish Link
              </h5>
            </button>
          </div>
          <div className="d-flex mt-3">
            <div>
              <img src="./img/template1.png" />
            </div>
            <div>aaaaaaaaaaaaaaaaaa</div>
          </div>
        </div>
      </div>

      {/* <div style={{ backgroundColor: "#e5e5e5" }} className="pb-5 width-100">
        <div
          style={{ backgroundColor: "white", height: "60px" }}
          className="d-flex align-items-center pl-3"
        >
          <h4 style={{ fontSize: "22px", margin: "0px" }}>Template</h4>
        </div>

        <div style={{ margin: "0 10%" }} className="pt-5">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="d-flex flex-column form-group">
              <label>Your Link-Group Title:</label>
              <input
                className="form-control"
                value={title}
                name="title"
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="d-flex flex-column form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                value={description}
                name="description"
                type="text"
                onChange={handleChange}
              />
            </div>

            <div style={{ margin: "0 10%" }} className="pt-5">
              First Link:
              <div className="d-flex flex-column form-group">
                <label>Link Name</label>
                <input
                  className="form-control"
                  value={subtitle}
                  name="subtitle"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column form-group">
                <label>Link Url</label>
                <input
                  className="form-control"
                  value={suburl}
                  name="suburl"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column form-group">
                <label>Link Image</label>
                <input
                  className="form-control"
                  value={subimage}
                  name="subimage"
                  type="file"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={{ margin: "0 10%" }} className="pt-5">
              Second Link:
              <div className="d-flex flex-column form-group">
                <label>Link Name</label>
                <input
                  className="form-control"
                  value={links[1].subtitle}
                  name="subtitle"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column form-group">
                <label>Link Url</label>
                <input
                  className="form-control"
                  value={links[1].suburl}
                  name="suburl"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column form-group">
                <label>Link Image</label>
                <input
                  className="form-control"
                  value={links[1].subimage}
                  name="subimage"
                  type="file"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-inline d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="btn btn-lg "
                style={{ backgroundColor: "#ff7700" }}
              >
                Make Link Group
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
};
