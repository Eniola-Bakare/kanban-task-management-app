import Header from "./Header";
import Sidebar from "./Sidebar";
import MainBar from "./MainBar";
import HiddenSidebar from "./HiddenSidebar";
import { useBoardsContext } from "../Contexts/ContextApi";

function Applayout() {
  const { showSidebar } = useBoardsContext();
  return (
    <div className="w-full h-[100%] relative">
      <Header />
      <main className="header-board-info flex justify-start h-[88%] overflow-scroll ">
        {showSidebar || <Sidebar />}
        <MainBar />
      </main>
      {showSidebar && <HiddenSidebar />}
    </div>
  );
}

export default Applayout;
