import React from 'react'

import styles from './Modal.module.scss'

// ___________
//
type ModalProps = {
  handleClose: () => void
}

// ___________
//
const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  return (
    <div>
      <div onClick={handleClose} className={styles.modalBg}></div>
      <div className={styles.modalBody}>{children}</div>
    </div>
  )
}

export default Modal
