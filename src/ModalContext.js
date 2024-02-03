// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);

  const openEnrollmentModal = () => {
    setEnrollmentModalOpen(true);
  };

  const closeEnrollmentModal = () => {
    setEnrollmentModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ enrollmentModalOpen, openEnrollmentModal, closeEnrollmentModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
