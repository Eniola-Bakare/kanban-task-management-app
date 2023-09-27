import { HiEllipsisVertical } from "react-icons/hi2";
import Button from "./Button";
import { useBoardsContext } from "../Contexts/ContextApi";

function HeaderDetails() {
  return (
    <div className="header-board-info flex justify-between  items-center bg-white h-10">
      <p className="header-board-name font-extrabold text-3xl">
        Platform Launch
      </p>

      <div className="header-extra flex items-center">
        <Button name="+ Add New Task" />
        <HiEllipsisVertical />
      </div>
    </div>
  );
}

export default HeaderDetails;
