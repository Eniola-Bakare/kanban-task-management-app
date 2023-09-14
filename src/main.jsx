import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BoardsContextProvider } from "./Contexts/ContextApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BoardsContextProvider>
      <App />
    </BoardsContextProvider>
  </React.StrictMode>
);
