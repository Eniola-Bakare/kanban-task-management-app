import { createContext, useContext } from "react";
import { boards as boardsData } from "./data";

const BoardsContext = createContext();

function BoardsContextProvider({ children }) {
  return (
    <BoardsContext.Provider value={{ boardsData }}>
      {children}
    </BoardsContext.Provider>
  )
}

function useBoardsContext() {
  const values = useContext(BoardsContext);
  if (!values)
    throw new Error("BoardsContext has been used out side of boards provider");

  return values;
}

export { BoardsContextProvider, useBoardsContext };
