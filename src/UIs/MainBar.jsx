import { useBoardsContext } from "../Contexts/ContextApi";
import AddColumn from "./AddColumn";
import BoardColumns from "./BoardColumns";
import Button from "./Button";
import CurrentBoardDetails from "./CurrentBoardDetails";

function MainBar() {
  const { showSidebar, boards, setShowBoardForm, currentBoard } =
    useBoardsContext();
  console.log("currentBoard?.columns", currentBoard?.columns?.length);
  return (
    <div
      className={`bg-neutral w-${
        showSidebar ? "full" : "[80%]"
      } dark:bg-black-light px-8 h-[100%] flex flex-col items-center gap-6 ${
        currentBoard?.columns?.length === 0
          ? "justify-center "
          : "justify-start pt-8"
      }`}
    >
      {currentBoard?.columns?.length === undefined ? (
        <>
          <p className="text-lg text-grey-scale font-extrabold">
            Create a new board to get started.
          </p>
          <div className="">
            <Button
              name="+ Create New Board"
              onClick={
                boards.length === 0
                  ? () => setShowBoardForm(true)
                  : console.log("cominggg")
              }
            />
          </div>
        </>
      ) : currentBoard?.columns.length > 0 ? (
        <BoardColumns currentBoard={currentBoard} />
      ) : (
        <AddColumn />
      )}
    </div>
  );
}

export default MainBar;
