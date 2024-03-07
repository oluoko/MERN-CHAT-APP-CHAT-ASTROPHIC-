import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const BootstrapToast = ({ title, description, status, duration, position }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <ToastContainer
      className="p-3 text-dark"
      style={{ zIndex: 4 }}
      position={position}
    >
      <Toast
        className="d-inline-block m1"
        bg={status.toLowerCase()}
        show={show}
        onClose={handleClose}
        delay={duration}
        autohide
      >
        <Toast.Header className={`bg-${status.toLowerCase()}`}>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{description}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default BootstrapToast;
