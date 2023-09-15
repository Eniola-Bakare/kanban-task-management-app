import { useBoardsContext } from "./Contexts/ContextApi";
import AddNewBoardForm from "./UIs/AddNewBoardForm";
import Applayout from "./UIs/Applayout";
import Overlay from "./UIs/Overlay";

function App() {
  const { showBoardForm } = useBoardsContext();
  return (
    <div className="font-plus h-[100%] box-border relative">
      <Applayout />
      {showBoardForm && <Overlay>{<AddNewBoardForm />}</Overlay>}
    </div>
  );
}

export default App;
