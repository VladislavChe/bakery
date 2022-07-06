import React from 'react';
import { ReactComponent as Ok } from '../../../img/ok.svg';
import styles from './Modal.module.scss';

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = React.useRef();

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const handleOutsideClick = (e) => {
    if (!e.path.includes(modalRef.current)) {
      setShowModal(false);
    }
  };

  return (
    <div className={`${styles.overlay} ${showModal && styles[`overlay--show`]}`}>
      <div ref={modalRef} className={styles.modal}>
        <div onClick={() => setShowModal(false)} className={styles.close}></div>
        <Ok className={styles.ok} />
        <h3 className={styles.title}>Спасибо!</h3>
        <p className={styles.text}>Наш менеджер скоро с Вами свяжется</p>
      </div>
    </div>
  );
};

export default Modal;
