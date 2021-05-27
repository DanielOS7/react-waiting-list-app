import React, { useContext } from 'react';

import WaitingListContext from '../context/waiting-list-context';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Styles from '../styles/modal.module.css';

export default function AppModal() {
  const { showModal, messageData, setShowModal, error } = useContext(WaitingListContext);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Ticketmaster</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className={error ? Styles.error : Styles.success}><b>{messageData.message}</b></p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
