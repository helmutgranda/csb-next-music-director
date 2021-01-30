import "../styles/globals.scss";

import { PlayerContext, usePlayerState } from "../hooks/use-player.js";

function MyApp({ Component, pageProps }) {
  const player = usePlayerState();
  return (
    <PlayerContext.Provider value={player}>
      <Component {...pageProps} />
    </PlayerContext.Provider>
  );
}

export default MyApp;
