import { createContext, useContext, useEffect, useState } from "react";
import { boards as boardsData } from "../data";

const BoardsContext = createContext();

function BoardsContextProvider({ children }) {
  // new boards
  const [boards, setBoards] = useState(boardsData.boards);
  console.log(boards);
  const [darkTheme, setDarkTheme] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBoardForm, setShowBoardForm] = useState(false);
  const [boardName, setBoardName] = useState("");

  const [columns, setColumns] = useState([]);
  const [columnNames, setColumnNames] = useState({});

  // to create columns from input fields of add board columns
  const colObjects = columns.map((eachCol) => {
    if (columnNames[eachCol.props.id] === undefined) return;
    return {
      id: Math.random() * 300,
      name: columnNames[eachCol.props.id],
      tasks: [
        {
          title: "Conduct 5 wireframe tests",
          description:
            "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
          status: "Done",
          subtasks: [
            {
              title: "Complete 5 wireframe prototype tests",
              isCompleted: true,
            },
          ],
        },
        {
          title: "Share on Show HN",
          description: "",
          status: "",
          subtasks: [
            {
              title: "Draft out HN post",
              isCompleted: false,
            },
            {
              title: "Get feedback and refine",
              isCompleted: false,
            },
            {
              title: "Publish post",
              isCompleted: false,
            },
          ],
        },
      ],
    };
  });
  console.log(colObjects);

  const [newBoard, setNewBoard] = useState({});

  useEffect(() => {
    if (
      Object.keys(newBoard).length === 0 ||
      !boardName ||
      boardName.length < 4
    )
      return;
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
    if (boardName === "" || boardName.length < 4) return;
    setNewBoard({
      name: boardName,
      id: new Date(),
      columns: colObjects,
    });
    setShowBoardForm(false);
    setColumnNames({});
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

  // For current board
  const [currentBoard, setCurrentBoard] = useState(
    boards[boards.length - 1] || {}
  );

  // For editing the board
  const [showBoardEditForm, setShowBoardEditForm] = useState(false);
  const [saveChanges, setSaveChanges] = useState(false);
  const [currColNames, setCurColNames] = useState({});

  // function handleShowBoardEditForm(){
  //   cl
  // }

  return (
    <BoardsContext.Provider
      value={{
        boards,
        setBoards,
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
        showBoardEditForm,
        setShowBoardEditForm,
        saveChanges,
        setSaveChanges,
        currColNames,
        setCurColNames,
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
