import React from "react";
import "./App.css";
import TicTacToe from "./tasks/TicTacToe/TicTacToe";
import SplitBox from "./tasks/SplitBox/SplitBox";
import {Routes, Route } from "react-router-dom";
import TreeReply from "./tasks/TreeReply/TreeReply";
import Home from "./tasks/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="treereply" element={<TreeReply />} />
          <Route path="splitbox" element={<SplitBox />} />
          <Route path="tictactoe" element={<TicTacToe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
