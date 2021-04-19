import React, { useState, useContext, useEffect } from "react";
import { useQuery, useMutation } from "react-query";

import { Spinner, Form, FormFile, Modal } from "react-bootstrap";

import { UserContext } from "../context/userContext";

import { useParams } from "react-router-dom";

import { API, setAuthToken } from "../config/api";
import { Sidebar } from "../components/header/Sidebar";
import { EditLinkModal } from "../components/modal/EditLinkModal";

export const EditUniqueLink = () => {
  const { temp, unique } = useParams();
  const [showModal, setShowModal] = useState(false);

  const {
    data: editLinkData,
    error: editLinkError,
    loading: editLinkLoading,
    refetch: editLinkRefetch,
  } = useQuery(
    "editLinkCache",
    async () => {
      return API.get(`/link/${unique}`);
    },
    {
      onSuccess: (data) => {
        setForm(data?.data?.data?.link);
      },
    }
  );

  const [form, setForm] = useState({
    title: "",
    image: "",
    description: "",
    sublink: [],
  });

  const [fromSublink, setFromSublink] = useState();

  const [userState, userDispatch] = useContext(UserContext);

  // const { image, title, description, views, template, links } = form;

  const linksStringify = JSON.stringify(form?.sublink);

  const [link, setLink] = useState({
    subtitle: "",
    suburl: "",
    subimage: "",
  });

  const { subtitle, suburl, subimage } = link;

  const editUnique = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const body = new FormData();

      body.append("title", form?.title);
      body.append("description", form?.description);
      body.append("image", form?.image);
      body.append("template", temp);
      body.append("sublink", linksStringify);
      form?.sublink?.map((data) => {
        body.append("image", data.subimage);
      });

      // console.log(body);

      const responseMain = await API.patch(
        `/link/edit/${unique}`,
        body,
        config
      );
      return responseMain;
    } catch (error) {
      console.log(error);
      alert("Oopss, error occured: ", error);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowModal(true);

    editUnique.mutate();

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

  const changeOnLink = (event, index) => {
    const tempForm = { ...form };

    tempForm.sublink[index][event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setForm(tempForm);
  };

  const onClickToAddLinks = () => {
    const addNewLink = {
      ...form,
      sublink: [...form?.sublink, link],
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
                    value={form?.title}
                    name="title"
                    type="text"
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex flex-column form-group">
                  <label className="color-7e7a7a">Description</label>
                  <textarea
                    className="form-control-link"
                    value={form?.description}
                    name="description"
                    type="text"
                    onChange={handleChange}
                  />
                </div>

                {form?.sublink?.map(({ subtitle, suburl, subimage }, index) => (
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
                          onChange={(event) => changeOnLink(event, index)}
                        />
                      </div>
                      <div className="d-flex flex-column form-group">
                        <label className="color-7e7a7a">URL</label>
                        <input
                          className="form-control-link"
                          value={suburl}
                          name="suburl"
                          type="text"
                          onChange={(event) => changeOnLink(event, index)}
                        />
                      </div>

                      <input
                        type="file"
                        style={{ margin: "0px" }}
                        // value={subimage?.name}
                        name="subimage"
                        onChange={(event) => changeOnLink(event, index)}
                      />
                    </div>
                  </div>
                ))}
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
          <EditLinkModal />
        </Modal.Body>
      </Modal>
    </div>
  );
};
