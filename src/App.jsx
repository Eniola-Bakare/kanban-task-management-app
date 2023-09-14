import { useBoardsContext } from "./Contexts/ContextApi";
import AddNewBoard from "./UIs/AddNewBoard";
import Applayout from "./UIs/Applayout";
import Overlay from "./UIs/Overlay";

function App() {
  const { showBoardForm } = useBoardsContext();
  return (
    <div className="font-plus h-[100%] box-border relative">
      <Applayout />
      {showBoardForm && <Overlay>{<AddNewBoard />}</Overlay>}
    </div>
  );
}

export default App;
