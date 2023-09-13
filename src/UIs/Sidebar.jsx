import { useEffect, useState } from "react";
import { useBoardsContext } from "../ContextApi";
// import { boards as boardsData } from "../data";

function Sidebar() {
  const { boardsData } = useBoardsContext();
  const [boards, setBoards] = useState(boardsData.boards);

  const totalBoards = boards.reduce((acc, _) => (acc += 1), 0);
  // console.log(boards);

  return (
    <div className="w-3/12 h-full border-r-2 pt-12 px-10 border-r-neutral flex flex-col">
      <p className="mb-6 font-semibold text-grey-scale text-xs">
        ALL BOARDS ({totalBoards})
      </p>
      <section className="boards">
        {boards.map((eachBoard) => {
          return (
            <div
              key={eachBoard}
              className="each-board flex w-full gap-3 items-center mb-5"
            >
              <img src="./icon-board.svg" className="w-5 h-5 " />
              <p className="borad-name font-semibold text-grey-scale text-sm">
                {eachBoard.name}
              </p>
            </div>
          );
        })}
        <div className="each-board flex w-full gap-3 items-center mb-5">
          <img src="./icon-board.svg" className="w-5 h-5 " />
          <p className="borad-name font-semibold text-purple-primary text-sm">
            + Create New Board
          </p>
        </div>
      </section>

      <section className="toggle">
        <div className="theme">
          <img src="./icon-light-theme.svg" alt="sun icon" />
          <div className="toggler">
        toggle btn here
          </div>
          <img src="./icon-dark-theme.svg" alt="moon icon " />
        </div>
        <div className="show-sidebar">
          <img src="./icon-hide-sidebar.svg" alt="eye icon" />
          <span>Hide Sidebar</span>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
