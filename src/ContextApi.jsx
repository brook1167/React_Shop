import { createContext, useState } from "react";

export const CardContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CardContext.Provider value={{ cart, setCart }}>
      {children}
    </CardContext.Provider>
  );
};

export default Context;
