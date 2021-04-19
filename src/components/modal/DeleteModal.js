import React from "react";

export const DeleteModal = (props) => {
  const { closeModal } = props;
  return (
    <div>
      <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
        {/* <img src="./img/confirm.png" /> */}

        <p style={{ fontWeight: "600", fontSize: "20px" }}>
          Your Link has been deleted
        </p>
        <img src="/img/check.png" style={{ width: "100px", height: "auto" }} />
      </div>
      <div className="mt-4 d-flex align-items-center justify-content-center">
        <button onClick={closeModal} className="btn modal-btn">
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
