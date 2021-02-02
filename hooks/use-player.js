import { useState, createContext, useContext, useEffect } from "react";

import { useMusic } from "./use-music.js";

export const PlayerContext = createContext();

const defaultPlayer = {
  player: {}
};

const timeHolder = [];
let intervalId = 0;
const defaultset = "bdbdc   edced   dfdfedc fedcb b ";
const numberset = [];
let container = "";
let counter = 0;
const noteMap = {
  a1: "W",
  b1: "X",
  c1: "Y",
  d1: "Z",
  e1: "[",
  f1: "\\",
  g1: "]",
  a2: "g",
  b2: "h",
  c2: "i",
  d2: "j",
  e2: "k",
  f2: "l",
  g2: "m",
  a4: "w",
  b4: "x",
  c4: "y",
  d4: "z",
  e4: "{",
  f4: "|",
  g4: "}"
};

export function usePlayerState() {
  const [player, updatePlayer] = useState(defaultPlayer);
  const { playInstrument, stopInstrument, setInstrument } = useMusic();

  useEffect(() => {
    container = document.getElementById("container");
    createPositions();
    createChordOpening();
    [...defaultset].forEach((item, index) => {
      createElements(item, index);
    });
    createCholdClosing();
  }, []);

  function createElements(item, index) {
    let divider = document.createElement("span");
    let replacer = "=";
    divider.className = "notes";
    

    if (index % 4 === 0 && index !== 0) {
      let divider = document.createElement("span");
      divider.className = "notes";
      divider.innerHTML = "!=";
      container.appendChild(divider);
    }
    if (item !== " ") {
      replacer = noteMap[item + numberset[index]];
      divider.id = "item" + counter;
      divider.className += " note" + item;
      divider.innerHTML = replacer;
    } else {
      divider.id = "item" + counter;
      divider.innerHTML = replacer;
    }
    counter++;
    container.appendChild(divider);
  }

  function createPositions() {
    let positionflagged = 0;
    for (let i = 0; i < defaultset.length; i++) {
      if (defaultset[i] !== " ") {
        numberset[i] = 1;
      } else {
        numberset[i] = 0;
      }

      if (defaultset[i] !== " " && defaultset[i + 1] === " ") {
        positionflagged = i;
        numberset[positionflagged] = 1;
      }
      if (defaultset[i] === " ") {
        numberset[positionflagged]++;
      }
    }
    
  }

  function createChordOpening() {
    let opening = document.createElement("span");
    opening.innerHTML = "'&=©=4=";
    opening.className = "notes";
    container.appendChild(opening);
  }

  function createCholdClosing() {
    let closing = document.createElement("span");
    closing.className = "notes";
    closing.innerHTML = ":=.<div></div>";
    container.appendChild(closing);
  }

  function playTestInstrument() {
    document.getElementById("play_music").classList.add("bx--btn--disabled");
    document.getElementById("play_music").setAttribute("disabled", true);
    document.getElementById("stop_music").removeAttribute("disabled");
    document.getElementById("stop_music").classList.remove("bx--btn--disabled");
    document.getElementById("stop_music").onclick = stopTestInstrument;
    let sets = defaultset.split("");
    stopInstrument();
    playInstrument(sets, numberset);
    let counter = 1;
    document.getElementById("item0").className += " noteFlash";
    window.intervalId = setInterval(function () {
      if (document.getElementById("item" + counter) == null) {
        clearInterval(window.intervalId);
      } else {
        document.getElementById("item" + counter).className += " noteFlash";
        counter++;
      }
    }, 600);

    console.log("ID SET", window.intervalId)
  }

  function stopTestInstrument() {
    console.log(window);
    document.getElementById("play_music").removeAttribute("disabled");
    document.getElementById("play_music").classList.remove("bx--btn--disabled");
    document.getElementById("stop_music").classList.add("bx--btn--disabled");
    document.getElementById("stop_music").setAttribute("disabled", true);
    stopInstrument();
    clearInterval(window.intervalId);
    let noteFlashItems = [...document.getElementsByClassName("noteFlash")];
    console.log(noteFlashItems);
    noteFlashItems.forEach(function (item) {
      item.classList.remove("noteFlash");
    });
  }

  function resetDefault() {
    console.log("reset default");
  }
  
  function updateCords() {
    console.log("updating Cords")
  }
  return {
    player,
    updatePlayer,
    playTestInstrument,
    stopTestInstrument,
    resetDefault,
    updateCords
  };
}

export function usePlayer() {
  const player = useContext(PlayerContext);
  return player;
}
