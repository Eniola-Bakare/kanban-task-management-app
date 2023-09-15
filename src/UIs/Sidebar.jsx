import { useBoardsContext } from "../Contexts/ContextApi";
import Toggler from "./Toggler";
// import { boards as boardsData } from "../data";

function Sidebar() {
  const { setShowBoardForm, boards, setCurrentBoard } = useBoardsContext();

  const totalBoards = boards.reduce((acc, _) => (acc += 1), 0);
  // console.log(boards);

  return (
    // w-3/12
    <div className="w-[20%] h-[100%] dark:border-r-2 dark:border-r-grey-light pt-12 px-10 flex flex-col relative dark:bg-grey-dark">
      <p className="mb-8 font-semibold text-grey-scale text-xs">
        ALL BOARDS ({totalBoards})
      </p>
      <section className="boards" key="boards">
        {boards.map((eachBoard) => {
          return (
            <div
              key={eachBoard.id}
              className="each-board flex w-full gap-3 items-center mb-5 cursor-pointer"
              onClick={() => setCurrentBoard(eachBoard)}
            >
              <img src="./icon-board.svg" className="w-5 h-5 " />
              <p className="borad-name font-semibold text-grey-scale text-sm">
                {eachBoard.name}
              </p>
            </div>
          );
        })}
        <div className="each-board flex w-full gap-3 items-center mb-5 cursor-pointer">
          <img src="./icon-board.svg" className="w-5 h-5 " />
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
