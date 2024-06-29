import React from 'react';
import Modal from 'react-modal';
import { ImageModalProps } from '../../types';
import styles from "../ImageModal/ImageModal.module.css"
Modal.setAppElement('#root');

const customStyles = {
  content: {
    padding: '0',
    background: 'unset',
    overflow: 'unset',
    border: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, photo, onRequestClose }) => {
  if (!photo) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.overlay}
      style={customStyles}
    >
      <button className={styles.closeButton} onClick={onRequestClose}>
        x
      </button>
      <img src={photo.urls.regular} alt={photo.alt} className={styles.imageModal} />
    </Modal>
  );
};

export default ImageModal;