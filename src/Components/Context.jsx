import React, { useState } from "react";

export const Context = React.createContext();
export function ContextFunc({ children }) {
  
  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  );
}
