import "../styles/global.css";

import { ChallengeProviders } from "../contexts/ChallengesContexts";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProviders>
      <Component {...pageProps} />
    </ChallengeProviders>
  );
}

export default MyApp;
