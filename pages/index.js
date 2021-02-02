import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

import { Button, Content, Grid, Row, Column, ComposedModal, ModalHeader, ModalBody, Form, TextInput } from "carbon-components-react";

import { usePlayer } from "../hooks/use-player.js";

export default function Home() {
  const { playTestInstrument, stopTestInstrument, resetDefault, updateCords } = usePlayer();
  const [modalOpen, setModal] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>MUSIC Directors</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/MusiQwik.ttf"
          as="font"
          crossOrigin=""
        />
        <script src="https://surikov.github.io/webaudiofont/npm/dist/WebAudioFontPlayer.js" />
      </Head>
      <ComposedModal
            size="md"
            open={modalOpen}
            onClose={() => setModal(false)}
          >
            <ModalHeader>Create a new songs</ModalHeader>
            <ModalBody>
              <Form>
                <div class="bx--row">
                  <div class="bx--col-lg-13 bx--col-md-6 bx--col-sm-2">
                    <div class="outside">
                      <div class="inside">
                        <TextInput
                          helperText="Letters a to g and spaces allowed"
                          id="fullNotes"
                          invalidText="only a to g and spaces allowed."
                          placeholder="bdbdc   edced   dfdfedc fedcb b "
                          pattern="[a-g ]+"
                          light
                        />
                      </div>
                    </div>
                  </div>
                  <div class="bx--col-lg-3 bx--col-md-2 bx--col-sm-2">
                    <div class="outside">
                      <div class="inside">
                        <Button
                          onClick={updateCords}
                          bg="brand800"
                          rounded="brandRadius"
                          shadow="4"
                          kind="secondary"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </ModalBody>
          </ComposedModal>
      <main className={styles.main}>
        <h1 className={styles.title}>MUSIC Director</h1>

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
                  onClick={() => {
                    playTestInstrument();
                  }}
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
                  onClick={() => setModal(true)}
                >
                  New
                </Button>
              </Column>
            </Row>
          </Grid>
        </Content>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://helmutgranda.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Helmut Granda
        </a>
      </footer>
    </div>
  );
}
