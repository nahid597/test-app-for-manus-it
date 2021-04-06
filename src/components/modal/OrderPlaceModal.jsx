import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const OrderPlaceModal = (props) => {

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className="modal-md">
        <ModalHeader toggle={toggle}>Place Order</ModalHeader>
        <ModalBody>
        Your order has been placed!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Ok</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default OrderPlaceModal;