import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const BootstrapToast = ({ message }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Toast show={show} onClose={handleClose}>
      <Toast.Header>
        <strong className="me-auto">Bootstrap Toast</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default BootstrapToast;
