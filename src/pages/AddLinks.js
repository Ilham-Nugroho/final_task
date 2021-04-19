import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { UserContext } from "../context/userContext";

import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";

import { API, setAuthToken } from "../config/api";
import { Sidebar } from "../components/header/Sidebar";
import { PublishModal } from "../components/modal/PublishModal";

export const AddLinks = () => {
  const { temp } = useParams();
  const [showModal, setShowModal] = useState(false);

  const [userState, userDispatch] = useContext(UserContext);

  const [form, setForm] = useState({
    image: null,
    title: "",
    description: "",
    // views: "",
    template: "",
    links: [],
  });

  const { image, title, description, views, template, links } = form;

  const linksStringify = JSON.stringify(links);

  const [link, setLink] = useState({
    subtitle: "",
    suburl: "",
    subimage: "",
  });

  const { subtitle, suburl, subimage } = link;

  const createMainLink = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const body = new FormData();

      body.append("title", title);
      body.append("description", description);
      body.append("image", image);
      body.append("template", temp);
      body.append("links", linksStringify);
      links.map((data) => {
        body.append("image", data.subimage);
      });

      const responseMain = await API.post("/link", body, config);
      return responseMain;
    } catch (error) {
      console.log(error);
      alert("Oopss, error occured: ", error);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowModal(true);

    createMainLink.mutate();

    // alert("Your Link have been published");

    setForm({
      title: "",
      description: "",
    });
  };

  const handleChange = (event) => {
    const tempForm = { ...form };

    tempForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setForm(tempForm);
  };

  const changeOnLink = (event) => {
    const tempLink = { ...link };
    tempLink[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;

    setLink(tempLink);
  };

  const onClickToAddLinks = () => {
    const addNewLink = {
      ...form,
      links: [...links, link],
    };

    setForm(addNewLink);
    setLink({
      subtitle: "",
      suburl: "",
      subimage: "",
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>

      <div
        // style={{ backgroundColor: "#e5e5e5" }}
        className=" width-100 bg-e5"
      >
        <div
          style={{ backgroundColor: "white", height: "60px" }}
          className="d-flex align-items-center pl-3"
        >
          <h4 style={{ fontSize: "22px", margin: "0px" }}>Template</h4>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3 ml-3">
          <div className="ml-3">
            <h5 style={{ margin: "0px" }}>Create Link</h5>
          </div>
        </div>

        <div className="d-flex width-100 pl-3">
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              maxHeight: "80vh",
              overflow: "scroll",
            }}
            className="mt-3 ml-3 mr-5 pt-4 pl-4 pr-4"
          >
            <div className="justify-content-center">
              <form
                onSubmit={(event) => handleSubmit(event)}
                autoComplete="off"
              >
                <div className="d-inline d-flex justify-content-end">
                  <button type="submit" className="btn btn-md publish-link">
                    Publish Link
                  </button>
                </div>
                <div className=" mb-2 d-flex align-items-center">
                  <div>
                    <img src="/img/preview.png" style={{ width: "90%" }} />
                  </div>

                  <input
                    type="file"
                    style={{ margin: "0px" }}
                    // value={image?.name}
                    name="image"
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex flex-column form-group">
                  <label className="color-7e7a7a">Your Link-Group Title:</label>
                  <input
                    className="form-control-link"
                    value={title}
                    name="title"
                    type="text"
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex flex-column form-group">
                  <label className="color-7e7a7a">Description</label>
                  <textarea
                    className="form-control-link"
                    value={description}
                    name="description"
                    type="text"
                    onChange={handleChange}
                  />
                </div>

                {links?.map(({ subtitle, suburl, subimage }, index) => (
                  <div
                    className="d-flex width-100 align-items-center mb-5"
                    key={index}
                  >
                    <div>
                      <img src="/img/preview.png" style={{ width: "90%" }} />
                    </div>
                    <div className="width-100">
                      <div className="d-flex flex-column form-group">
                        <label className="color-7e7a7a">Link Name</label>
                        <input
                          className="form-control-link"
                          value={subtitle}
                          name="subtitle"
                          type="text"
                          onChange={changeOnLink}
                        />
                      </div>
                      <div className="d-flex flex-column form-group">
                        <label className="color-7e7a7a">URL</label>
                        <input
                          className="form-control-link"
                          value={suburl}
                          name="suburl"
                          type="text"
                          onChange={changeOnLink}
                        />
                      </div>

                      <input
                        type="file"
                        style={{ margin: "0px" }}
                        // value={subimage?.name}
                        name="subimage"
                        onChange={changeOnLink}
                      />
                    </div>
                  </div>
                ))}

                <div className="d-flex width-100 align-items-center mt-3 mb-2">
                  <div>
                    <img src="/img/preview.png" style={{ width: "90%" }} />
                  </div>
                  <div className="width-100">
                    <div className="d-flex flex-column form-group">
                      <label className="color-7e7a7a">Link Name</label>
                      <input
                        className="form-control-link"
                        value={subtitle}
                        name="subtitle"
                        type="text"
                        onChange={changeOnLink}
                        placeholder="ex. Facebook"
                      />
                    </div>
                    <div className="d-flex flex-column form-group">
                      <label className="color-7e7a7a">URL</label>
                      <input
                        className="form-control-link"
                        value={suburl}
                        name="suburl"
                        type="text"
                        onChange={changeOnLink}
                        placeholder="ex. www.facebook.com"
                      />
                    </div>

                    <input
                      type="file"
                      style={{ margin: "0px" }}
                      // value={subimage?.name}
                      name="subimage"
                      onChange={changeOnLink}
                    />
                  </div>
                </div>
              </form>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-lg publish-link"
                  onClick={onClickToAddLinks}
                >
                  Add more Link
                </button>
              </div>
            </div>
          </div>

          <div style={{ width: "70%" }} className="mt-3">
            <img
              src={
                temp == 1
                  ? "/img/template1.png"
                  : temp == 2
                  ? "/img/template2.png"
                  : temp == 3
                  ? "/img/template3.png"
                  : "/img/template4.png"
              }
              style={{ width: "300px" }}
            />
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} size="md">
        <Modal.Body>
          <PublishModal />
        </Modal.Body>
      </Modal>
    </div>
  );
};
