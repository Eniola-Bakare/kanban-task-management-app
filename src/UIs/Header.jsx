import { HiEllipsisVertical } from "react-icons/hi2";

import Button from "./Button";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex justify-between w-full items-center bg-white">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="header-board-info flex justify-between w-9/12 items-center px-5">
        <p className="header-board-name font-extrabold text-3xl">
          Platform Launch
        </p>

        <div className="header-extra flex items-center justify-between gap-4">
          <Button name="+ Add New Task" />
          {/* <HiEllipsisVertical  style={{ fontSize: "26px" }} /> */}
          <img src="./icon-vertical-ellipsis.svg" />
        </div>
      </div>
    </div>
  );
}

export default Header;
