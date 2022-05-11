import React from "react";
import "./tictactoe.css";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && (
        <span className="win-text">
          {player ? "Player-O Won The Game" : "Player-X Won The Game"}
        </span>
      )}
      {draw && <span className="win-text">Game Draw</span>}

      <span className="win-history">
        X's Wins: {winCount.X}
        <br />
        O's Wins: {winCount.O}
      </span>

      <button className="btn" onClick={restartGame}>
        Play Again
      </button>
      <button className="btn" onClick={clearHistory}>
        Clear History
      </button>
    </div>
  );
}

export default EndGame;
