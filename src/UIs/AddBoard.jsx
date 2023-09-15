import { useBoardsContext } from "../Contexts/ContextApi";
import Button from "./Button";

function AddBoard() {
  const { setShowBoardForm } = useBoardsContext();
  return (
    <>
      <p className="text-lg text-grey-scale font-extrabold">
        Create a new board to get started.
      </p>
      <div className="">
        <Button
          name="+ Create New Board"
          onClick={() => setShowBoardForm(true)}
        />
      </div>
    </>
  );
}

export default AddBoard;
