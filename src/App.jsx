import { useBoardsContext } from "./Contexts/ContextApi";
import AddNewBoardForm from "./UIs/AddNewBoardForm";
import Applayout from "./UIs/Applayout";
import EditBoard from "./UIs/EditBoard";
import Overlay from "./UIs/Overlay";

function App() {
  const {
    showBoardForm,
    showBoardEditForm,
    setShowBoardForm,
    setShowBoardEditForm,
  } = useBoardsContext();
  return (
    <div className="font-plus h-[100%] box-border relative">
      <Applayout />
      {showBoardForm && (
        <Overlay closeOverLay={setShowBoardForm}>
              <AddNewBoardForm />
        </Overlay>
      )}
      {showBoardEditForm && (
        <Overlay closeOverLay={setShowBoardEditForm}>
          <EditBoard />
        </Overlay>
      )}
    </div>
  );
}

export default App;
