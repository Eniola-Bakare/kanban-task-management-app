import { useEffect } from "react";
import { useBoardsContext } from "../Contexts/ContextApi";
import FormInput from "./FormInput";
import FormColumns from "./FormColumns";
import BoardInputColumns from "./BoardInputColumns";

function EditBoard() {
  const { currentBoard, setCurrentBoard, boardName, boards, setBoards } =
    useBoardsContext();

  console.log(currentBoard);
  useEffect(() => {
    if (boardName === "") return;
    setCurrentBoard((prev) => ({ ...prev, name: boardName }));
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.id === currentBoard.id) return { ...board, name: boardName };

        return board;
      })
    );
  }, [boardName]);
  return (
    <div className="w-[40%] bg-white dark:bg-grey-light p-10 rounded-lg h-fit flex flex-col gap-5">
      <p className="text-2xl font-bold text-black dark:text-white mb-8">
        Edit Board
      </p>
      <FormInput formName="Board Name" />
      {currentBoard?.columns.map((col) => (
        <BoardInputColumns
          col={col}
          key={Math.random() * 230}
          id={currentBoard.id}
        />
      ))}
    </div>
  );
}

export default EditBoard;
