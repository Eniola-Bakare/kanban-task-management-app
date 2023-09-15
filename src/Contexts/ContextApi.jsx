import { createContext, useContext, useEffect, useState } from "react";
import { boards as boardsData } from "../data";

const BoardsContext = createContext();

function BoardsContextProvider({ children }) {
  // new boards
  const [boards, setBoards] = useState(boardsData.boards);
  const [darkTheme, setDarkTheme] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBoardForm, setShowBoardForm] = useState(false);
  const [boardName, setBoardName] = useState("");

  const [columns, setColumns] = useState([]);
  const [columnNames, setColumnNames] = useState({});
  const colObjects = columns.map((eachCol) => {
    // console.log(columnNames[eachCol.props.id] === undefined);
    if (columnNames[eachCol.props.id] === undefined) return;
    return {
      name: columnNames[eachCol.props.id],
    };
  });

  const [newBoard, setNewBoard] = useState({});

  useEffect(() => {
    if (Object.keys(newBoard).length === 0 || !boardName) return;
    //1. update boards array
    setBoards((prev) => [...prev, newBoard]);
    setCurrentBoard(newBoard);

    // 2. clear create board state
    setNewBoard({});
    setShowBoardForm(false);
    setBoardName("");
    setColumns([]);
    console.log(boards);
  }, [newBoard, boardName]);

  function handleAddBoard() {
    setNewBoard({
      name: boardName,
      columns: colObjects,
      id: new Date(),
    });

    // console.log("columns", columns);
    // console.log("colObjects", colObjects);
    // console.log("colNames", columnNames);
  }
  function handleRemoveColumn(id) {
    // columns.forEach((each) => console.log(each));
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

  // for current board
  const [currentBoard, setCurrentBoard] = useState({});
  return (
    <BoardsContext.Provider
      value={{
        boards,
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
        columnNames,
        setColumnNames,
        handleAddBoard,
        currentBoard,
        setCurrentBoard,
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
