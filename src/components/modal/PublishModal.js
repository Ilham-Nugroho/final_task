import React from "react";
import { useHistory } from "react-router";

export const PublishModal = (props) => {
  const { closeModal } = props;

  const history = useHistory();
  return (
    <div>
      <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
        {/* <img src="./img/confirm.png" /> */}

        <p style={{ fontWeight: "600", fontSize: "20px" }}>
          Your Link has been published!
        </p>
        <img src="/img/check.png" style={{ width: "100px", height: "auto" }} />
      </div>
      <div className="mt-4 d-flex align-items-center justify-content-center">
        <button
          onClick={() => history.push("/my-link")}
          className="btn modal-btn"
        >
          <p
            style={{
              fontWeight: "600",
              fontSize: "20px",
              margin: "0px",
              padding: "0px",
            }}
          >
            CONFIRM
          </p>
        </button>
      </div>
    </div>
  );
};
