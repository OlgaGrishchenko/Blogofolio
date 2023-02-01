import React from "react";
import Modal from "../../../Components/Modal";
import { useDispatch, useSelector } from "react-redux";

import ImageSelectors from "../../../Redux/Selectors/imageSelectors";
import { setSelectedImageModalVisible } from "../../../Redux/Reducers/imageReducer";

import styles from "./SelectedImageModal.module.css";

const SelectedImageModal = () => {

const selectedImage = useSelector(ImageSelectors.getSelectedImage);

const isVisible = useSelector(ImageSelectors.getSelectedImageModalVisible);

const dispatch = useDispatch();

const onClose = () => {
   dispatch(setSelectedImageModalVisible(false));
};

return (
      <>
      {selectedImage && (
         <Modal isOpen={isVisible} onRequestClose={onClose}>
            <img src={selectedImage} alt={""} className={styles.image} />
         </Modal>
      )}
      </>
);
};

export default SelectedImageModal;