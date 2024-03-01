'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

interface Props {
  onClose: () => void,
  children: string | JSX.Element,
}
export default function Modal({ onClose, children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.modalContainer}>{children}</div>
        </div>,
        document.body
      )
    : null;
}
