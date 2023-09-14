import { useBoardsContext } from "../Contexts/ContextApi";
import Button from "./Button";
import HeaderDetails from "./HeaderDetails";

function MainBar() {
  const { showSidebar } = useBoardsContext();
  return (
    <div
      className={`bg-neutral w-${
        showSidebar ? "full" : "[80%]"
      } dark:bg-black-light px-8 h-[100%] flex flex-col items-center gap-6 justify-center`}
    >
      <p className="text-lg text-grey-scale font-extrabold">
        This board is empty. Create a new column to get started.
      </p>
      <div className="">
        <Button name="+Add New Column" />
      </div>
    </div>
  );
}

export default MainBar;
