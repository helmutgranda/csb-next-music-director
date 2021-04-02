import "../styles/globals.scss";
import "../components/GlobalFooter/global-footer.scss";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
