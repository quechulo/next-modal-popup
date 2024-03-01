'use client';

import React, { useState } from 'react';
import Modal from '@/components/Modal';
import styles from './page.module.css';
import Tooltip from '@/components/Tooltip';
import { ReactSVG } from 'react-svg';
// import ErrorComponent from "@/components/ErrorComponent";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <main className={styles.main}>
      <div>
        {isOpen && (
          <Modal onClose={handleClose}>
            <>
              <div>hellooo</div>
              <button onClick={handleClose}>Close Modal</button>
            </>
          </Modal>
        )}
        <button onClick={handleOpen}>Open Modal</button>
      </div>
      
      <div className={styles.otherContent}>
        <h2>Other Content</h2>
      </div>
      <div id='tooltip-parent1' className={styles.tooltip}>
        <h1>Open Tooltip</h1>
      <Tooltip text={'hello i am tooltip'} parentId='tooltip-parent1'>
      <ReactSVG width='5px' src='icons8-info.svg' />
      </Tooltip>
      </div>
      
    </main>
  );
}
