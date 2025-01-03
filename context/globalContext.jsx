import React, { createContext, useContext, useState } from "react";
import { dinings, restaurants, steakhouses } from "../data/places";

const globalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [val, setVal] = useState(20);
  const [places, setPlaces] = useState({
    restaurants,
    dinings,
    steakhouses,
  });
  return (
    <globalContext.Provider value={{ val, places }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobal = () => useContext(globalContext);
