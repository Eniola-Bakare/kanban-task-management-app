import { createContext, useContext, useEffect, useState } from "react";
import { boards as boardsData } from "./data";

const BoardsContext = createContext();

function BoardsContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  function handleDarkThemeChange() {
    console.log(darkTheme);
    setDarkTheme((prev) => !prev);
  }

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <BoardsContext.Provider
      value={{ boardsData, darkTheme, handleDarkThemeChange }}
    >
      {children}
    </BoardsContext.Provider>
  );
}

function useBoardsContext() {
  const values = useContext(BoardsContext);
  if (!values)
    throw new Error("BoardsContext has been used out side of boards provider");

  return values;
}

export { BoardsContextProvider, useBoardsContext };
