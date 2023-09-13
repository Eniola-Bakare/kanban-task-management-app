import Header from "./Header";
import Sidebar from "./Sidebar";
import MainBar from "./MainBar";

function Applayout() {
  return (
    <div className="w-full h-full ">
      <Header />

      <main className="header-board-info flex justify-between items-center h-full">
        <Sidebar />
        <MainBar />
      </main>
    </div>
  );
}

export default Applayout;
