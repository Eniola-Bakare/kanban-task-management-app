import { useBoardsContext } from "./Contexts/ContextApi";
import AddNewBoardForm from "./UIs/AddNewBoardForm";
import AddTask from "./UIs/AddTask";
import Applayout from "./UIs/Applayout";
import Delete from "./UIs/Delete";
import EditBoard from "./UIs/EditBoard";
import Overlay from "./UIs/Overlay";
import Tasks from "./UIs/TaskModal";

function App() {
  const {
    showBoardForm,
    showBoardEditForm,
    setShowBoardForm,
    setShowBoardEditForm,
    showDelete,
    setShowDelete,
    showTask,
    setShowTask,
    showAddTask,
    setShowAddTask,
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
      {showDelete && (
        <Overlay closeOverLay={setShowDelete}>
          <Delete />
        </Overlay>
      )}
      {showTask && (
        <Overlay closeOverLay={setShowTask}>
          <Tasks />
        </Overlay>
      )}
      {showAddTask && (
        <Overlay closeOverLay={setShowAddTask}>
          <AddTask />
        </Overlay>
      )}
    </div>
  );
}

export default App;
