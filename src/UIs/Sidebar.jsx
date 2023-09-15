import { useBoardsContext } from "../Contexts/ContextApi";
import BoardIcon from "../icons/BoardIcon";
import Toggler from "./Toggler";

function Sidebar() {
  const { setShowBoardForm, boards, setCurrentBoard, currentBoard } =
    useBoardsContext();

  const totalBoards = boards.reduce((acc, _) => (acc += 1), 0);

  return (
    <div
      className={`  w-[20%] h-[100%] dark:border-r-2 dark:border-r-grey-light pt-12 pr-10 flex flex-col relative dark:bg-grey-dark`}
    >
      <p className="mb-8 font-semibold text-grey-scale text-xs pl-10">
        ALL BOARDS ( {totalBoards})
      </p>
      <section className="boards" key="boards">
        {boards
          .map((eachBoard) => {
            return (
              <div
                key={eachBoard.id}
                className={`${
                  currentBoard?.id === eachBoard?.id
                    ? " bg-purple-primary py-3 left-0 top w-[90%] rounded-r-full text-white"
                    : "text-grey-scale"
                }  each-board flex w-full gap-3 items-center mb-5 cursor-pointer pl-10`}
                onClick={() => setCurrentBoard(eachBoard)}
              >
                <BoardIcon
                  color={`${
                    currentBoard.id === eachBoard.id ? "#fff" : "#828FA3"
                  }`}
                />
                <p className="borad-name font-semibold  text-sm">
                  {eachBoard.name}
                </p>
              </div>
            );
          })
          .reverse()}
        <div className="each-board flex w-full gap-3 items-center mb-5 cursor-pointer pl-10">
          <BoardIcon color="#635FC7" />
          <p
            className="borad-name font-semibold text-purple-primary text-sm"
            onClick={() => setShowBoardForm(true)}
          >
            + Create New Board
          </p>
        </div>
      </section>
      <Toggler />
    </div>
  );
}

export default Sidebar;
