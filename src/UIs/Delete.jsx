import { useBoardsContext } from "../Contexts/ContextApi";
import Button from "./Button";

function Delete() {
  const { currentBoard, setShowDelete, setBoards, setCurrentBoard } =
    useBoardsContext();
  function handleDeleteBoard() {
    setBoards((prev) => prev.filter((board) => board.id !== currentBoard.id));
    setCurrentBoard({});
    setShowDelete(false);
  }
  return (
    <div
      className="w-[40%] bg-white dark:bg-grey-light p-10 rounded-lg h-fit flex flex-col  gap-5"
      onClick={(e) => e.stopPropagation()}
    >
      <p className=" font-extrabold text-danger-solid text-lg">
        Delete this board?
      </p>
      <p className="text-sm text-grey-scale text">
        Are you sure you want to delete the &apos;{currentBoard.name}&apos;
        board? This action will remove all columns and tasks and cannot be
        reversed.
      </p>
      <div className="buttons w-full flex items-center justify-center gap-5">
        <div className="btn-1 w-[50%]">
          <Button
            name="Delete"
            btnType="danger"
            width="[100%]"
            onClick={() => handleDeleteBoard()}
          />
        </div>
        <div className="btn-2 w-[50%]">
          <Button
            name="Cancel"
            btnType="secondary"
            width="[100%]"
            onClick={() => setShowDelete()}
          />
        </div>
      </div>
    </div>
  );
}

export default Delete;
