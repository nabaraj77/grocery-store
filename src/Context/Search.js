import { createContext, useState } from "react";
export const SearchData = createContext({});

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState("");
  const setValues = (values) => {
    setText(values);
  };
  return (
    <SearchData.Provider
      value={{
        text,
        setValues,
      }}
    >
      {children}
    </SearchData.Provider>
  );
};
