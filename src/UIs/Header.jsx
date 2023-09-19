import { useEffect, useState } from "react";
import { useBoardsContext } from "../Contexts/ContextApi";
import Button from "./Button";
import Logo from "./Logo";

function Header() {
  const { currentBoard, setShowBoardEditForm, setShowDelete } =
    useBoardsContext();
  const [activeBoardName, setActiveBoardName] = useState("");
  const [boardMenu, setBoardMenu] = useState(false);

  useEffect(() => {
    setActiveBoardName(currentBoard.name);
  }, [currentBoard]);
  return (
    <div className="flex justify-between w-full items-center bg-white dark:bg-grey-dark relative">
      <div className="w-[20%]">
        <Logo />
      </div>
      <div className="header-board-info flex justify-between w-[80%] items-center px-8">
        <p className="header-board-name font-semibold text-3xl dark:text-white">
          {activeBoardName}
        </p>

        <div className="header-extra flex items-center justify-between gap-7">
          <Button
            disabled={currentBoard?.columns === undefined}
            name="+ Add New Task"
            width="[164px]"
          />
          <img
            src="./icon-vertical-ellipsis.svg"
            className="cursor-pointer"
            onClick={() => setBoardMenu((prev) => !prev)}
          />
          {boardMenu && (
            <div className="w-[15%] z-40 absolute top-full bg-white dark:bg-grey-light px-5 py-6 rounded-lg h-fit flex flex-col  gap-5">
              <p
                className="text-grey-scale font-medium"
                onClick={() => {
                  setShowBoardEditForm(true);
                  setBoardMenu(false);
                }}
              >
                Edit Board
              </p>
              <p
                className="text-danger-solid font-medium"
                onClick={() => {
                  setShowDelete(true);
                  setBoardMenu(false);
                }}
              >
                Delete Board
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
