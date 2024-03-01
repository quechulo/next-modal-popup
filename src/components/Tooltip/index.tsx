'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

interface Props {
  text: string;
  parentId: string;
  children: string | JSX.Element | Element;
}

export default function Tooltip({ text, parentId, children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
  }, []);

  const portalDiv = document.getElementById(parentId);

  return (
    <div
      onMouseOver={() => setMounted(true)}
      onMouseOut={() => setMounted(false)}
    >
      {mounted &&
        createPortal(
          <div className={styles.tooltip}>{text}</div>,
          document.querySelector(`#${parentId}`)
        )}
      {children}
    </div>
  );
}
