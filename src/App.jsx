import { BoardsContextProvider } from "./Contexts/ContextApi";
import Applayout from "./UIs/Applayout";

function App() {
  return (
    <BoardsContextProvider>
      <div className="font-plus h-[100%] box-border">
        <Applayout />
      </div>
    </BoardsContextProvider>
  );
}

export default App;
