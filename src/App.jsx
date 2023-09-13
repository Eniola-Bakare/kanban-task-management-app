import { BoardsContextProvider } from "./ContextApi";
import Applayout from "./UIs/Applayout";

function App() {
  return (
    <BoardsContextProvider>
      <div className="font-plus h-full">
        <Applayout />
      </div>
    </BoardsContextProvider>
  );
}

export default App;
