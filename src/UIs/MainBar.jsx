import { useBoardsContext } from "../Contexts/ContextApi";
import AddBoard from "./AddBoard";
import AddColumn from "./AddColumn";
import BoardColumns from "./BoardColumns";
import Button from "./Button";

function MainBar() {
  const { showSidebar, boards, setShowBoardForm, currentBoard } =
    useBoardsContext();
  return (
    <div
      className={`bg-neutral w-${
        showSidebar ? "full" : "[80%]"
      } dark:bg-black-light px-8 h-[100%] flex items-center gap-6 ${
        currentBoard?.columns?.length === 0 ||
        currentBoard?.columns?.length === undefined
          ? "justify-center "
          : "justify-start pt-8 overflow-auto"
      }`}
    >
      {currentBoard?.columns?.length === undefined ? (
        <AddBoard />
      ) : currentBoard?.columns.length > 0 ? (
        <BoardColumns currentBoard={currentBoard} />
      ) : (
        <AddColumn />
      )}
    </div>
  );
}

export default MainBar;
