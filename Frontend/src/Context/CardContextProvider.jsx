import { useContext, useState } from "react";
import { CardContext } from "./CardContext";

const CardContextProvider = ({ children }) => {
  const [storeValue, setStoreValue] = useState();

  return (
    <CardContext.Provider value={(storeValue, setStoreValue)}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
