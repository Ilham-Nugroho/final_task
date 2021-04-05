import { createContext, useState } from "react";

export const TemplateContext = createContext();

export const TemplateContextProvider = ({ children }) => {
  const [templateState, setTemplateState] = useState();

  return (
    <TemplateContext.Provider value={[templateState, setTemplateState]}>
      {children}
    </TemplateContext.Provider>
  );
};
