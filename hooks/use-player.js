import { useState, createContext, useContext, useEffect } from "react";

export const PlayerContext = createContext();

const defaultPlayer = {
  player: {}
};

export function usePlayerState() {
  const [player, updatePlayer] = useState(defaultPlayer);

  function playTestInstrument() {
    console.log("play Test Insturment");
  }

  function stopTestInstrument() {
    console.log("stop Test Insturment");
  }

  function resetDefault() {
    console.log("reset default");
  }

  return {
    player,
    updatePlayer,
    playTestInstrument,
    stopTestInstrument,
    resetDefault
  };
}

export function usePlayer() {
  const player = useContext(PlayerContext);
  return player;
}
