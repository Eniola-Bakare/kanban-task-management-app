import Header from "./Header";
import Sidebar from "./Sidebar";
import MainBar from "./MainBar";

function Applayout() {
  return (
    <div className="w-full h-[100%] ">
      <Header />
      <main className="header-board-info flex justify-start h-[85%]">
        <Sidebar />
        <MainBar />
      </main>
    </div>
  );
}

export default Applayout;
