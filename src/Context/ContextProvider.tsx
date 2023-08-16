import * as React from "react";

type propsContext = {
  children: React.ReactNode;
};

const PropsType = {
  bgColor: "#fff",
};
export const DefaultContext = React.createContext(PropsType);

const ContextProvider = ({ children }: propsContext) => {
  return (
    <DefaultContext.Provider value={PropsType}>
      {children}
    </DefaultContext.Provider>
  );
};
export default ContextProvider;
