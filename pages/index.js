import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Button, Content, Grid, Row, Column } from "carbon-components-react";
import { useState, useEffect, useLayoutEffect, useRef } from "react";

import ModalView from "../components/ModalView";
import GlobalHeader from "../components/GlobalHeader"
import GlobalFooter from "../components/GlobalFooter"
import { Footer } from "@carbon/ibmdotcom-react";


const noteMapSrc = {
  A1: "^",
  B1: "^",
  G1: "^",
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
  A2: "n",
  B2: "n",
  a4: "w",
  b4: "x",
  c4: "y",
  d4: "z",
  e4: "{",
  f4: "|",
  g4: "}",
  A4: "~",
  B4: "~",
};


const nav = {
  footerThin: [{
      title: "Contact Creator",
      url: "/"
    },
    {
      title: "Privacy",
      url: "/privacy"
    },
    {
      title: "Terms of use",
      url: "/terms"
    }]
}

export default function Home() {

  const[musicSet, setMusicSet] = useState("bdbdc   edced   dfdfedc fedcb b ");
  const [modalOpen, setModal] = useState(false);
  const [noteMap, setNoteMap] = useState(noteMapSrc);
  const [numberSet, setNumberSet] = useState([]);
  const [playedOnce, setPlayedOnce] = useState(false);

  useEffect(() => {
    initApp();
  }, [musicSet])

  function initApp(){
    container.innerHTML = "";
    createPositions();
    createChordOpening();
    [...musicSet].forEach( (item, index) => createElements(item, index) );
    createCholdClosing();
  }

  function resetDefault() {
    console.log("reset default ");
    window.p.player.cancelQueue(window.p.audioContext);
    container.innerHTML = "";
    document.getElementsByClassName("landing-page__heading")[0].innerHTML = "";
    setMusicSet("bdbdc   edced   dfdfedc fedcb b ")
      "#23 March Steps";
    initApp();
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
      
      replacer = noteMap[item + numberSet[index]];
      divider.id = "item" + index;
      divider.className += " note" + item.toLowerCase();
      divider.innerHTML = replacer;
    } else {
      divider.id = "item" + index;
      divider.innerHTML = replacer;
    }
    
    container.appendChild(divider);
  }

  function createPositions() {
    let positionflagged = 0;
    for (let i = 0; i < musicSet.length; i++) {
      if (musicSet[i] !== " ") {
        numberSet[i] = 1;
      } else {
        numberSet[i] = 0;
      }

      if (musicSet[i] !== " " && musicSet[i + 1] === " ") {
        positionflagged = i;
        numberSet[positionflagged] = 1;
      }
      if (musicSet[i] === " ") {
        numberSet[positionflagged]++;
      }
    }
    
  }

  function processGroup(item, index, sets_length) {
    const pitch = 12 * 6;
    let notes = {
      a: [-4 + pitch],
      as: [-3 + pitch],
      b: [-2 + pitch],
      bs: [-1 + pitch],
      c: [0 + pitch],
      cs: [1 + pitch],
      d: [2 + pitch],
      ds: [3 + pitch],
      e: [4 + pitch],
      es: [5 + pitch],
      f: [5 + pitch],
      fs: [6 + pitch],
      g: [7 + pitch],
      gs: [8 + pitch],
      A: [9 + pitch],
      As: [10 + pitch],
      B: [11 + pitch],
      Bs: [12 + pitch]
    };

    if (item !== " ") {      
      window.p.player.queueWaveTable(
        window.p.audioContext,
        window.p.audioContext.destination,
        _tone_0730_FluidR3_GM_sf2_file,
        window.p.audioContext.currentTime + 0.12 * (5 * index),
        notes[item],
        0.5 * sets_length
      );
    }
  }


  function playTestInstrument() {
    document.getElementById("play_music").classList.add("bx--btn--disabled");
    document.getElementById("play_music").setAttribute("disabled", true);
    document.getElementById("stop_music").removeAttribute("disabled");
    document.getElementById("stop_music").classList.remove("bx--btn--disabled");
    document.getElementById("stop_music").onclick = stopTestInstrument;
    window.p.player.cancelQueue(window.p.audioContext);
    [...musicSet].forEach((item, index) => {
      processGroup(item, index, numberSet[index]);
    });
    let localCounter = 0;
    if (!playedOnce){
      setPlayedOnce(true);
    }else{
      document.getElementById("item" + localCounter).className += " noteFlash";
      localCounter = 1;
    }
    window.intervalId = setInterval(function () {
      if (document.getElementById("item" + localCounter) == null) {
        stopTestInstrument();
      } else {
        document.getElementById("item" + localCounter).className += " noteFlash";
        localCounter++;
      }
    }, 600);

  }

  function stopTestInstrument() {
    document.getElementById("play_music").removeAttribute("disabled");
    document.getElementById("play_music").classList.remove("bx--btn--disabled");
    document.getElementById("stop_music").classList.add("bx--btn--disabled");
    document.getElementById("stop_music").setAttribute("disabled", true);
    window.p.player.cancelQueue(window.p.audioContext);
    clearInterval(window.intervalId);
    let noteFlashItems = [...document.getElementsByClassName("noteFlash")];
    noteFlashItems.forEach(function (item) {
      item.classList.remove("noteFlash");
    });
  }

  function createNew() {
    stopTestInstrument();
    setModal(true)
  }

  function updateCords(){
    if (document.getElementById("fullNotes").validity.patternMismatch) {
      document.getElementById("fullNotes").setAttribute("data-invalid", "true");
    }
    let newNotes = document.getElementById("fullNotes").value;
    setMusicSet(newNotes);
  }


  return (
    <>
    <GlobalHeader></GlobalHeader>
    <div className={styles.container}>
      <Head>
        <title>Next Music Director</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer src="https://surikov.github.io/webaudiofont/npm/dist/WebAudioFontPlayer.js" />
        <script defer src="https://surikov.github.io/webaudiofontdata/sound/0730_FluidR3_GM_sf2_file.js" />
        <script defer src="scripts/music.js" />
      </Head>

      <ModalView modalOpen={modalOpen} setModal={setModal} updateCords={updateCords}/>

      <main className={styles.main}>
        <h1 className={styles.title}>Next Music Director</h1>

        <p className={styles.description}>
          Need to practice? Let me guide you...
        </p>

        <Content>
          <Grid>

            <Row>
              <Column sm={4} md={8} lg={16}>
                <h1 className="landing-page__heading">#23 March Steps</h1>
              </Column>
              <Column sm={4} md={8} lg={16}  style={{ margin: '0 0 30px' }}>
                <h3 className="landing-page__subheading">Flute</h3>
              </Column>
              <Column sm={4} md={8} lg={16}  style={{ margin: '0 0 30px' }}>
                <div id="container"></div>
              </Column>
            </Row>

            <Row>
              <Column>
                <Button
                  onClick={playTestInstrument}
                  bg="brand800"
                  rounded="brandRadius"
                  shadow="4"
                  className="landing-page__controler"
                  id="play_music"
                >
                  Play
                </Button>

                <Button
                  onClick={() => {
                    stopTestInstrument();
                  }}
                  bg="brand800"
                  rounded="brandRadius"
                  shadow="4"
                  kind="danger"
                  id="stop_music"
                  disabled={true}
                  className="bx--btn--disabled"
                >
                  Stop
                </Button>

                <Button
                  onClick={() => {
                    resetDefault();
                  }}
                  bg="brand800"
                  rounded="brandRadius"
                  shadow="4"
                  className="landing-page__controler"
                  kind="tertiary"
                >
                  Reset
                </Button>

                <Button
                  kind="primary"
                  onClick={createNew}
                >
                  New
                </Button>
              </Column>
            </Row>
          </Grid>
        </Content>                  
      </main>

    </div>

    <Content className={styles.footer}>
      <GlobalFooter></GlobalFooter>
    </Content>
    <Footer type="micro" disableLocaleButton="true" navigation={nav} />
    
    </>
  )
}
