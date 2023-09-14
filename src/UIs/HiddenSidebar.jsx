import { useBoardsContext } from "../Contexts/ContextApi";

function HiddenSidebar() {
  const { setShowSidebar } = useBoardsContext();

  return (
    <div className="bg-purple-primary w-[70px] absolute bottom-14 rounded-r-full px-5 py-5 cursor-pointer " onClick={()=>{setShowSidebar(false)}}>
      <img src="./icon-show-sidebar.svg" alt="eye icon" />
    </div>
  )
}

export default HiddenSidebar
