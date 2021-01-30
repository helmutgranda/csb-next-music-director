import Head from "next/head";
import styles from "../styles/Home.module.scss";

import { Button, Content, Grid, Row, Column } from "carbon-components-react";
import { usePlayer } from "../hooks/use-player.js";

export default function Home() {
  const { playTestInstrument, stopTestInstrument, resetDefault } = usePlayer();

  return (
    <div className={styles.container}>
      <Head>
        <title>MUSIC Director</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>MUSIC Director</h1>

        <p className={styles.description}>Play music</p>

        <Content>
          <Grid>
            <Row>
              <Column sm={4} md={8} lg={16}>
                <h1 className="landing-page__heading">#23 March Steps</h1>
              </Column>
              <Column sm={4} md={8} lg={16}>
                <h3 className="landing-page__subheading">Flute</h3>
              </Column>
              <Column sm={4} md={8} lg={16}>
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
                  onClick={() => this.setState({ open: true })}
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
