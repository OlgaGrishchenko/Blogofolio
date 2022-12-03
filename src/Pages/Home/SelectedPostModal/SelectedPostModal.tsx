import React from "react";
import Modal from "../../../Components/Modal";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../../Components/Card";
import { CardSize } from "../../../Components/Card/Card";
import PostsSelectors from "../../../Redux/Selectors/postsSelectors";
import { setSelectedPostModalVisible } from "../../../Redux/Reducers/postsReducer";

import styles from "./SelectedPostModal.module.css";

const SelectedPostModal = () => {
  
  const selectedPost = useSelector(PostsSelectors.getSelectedPost);

  const isVisible = useSelector(PostsSelectors.getSelectedPostModalVisible);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSelectedPostModalVisible(false));
  };

  return (
    selectedPost && (
      <Modal className={styles.modalContainer} isOpen={isVisible} onRequestClose={onClose}>
        <Card isFromModal size={CardSize.Large} card={selectedPost} />
      </Modal>
    )
  );
};

export default SelectedPostModal;