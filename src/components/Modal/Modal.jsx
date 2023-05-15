import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStatusModal } from 'redux/modalSlice';

import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      dispatch(setStatusModal(false));
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      dispatch(setStatusModal(false));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent className="modalContent">{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
