import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";

const ModalDetail = (props) => {
  const { openModal, closeModal, detailProduct } = props;
  return (
    <div>
      <Modal show={!!openModal} onClose={() => closeModal()}>
        <Modal.Header>{detailProduct.tenSP}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {detailProduct.manHinh}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {detailProduct.heDieuHanh}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalDetail;
