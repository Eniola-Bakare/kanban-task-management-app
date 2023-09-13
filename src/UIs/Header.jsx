
import Button from "./Button";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex justify-between w-full items-center bg-white">
      <div className="w-[20%]">
        <Logo />
      </div>
      <div className="header-board-info flex justify-between w-[80%] items-center px-8">
        <p className="header-board-name font-extrabold text-3xl">
          Platform Launch
        </p>

        <div className="header-extra flex items-center justify-between gap-7">
          <Button name="+ Add New Task" />
          <img src="./icon-vertical-ellipsis.svg" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
