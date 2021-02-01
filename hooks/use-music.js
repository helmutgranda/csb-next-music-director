import { useRef, useState, createContext, useContext, useEffect } from "react";

export function useMusic() {
  const [isPlaying, setIsPlaying] = useState(null);

  let player = {};
  let audioContext = useRef(null);
  useEffect(() => {
    let script = document.createElement("script");
    script.src =
      "https://surikov.github.io/webaudiofont/npm/dist/WebAudioFontPlayer.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);

    let script2 = document.createElement("script");
    script2.src =
      "https://surikov.github.io/webaudiofontdata/sound/0730_FluidR3_GM_sf2_file.js";
    script2.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script2);

    let webaudiofont = require("webaudiofont");
    let instr = null;
    let AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContextFunc();
    player = new WebAudioFontPlayer();
    player.loader.decodeAfterLoading(
      audioContext,
      "_tone_0730_FluidR3_GM_sf2_file"
    );
  }, []);

  function processGroup(item, index, sets_length) {
    const pitch = 12 * 6;
    let notes = {
      a: [9 + +12 * 6],
      as: [10 + pitch],
      b: [11 + pitch],
      bs: [59 + pitch],
      c: [0 + pitch],
      cs: [1 + pitch],
      d: [2 + pitch],
      ds: [3 + pitch],
      e: [4 + pitch],
      es: [5 + pitch],
      f: [5 + pitch],
      fs: [6 + pitch],
      g: [7 + pitch],
      gs: [8 + pitch]
    };

    if (item !== " ") {
      player.queueWaveTable(
        audioContext,
        audioContext.destination,
        _tone_0730_FluidR3_GM_sf2_file,
        audioContext.currentTime + 0.12 * (5 * index),
        notes[item],
        0.5 * sets_length
      );
    }
  }

  function playInstrument(sets, numberset) {
    sets.forEach((item, index) => {
      processGroup(item, index, numberset[index]);
    });
  }

  function stopInstrument() {
    player.cancelQueue(audioContext);
  }

  return {
    playInstrument,
    stopInstrument
  };
}

export default useMusic;
