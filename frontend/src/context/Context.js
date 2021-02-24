import React, { createContext } from 'react';

const vamosContext = createContext();

export const vamosProvider = ({ children }) => {
  return <vamosContext.Provider>{children}</vamosContext.Provider>;
};

export default vamosContext;
