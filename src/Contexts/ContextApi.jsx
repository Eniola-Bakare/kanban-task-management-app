import { createContext, useContext, useEffect, useState } from "react";
import { boards as boardsData } from "../data";

const BoardsContext = createContext();

function BoardsContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBoardForm, setShowBoardForm] = useState(false);
  const [boardName, setBoardName] = useState("");

  const [columns, setColumns] = useState([]);
  
  function handleRemoveColumn(id) {
    columns.forEach((each) => console.log(each));
    return setColumns(columns.filter((each) => each.props.id !== id));
  }

  function handleDarkThemeChange() {
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
      value={{
        boardsData,
        boardName,
        setBoardName,
        darkTheme,
        handleDarkThemeChange,
        showSidebar,
        setShowSidebar,
        showBoardForm,
        setShowBoardForm,
        columns,
        setColumns,
        handleRemoveColumn,
      }}
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
